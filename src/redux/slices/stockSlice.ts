import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { PriceUpdateProps, MarketDataStateProps } from "@/types";

import { makeInitialStock } from "../helpers";

const initialState: MarketDataStateProps = {
	bySymbol: {
		"BINANCEUS:BTCUSD": makeInitialStock("BINANCEUS:BTCUSD", "Bitcoin"),
		"BINANCEUS:ETHUSD": makeInitialStock("BINANCEUS:ETHUSD", "Ethereum"),
		AAPL: makeInitialStock("AAPL", "Apple"),
		TSLA: makeInitialStock("TSLA", "Tesla"),
	},
};

const MAX_HISTORY = 100;

export const marketDataSlice = createSlice({
	name: "marketData",
	initialState,
	reducers: {
		pricesBatchUpdated(state, action: PayloadAction<PriceUpdateProps[]>) {
			for (const { symbol, price, timestamp } of action.payload) {
				let stock = state.bySymbol[symbol];

				stock.lastPrice = price;
				stock.history.push({ price, timestamp });

				if (stock.history.length > MAX_HISTORY) {
					stock.history.shift();
				}
			}
		},
	},
});

export const { pricesBatchUpdated } = marketDataSlice.actions;
export default marketDataSlice.reducer;
