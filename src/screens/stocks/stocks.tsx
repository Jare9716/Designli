import { View, Text, StyleSheet, ScrollView } from "react-native";

import { CartesianChart, Line } from "victory-native";
import { useFont } from "@shopify/react-native-skia";

import { StockSymbol } from "@/types";

const MOCK_SERIES = Array.from({ length: 30 }, (_, i) => ({
	x: i,
	AAPL: 190 + Math.sin(i / 5) * 3,
	TSLA: 250 + Math.sin(i / 3) * 4,
	AMZN: 130 + Math.sin(i / 4) * 2,
	MSFT: 330 + Math.sin(i / 6) * 2,
}));

const Y_KEYS: StockSymbol[] = ["AAPL", "TSLA", "AMZN", "MSFT"];

const COLORS: Record<(typeof Y_KEYS)[number], string> = {
	AAPL: "#4ADE80",
	TSLA: "#F87171",
	AMZN: "#FACC15",
	MSFT: "#60A5FA",
};

export function Stocks() {
	const font = useFont(require("../../../assets/fonts/Roboto-Regular.ttf"), 14);

	return (
		<View style={styles.container}>
			<View style={styles.legendContainer}>
				{Y_KEYS.map((key) => (
					<View key={key} style={styles.legendItem}>
						<View style={[styles.dot, { backgroundColor: COLORS[key] }]} />
						<Text style={styles.legendText}>{key}</Text>
					</View>
				))}
			</View>
			<View style={styles.chartWrapper}>
				<CartesianChart
					data={MOCK_SERIES}
					xKey="x"
					yKeys={Y_KEYS}
					domainPadding={{ left: 10, right: 90 }}
					xAxis={{
						font,
						labelColor: "#bfccdeff",
						lineColor: "rgba(255,255,255,0.2)",
					}}
					yAxis={[
						{
							font,
							labelColor: "#bfccdeff",
							lineColor: "rgba(255,255,255,0.2)",
							axisSide: "right",
							labelPosition: "inset",
							formatYLabel: (y) => `$ ${y.toFixed(2)}`,
						},
					]}
					frame={{
						lineColor: "rgba(255,255,255,0.2)",
						lineWidth: { top: 0, right: 0, bottom: 1, left: 0 },
					}}
				>
					{({ points }) => (
						<>
							{Y_KEYS.map((key) => (
								<Line
									key={key}
									points={points[key]}
									color={COLORS[key]}
									strokeWidth={2}
								/>
							))}
						</>
					)}
				</CartesianChart>
			</View>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "#020617",
		paddingHorizontal: 16,
		paddingTop: 16,
	},
	chartWrapper: {
		height: 350,
	},
	legendContainer: {
		flexDirection: "row",
		justifyContent: "space-evenly",
		marginBottom: 12,
	},
	legendItem: {
		flexDirection: "row",
		alignItems: "center",
		gap: 6,
	},
	dot: {
		width: 10,
		height: 10,
		borderRadius: 5,
	},
	legendText: {
		color: "white",
		fontSize: 14,
		fontWeight: "600",
	},
});

export default Stocks;
