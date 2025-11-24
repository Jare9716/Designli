import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { PriceUpdateProps, StocksDataStateProps } from "@/types";

import { makeInitialStock } from "../helpers";

const initialState: StocksDataStateProps = {
	bySymbol: {
		"BINANCE:BTCUSDT": makeInitialStock("BINANCE:BTCUSDT", "Bitcoin"),
		"BINANCE:ETHUSDT": makeInitialStock("BINANCE:ETHUSDT", "Ethereum"),
		"BINANCE:BNBUSDT": makeInitialStock("BINANCE:BNBUSDT", "BNB"),
		"BINANCE:ZECUSDT": makeInitialStock("BINANCE:ZECUSDT", "Zcash"),
	},
};

const MAX_HISTORY = 100;

export const stocksDataSlice = createSlice({
	name: "stocksData",
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

export const { pricesBatchUpdated } = stocksDataSlice.actions;
export default stocksDataSlice.reducer;
