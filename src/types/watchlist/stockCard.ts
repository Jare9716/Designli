import { StockSymbolsProps } from "../stock/data";

export type StockCardProps = {
	data: { symbol: StockSymbolsProps; price: number | null };
};
