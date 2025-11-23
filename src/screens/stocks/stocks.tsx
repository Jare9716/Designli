import { View, Text, StyleSheet } from "react-native";

import { CartesianChart, Line } from "victory-native";
import { useFont } from "@shopify/react-native-skia";

import { useAppSelector } from "@/redux/hooks";
import { selectChartSeries } from "@/redux/selectors/selectors";

import { chartColors } from "@/enums";

import { symbols } from "@/utils";

export function Stocks() {
	const font = useFont(require("../../../assets/fonts/Roboto-Regular.ttf"), 14);

	// 🔥 Real-time chart data from Redux
	const data = useAppSelector(selectChartSeries(symbols));

	return (
		<View style={styles.container}>
			<View style={styles.chartWrapper}>
				<CartesianChart
					data={data}
					xKey="x"
					yKeys={symbols}
					domainPadding={{ left: 10, right: 90 }}
					xAxis={{
						font,
						labelColor: "#bfccdeff",
						lineColor: "rgba(255,255,255,0.2)",
						formatXLabel: (x) => {
							const d = new Date(x);
							return `${d.getHours()}:${String(d.getMinutes()).padStart(
								2,
								"0"
							)}`;
						},
					}}
					yAxis={[
						{
							font,
							labelColor: "#bfccdeff",
							lineColor: "rgba(255,255,255,0.2)",
							axisSide: "right",
							labelPosition: "inset",
							formatYLabel: (y) => `$${y.toFixed(2)}`,
						},
					]}
					frame={{
						lineColor: "rgba(255,255,255,0.2)",
						lineWidth: { top: 0, right: 0, bottom: 1, left: 0 },
					}}
				>
					{({ points }) => (
						<>
							{symbols.map((key) => (
								<Line
									key={key}
									points={points[key]}
									color={chartColors[key]}
									strokeWidth={2}
								/>
							))}
						</>
					)}
				</CartesianChart>
			</View>
			<View style={styles.legendContainer}>
				{symbols.map((key) => (
					<View key={key} style={styles.legendItem}>
						<View style={[styles.dot, { backgroundColor: chartColors[key] }]} />
						<Text style={styles.legendText}>{key}</Text>
					</View>
				))}
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
		marginTop: 12,
		gap: 12,
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
