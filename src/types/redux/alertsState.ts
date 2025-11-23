import type { StockSymbolsProps } from "@/types";

export type PriceAlertDirection = "above" | "below";

export type PriceAlertProps = {
	id: string;
	symbol: StockSymbolsProps;
	targetPrice: number;
	direction: PriceAlertDirection;
	enabled: boolean;
	triggeredAt?: number;
};

export type AlertsStateProps = {
	items: PriceAlertProps[];
};
