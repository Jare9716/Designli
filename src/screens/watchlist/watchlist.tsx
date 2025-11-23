import { StyleSheet, FlatList } from "react-native";

import { useAppSelector } from "@/redux/hooks";

import { symbols } from "@/utils";

import { StockCard } from "./components/stockCard";

export function Watchlist() {
	const bySymbol = useAppSelector((state) => state.stock.bySymbol);

	const data = symbols.map((symbol) => {
		const stock = bySymbol[symbol];
		return [symbol, stock.lastPrice] as const;
	});

	//TODO: check if the card cand received the data as it is.
	// console.log(bySymbol);

	return (
		<FlatList
			style={styles.container}
			data={data}
			keyExtractor={([symbol]) => symbol}
			renderItem={({ item }) => <StockCard data={item} />}
			contentContainerStyle={styles.itemContainer}
		/>
	);
}

const styles = StyleSheet.create({
	container: {
		paddingHorizontal: 16,
		paddingTop: 16,
		flex: 1,
		backgroundColor: "#020617",
	},
	itemContainer: {
		paddingVertical: 16,
	},
});

export default Watchlist;
