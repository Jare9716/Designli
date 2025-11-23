import { createSelector } from "@reduxjs/toolkit";
import { RootState } from "../store";
import { StockSymbolsProps } from "@/types";

export const selectChartSeries = (symbols: StockSymbolsProps[]) =>
	createSelector([(state: RootState) => state.stock.bySymbol], (bySymbol) => {
		const longestHistory = Math.max(
			...symbols.map((s) => bySymbol[s]?.history.length ?? 0)
		);

		const rows = [];

		for (let i = 0; i < longestHistory; i++) {
			const row: any = {};
			let x = i; // fallback if timestamps missing

			for (const symbol of symbols) {
				const item = bySymbol[symbol]?.history[i];
				if (item) {
					row[symbol] = item.price;
					x = item.timestamp; // use actual timestamp
				}
			}

			row.x = x;
			rows.push(row);
		}

		return rows;
	});
