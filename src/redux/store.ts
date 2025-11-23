import { configureStore } from "@reduxjs/toolkit";
import stockReducer from "./slices/stockSlice";
import alertsReducer from "./slices/alertsSlice";

export const store = configureStore({
	reducer: {
		stock: stockReducer,
		alerts: alertsReducer,
	},
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
