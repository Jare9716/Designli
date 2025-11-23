import { StockState } from "../redux/stockState";

export type StockSymbolsProps =
	| "BINANCE:BTCUSDT"
	| "BINANCE:ETHUSDT"
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

export type PriceAlertProps = {
	id: string;
	symbol: string;
	targetPrice: number;
	triggered: boolean;
};

export type PriceUpdateProps = {
	symbol: StockSymbolsProps;
	price: number;
	timestamp: number;
};

export type MarketDataStateProps = {
	bySymbol: Record<StockSymbolsProps, StockState>;
};
