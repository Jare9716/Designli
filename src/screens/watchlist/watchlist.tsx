import { View, Text, StyleSheet } from "react-native";

export function Watchlist() {
	return (
		<View style={styles.container}>
			<Text>Watchlist</Text>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		justifyContent: "center",
		alignItems: "center",
		flex: 1,
	},
});

export default Watchlist;
