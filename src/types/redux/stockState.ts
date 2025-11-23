import { StockSymbolsProps } from "../stock/data";

export type StockState = {
	symbol: StockSymbolsProps;
	name: string;
	lastPrice: number | null;
	history: { timestamp: number; price: number }[];
};
