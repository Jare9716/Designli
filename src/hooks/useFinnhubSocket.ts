import { useEffect, useRef, useState } from "react";

import { useAppDispatch } from "@/redux/hooks";
import { pricesBatchUpdated } from "@/redux/slices/stockSlice";

import { Urls } from "@/networking/urls";

import { TradeMessageProps, StockSymbolsProps, PriceMapProps } from "@/types";

export function useFinnhubSocket(
	symbols: StockSymbolsProps[],
	throttleMs = 1000
) {
	const [connected, setConnected] = useState(false);

	const API_KEY = process.env.EXPO_PUBLIC_FINNHUB_API_KEY;
	const url = Urls.WS_URL;

	const dispatch = useAppDispatch();

	const latestRef = useRef<PriceMapProps>({} as PriceMapProps);
	const lastEmitRef = useRef(0);

	useEffect(() => {
		if (!symbols.length || !API_KEY) return;

		latestRef.current = {} as PriceMapProps;

		const socket = new WebSocket(`${url}?token=${API_KEY}`);

		socket.onopen = () => {
			setConnected(true);
			symbols.forEach((symbol) => {
				socket.send(JSON.stringify({ type: "subscribe", symbol }));
			});
		};

		socket.onmessage = (event) => {
			let msg: TradeMessageProps;
			try {
				msg = JSON.parse(event.data);
			} catch (e) {
				console.log("WS parse error", e);
				return;
			}

			if (msg.type !== "trade" || !msg.data) return;

			for (const trade of msg.data ?? []) {
				const symbol = trade.s as StockSymbolsProps;
				latestRef.current[symbol] = trade.p;
			}

			const now = Date.now();
			if (now - lastEmitRef.current < throttleMs) return;
			lastEmitRef.current = now;

			const updates: {
				symbol: StockSymbolsProps;
				price: number;
				timestamp: number;
			}[] = symbols.reduce((acc, symbol) => {
				const price = latestRef.current[symbol];
				if (price != null) {
					acc.push({
						symbol,
						price,
						timestamp: now,
					});
				}
				return acc;
			}, [] as { symbol: StockSymbolsProps; price: number; timestamp: number }[]);

			if (updates.length) {
				dispatch(pricesBatchUpdated(updates));
			}
		};

		socket.onerror = (event) => {
			console.log("Finnhub WS error", event);
		};

		socket.onclose = () => {
			setConnected(false);
		};

		return () => {
			if (socket.readyState === WebSocket.OPEN) {
				symbols.forEach((symbol) => {
					socket.send(
						JSON.stringify({
							type: "unsubscribe",
							symbol,
						})
					);
				});
			}
			socket.close();
		};
	}, [symbols.join(","), throttleMs, dispatch]);

	return { connected };
}
