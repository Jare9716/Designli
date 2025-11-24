import { StyleSheet, FlatList } from "react-native";

import { useAppSelector } from "@/redux/hooks";

import { convertSateToFlatList } from "./helpers";

import { StockCard } from "./components/stockCard";

function Watchlist() {
	const stock = useAppSelector((state) => state.stock);
	const data = convertSateToFlatList(stock);

	return (
		<FlatList
			style={styles.container}
			data={data}
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
