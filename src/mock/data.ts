import { StockProps, PriceAlertProps } from "@/types";

export const MOCK_STOCKS: StockProps[] = [
	{ symbol: "AAPL", name: "Apple Inc.", price: 195.32, changePct: 1.2 },
	{ symbol: "TSLA", name: "Tesla, Inc.", price: 248.77, changePct: -0.8 },
	{ symbol: "AMZN", name: "Amazon.com, Inc.", price: 134.1, changePct: 0.4 },
	{
		symbol: "MSFT",
		name: "Microsoft Corporation",
		price: 329.05,
		changePct: 0.9,
	},
];

export const MOCK_ALERTS: PriceAlertProps[] = [
	{ id: "1", symbol: "AAPL", targetPrice: 200, triggered: false },
	{ id: "2", symbol: "TSLA", targetPrice: 255, triggered: false },
];
