import { useEffect } from "react";
import * as Notifications from "expo-notifications";

import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { alertStockTriggered } from "@/redux/slices/alertsSlice";

import { usePriceAlertsProps } from "@/types";

import { currencyFormat } from "@/utils/textTransform";

export function usePriceAlerts({ granted, user }: usePriceAlertsProps) {
	const alerts = useAppSelector((state) => state.alerts.items);
	const bySymbol = useAppSelector((state) => state.stock.bySymbol);

	const dispatch = useAppDispatch();

	useEffect(() => {
		if (!granted || !alerts.length || !user) return;

		alerts.forEach((alert) => {
			if (!alert.enabled || alert.triggeredAt) return;

			const stock = bySymbol[alert.symbol];
			const lastPrice = stock?.lastPrice;

			if (lastPrice == null) return;
			const conditionMet = lastPrice >= alert.targetPrice;

			if (!conditionMet) return;
			(async () => {
				try {
					await Notifications.scheduleNotificationAsync({
						content: {
							title: `${alert.symbol} crossed your target`,
							body: `Current price: $${currencyFormat(
								lastPrice
							)} (alert: $${currencyFormat(alert.targetPrice)})`,
							data: {
								alertId: alert.id,
								symbol: alert.symbol,
							},
						},
						trigger: null,
					});

					dispatch(
						alertStockTriggered({
							id: alert.id,
							triggeredAt: Date.now(),
						})
					);
				} catch (e) {
					console.log("Error scheduling price alert notification", e);
				}
			})();
		});
	}, [alerts, bySymbol, dispatch, granted, user]);
}
