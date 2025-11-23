import { StockSymbolsProps } from "../stock/data";

export type StockCardProps = {
	data: readonly [StockSymbolsProps, number | null];
};
