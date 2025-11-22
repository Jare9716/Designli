import { StyleSheet, FlatList } from "react-native";

import { MOCK_STOCKS } from "@/mock/data";

import { StockCard } from "./components/stockCard";

export function Watchlist() {
	return (
		<FlatList
			style={styles.container}
			data={MOCK_STOCKS}
			keyExtractor={(item) => item.symbol}
			renderItem={({ item }) => <StockCard stock={item} />}
			contentContainerStyle={{ paddingVertical: 16 }}
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
});

export default Watchlist;
