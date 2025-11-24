import { StockSymbolsProps } from "@/types";

export type SelectSymbolProps = {
	selectedSymbol: StockSymbolsProps;
	setSelectedSymbol: (symbol: StockSymbolsProps) => void;
};
