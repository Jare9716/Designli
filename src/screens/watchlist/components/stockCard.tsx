import { useState, useRef, useEffect } from "react";
import { View, Text, StyleSheet } from "react-native";

import { StockSymbolsName } from "@/enums";
import { StockCardProps } from "@/types";

import { currencyFormat } from "@/utils/textTransform";

export function StockCard({ data }: StockCardProps) {
	const { symbol, price } = data;

	const [changePct, setChangePct] = useState(0);
	const baselineRef = useRef<number | null>(null);

	useEffect(() => {
		if (price == null) return;

		if (baselineRef.current == null) {
			baselineRef.current = price;
			setChangePct(0);
			return;
		}

		const base = baselineRef.current || price;
		const pct = ((price - base) / base) * 100;
		setChangePct(pct);
	}, [price]);

	const name = StockSymbolsName[symbol];
	const isUp = changePct >= 0;
	const changeColor = isUp ? "#4ADE80" : "#F97373";

	return (
		<View style={styles.container}>
			<View>
				<Text style={styles.symbolText}>{symbol}</Text>
				<Text style={styles.nameText}>{name}</Text>
			</View>

			<View style={styles.valuesContainer}>
				<Text style={styles.priceText}>
					{price != null ? currencyFormat(price) : "—"}
				</Text>
				<Text style={[styles.changeText, { color: changeColor }]}>
					{changePct >= 0 ? "+" : ""}
					{changePct.toFixed(2)}%
				</Text>
			</View>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flexDirection: "row",
		justifyContent: "space-between",
		alignItems: "center",
		paddingVertical: 12,
		borderBottomWidth: 1,
		borderBottomColor: "rgba(148,163,184,0.2)",
	},
	symbolText: {
		color: "white",
		fontSize: 16,
		fontWeight: "700",
	},
	valuesContainer: {
		alignItems: "flex-end",
	},
	nameText: {
		color: "#9CA3AF",
		fontSize: 13,
		marginTop: 2,
	},
	priceText: {
		color: "white",
		fontSize: 16,
		fontWeight: "600",
	},
	changeText: {
		fontSize: 13,
		marginTop: 2,
	},
});
