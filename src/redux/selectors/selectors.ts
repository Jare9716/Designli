import { createSelector } from "@reduxjs/toolkit";
import { RootState } from "../store";

import { StockSymbolsProps } from "@/types";

export const selectChartSeriesFor = (symbol: StockSymbolsProps) =>
	createSelector(
		[(state: RootState) => state.stock.bySymbol[symbol]],
		(stock) => {
			if (!stock || !stock.history.length) return [];

			return stock.history.map((item) => ({
				x: item.timestamp,
				[symbol]: item.price,
			}));
		}
	);
