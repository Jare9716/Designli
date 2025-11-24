import type { StockSymbolsProps } from "@/types";

export type PriceAlertProps = {
	id: string;
	symbol: StockSymbolsProps;
	targetPrice: number;
	enabled: boolean;
	triggeredAt?: number;
};

export type AlertsStateProps = {
	items: PriceAlertProps[];
};

export type AddAlertPayloadProps = {
	symbol: StockSymbolsProps;
	targetPrice: number;
	id: string;
};

export type StockTriggeredPayloadProps = {
	id: string;
	triggeredAt: number;
};
