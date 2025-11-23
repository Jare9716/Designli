import { StockState } from "../redux/stockState";

export type StockSymbolsProps =
	| "BINANCEUS:BTCUSD"
	| "BINANCEUS:ETHUSD"
	| "AAPL"
	| "TSLA";

export type PriceMapProps = Record<StockSymbolsProps, number>;

export type TradeMessageProps = {
	type: string;
	data?: {
		p: number;
		s: StockSymbolsProps;
		t: number;
		v: number;
	}[];
};

export type PriceUpdateProps = {
	symbol: StockSymbolsProps;
	price: number;
	timestamp: number;
};

export type MarketDataStateProps = {
	bySymbol: Record<StockSymbolsProps, StockState>;
};
