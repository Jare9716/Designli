import { useEffect } from "react";
import * as Notifications from "expo-notifications";

import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { alertMarkedTriggered } from "@/redux/slices/alertsSlice";
import { RootState } from "@/redux/store";

export function usePriceAlerts(notificationsEnabled: boolean) {
	const alerts = useAppSelector((state: RootState) => state.alerts.items);
	const bySymbol = useAppSelector((state: RootState) => state.stock.bySymbol);

	const dispatch = useAppDispatch();

	useEffect(() => {
		if (!notificationsEnabled) return;
		if (!alerts.length) return;

		alerts.forEach((alert) => {
			if (!alert.enabled || alert.triggeredAt) return;

			const stock = bySymbol[alert.symbol];
			const lastPrice = stock?.lastPrice;

			if (lastPrice == null) return;

			const conditionMet =
				alert.direction === "above"
					? lastPrice >= alert.targetPrice
					: lastPrice <= alert.targetPrice;

			if (!conditionMet) return;

			// fire & mark triggered
			(async () => {
				try {
					await Notifications.scheduleNotificationAsync({
						content: {
							title: `${alert.symbol} crossed your target`,
							body: `Current price: $${lastPrice.toFixed(
								2
							)} (alert: $${alert.targetPrice.toFixed(2)})`,
							data: {
								alertId: alert.id,
								symbol: alert.symbol,
							},
						},
						trigger: null, // immediate
					});

					dispatch(
						alertMarkedTriggered({
							id: alert.id,
							triggeredAt: Date.now(),
						})
					);
				} catch (e) {
					console.log("Error scheduling price alert notification", e);
				}
			})();
		});
	}, [alerts, bySymbol, dispatch]);
}
