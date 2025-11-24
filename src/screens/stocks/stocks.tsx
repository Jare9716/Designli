import { useState } from "react";
import { View, Text, StyleSheet } from "react-native";

import { CartesianChart, Line } from "victory-native";
import { useFont } from "@shopify/react-native-skia";

import { useAppSelector } from "@/redux/hooks";
import { selectChartSeriesFor } from "@/redux/selectors/selectors";

import { chartColors, StockSymbolsName } from "@/enums";
import { StockSymbolsProps } from "@/types";

import { currencyFormat, timeFormat } from "@/utils";

import { SelectSymbol } from "./components/selectSymbol";

export function Stocks() {
	const font = useFont(require("../../../assets/fonts/Roboto-Regular.ttf"), 14);

	const [selectedSymbol, setSelectedSymbol] =
		useState<StockSymbolsProps>("BINANCE:BTCUSDT");

	const title = StockSymbolsName[selectedSymbol];
	const data = useAppSelector(selectChartSeriesFor(selectedSymbol));

	if (!data.length) {
		return (
			<View style={styles.container}>
				<Text style={styles.title}>{title}</Text>
				<Text style={styles.subtitle}>
					Waiting for data for {selectedSymbol}...
				</Text>
				<SelectSymbol
					selectedSymbol={selectedSymbol}
					setSelectedSymbol={setSelectedSymbol}
				/>
			</View>
		);
	}

	return (
		<View style={styles.container}>
			<Text style={styles.title}>{title}</Text>
			<Text style={styles.subtitle}>{selectedSymbol}</Text>
			<SelectSymbol
				selectedSymbol={selectedSymbol}
				setSelectedSymbol={setSelectedSymbol}
			/>
			<View style={styles.chartWrapper}>
				<CartesianChart
					data={data}
					xKey="x"
					yKeys={[selectedSymbol]}
					domainPadding={{ left: 10, right: 90 }}
					xAxis={{
						font,
						labelColor: "#bfccdeff",
						lineColor: "rgba(255,255,255,0.2)",
						formatXLabel: (x) => {
							return timeFormat(x);
						},
					}}
					yAxis={[
						{
							font,
							labelColor: "#bfccdeff",
							lineColor: "rgba(255,255,255,0.2)",
							axisSide: "right",
							labelPosition: "inset",
							formatYLabel: (y) => `${currencyFormat(y)}`,
						},
					]}
					frame={{
						lineColor: "rgba(255,255,255,0.2)",
						lineWidth: { top: 0, right: 0, bottom: 1, left: 0 },
					}}
				>
					{({ points }) => (
						<Line
							points={points[selectedSymbol]}
							color={chartColors[selectedSymbol]}
							strokeWidth={2}
						/>
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
	title: {
		color: "white",
		fontSize: 20,
		fontWeight: "700",
		marginBottom: 4,
	},
	subtitle: {
		color: "#9CA3AF",
		fontSize: 14,
	},
	chartWrapper: {
		height: 350,
	},
});

export default Stocks;
