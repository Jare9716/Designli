import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import type {
	AlertsStateProps,
	AddAlertPayloadProps,
	StockTriggeredPayloadProps,
} from "@/types";

const initialState: AlertsStateProps = {
	items: [],
};

export const alertsSlice = createSlice({
	name: "alerts",
	initialState,
	reducers: {
		alertAdded(state, action: PayloadAction<AddAlertPayloadProps>) {
			const { symbol, targetPrice, id } = action.payload;
			state.items.push({
				id,
				symbol,
				targetPrice,
				enabled: true,
				triggeredAt: undefined,
			});
		},
		alertRemoved(state, action: PayloadAction<string>) {
			state.items = state.items.filter((alert) => alert.id !== action.payload);
		},
		alertToggled(state, action: PayloadAction<string>) {
			const alert = state.items.find((alert) => alert.id === action.payload);
			if (alert) {
				alert.enabled = !alert.enabled;
			}
		},
		alertStockTriggered(
			state,
			action: PayloadAction<StockTriggeredPayloadProps>
		) {
			const { id, triggeredAt } = action.payload;
			const alert = state.items.find((alert) => alert.id === id);
			if (alert) {
				alert.triggeredAt = triggeredAt;
				alert.enabled = false;
			}
		},
	},
});

export const { alertAdded, alertRemoved, alertToggled, alertStockTriggered } =
	alertsSlice.actions;

export default alertsSlice.reducer;
