import { StockState } from "../redux/stockState";

export type StockSymbolsProps =
	| "BINANCE:BTCUSDT"
	| "BINANCE:ETHUSDT"
	| "BINANCE:BNBUSDT"
	| "BINANCE:ZECUSDT";

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

export type StocksDataStateProps = {
	bySymbol: Record<StockSymbolsProps, StockState>;
};
