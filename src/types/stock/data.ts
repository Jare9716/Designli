export type StockSymbol = "AAPL" | "TSLA" | "AMZN" | "MSFT";

export type StockProps = {
	symbol: StockSymbol;
	name: string;
	price: number;
	changePct: number;
};

export type PriceAlertProps = {
	id: string;
	symbol: StockSymbol;
	targetPrice: number;
	triggered: boolean;
};
