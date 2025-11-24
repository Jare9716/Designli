import { StocksDataStateProps } from "@/types";

import { symbols } from "@/utils";

export function convertSateToFlatList(data: StocksDataStateProps) {
	const flatData = symbols.map((symbol) => {
		const stock = data.bySymbol[symbol];

		return { symbol: symbol, price: stock.lastPrice };
	});

	return flatData;
}
