import { View, Text, StyleSheet } from "react-native";

import { stockCardProps } from "@/types";

export function StockCard({ stock }: stockCardProps) {
	const isUp = stock.changePct >= 0;
	return (
		<View style={styles.container}>
			<View>
				<Text style={styles.titleText}>{stock.symbol}</Text>
				<Text style={styles.nameText}>{stock.name}</Text>
			</View>
			<View style={{ alignItems: "flex-end" }}>
				<Text style={styles.titleText}>${stock.price.toFixed(2)}</Text>
				<Text style={[styles.changeText, isUp ? styles.up : styles.down]}>
					{isUp ? "+" : ""}
					{stock.changePct.toFixed(2)}%
				</Text>
			</View>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		padding: 16,
		borderRadius: 12,
		marginBottom: 12,
		backgroundColor: "#111827",
		flexDirection: "row",
		justifyContent: "space-between",
	},
	titleText: {
		fontSize: 18,
		fontWeight: "700",
		color: "white",
	},
	nameText: {
		fontSize: 14,
		color: "#9CA3AF",
	},
	changeText: {
		fontSize: 14,
	},
	up: {
		color: "#10B981",
	},
	down: {
		color: "#EF4444",
	},
});
