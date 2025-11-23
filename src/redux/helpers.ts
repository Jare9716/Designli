import { StockSymbolsProps, StockState } from "@/types";

export function makeInitialStock(
	symbol: StockSymbolsProps,
	name: string
): StockState {
	return {
		symbol,
		name,
		lastPrice: null,
		history: [],
	};
}
