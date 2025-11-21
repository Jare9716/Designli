import { View, Text, StyleSheet } from "react-native";

export function Stocks() {
	return (
		<View style={styles.container}>
			<Text>Stocks</Text>
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

export default Stocks;
