import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import type { AlertsStateProps, PriceAlertDirection } from "@/types";
import type { StockSymbolsProps } from "@/types";

const initialState: AlertsStateProps = {
	items: [],
};

type AddAlertPayload = {
	symbol: StockSymbolsProps;
	targetPrice: number;
	direction?: PriceAlertDirection; // default: "above"
};

type MarkTriggeredPayload = {
	id: string;
	triggeredAt: number;
};

export const alertsSlice = createSlice({
	name: "alerts",
	initialState,
	reducers: {
		alertAdded(state, action: PayloadAction<AddAlertPayload>) {
			const { symbol, targetPrice, direction = "above" } = action.payload;
			const id = `${symbol}-${Date.now()}`;

			state.items.push({
				id,
				symbol,
				targetPrice,
				direction,
				enabled: true,
				triggeredAt: undefined,
			});
		},
		alertRemoved(state, action: PayloadAction<string>) {
			state.items = state.items.filter((a) => a.id !== action.payload);
		},
		alertToggled(state, action: PayloadAction<string>) {
			const alert = state.items.find((a) => a.id === action.payload);
			if (alert) {
				alert.enabled = !alert.enabled;
			}
		},
		alertMarkedTriggered(state, action: PayloadAction<MarkTriggeredPayload>) {
			const { id, triggeredAt } = action.payload;
			const alert = state.items.find((a) => a.id === id);
			if (alert) {
				alert.triggeredAt = triggeredAt;
				// optional: auto-disable after triggering
				alert.enabled = false;
			}
		},
	},
});

export const { alertAdded, alertRemoved, alertToggled, alertMarkedTriggered } =
	alertsSlice.actions;

export default alertsSlice.reducer;
