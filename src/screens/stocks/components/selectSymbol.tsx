import { View, Text, Pressable, StyleSheet } from "react-native";

import { StockSymbolsName } from "@/enums";
import { SelectSymbolProps } from "@/types";

import { symbols } from "@/utils";

export function SelectSymbol({
	selectedSymbol,
	setSelectedSymbol,
}: SelectSymbolProps) {
	return (
		<View style={styles.tabs}>
			{symbols.map((symbol) => (
				<Pressable
					key={symbol}
					onPress={() => setSelectedSymbol(symbol)}
					style={[
						styles.tabItem,
						selectedSymbol === symbol && styles.tabItemActive,
					]}
				>
					<Text
						style={[
							styles.tabLabel,
							selectedSymbol === symbol && styles.tabLabelActive,
						]}
					>
						{StockSymbolsName[symbol]}
					</Text>
				</Pressable>
			))}
		</View>
	);
}

const styles = StyleSheet.create({
	tabs: {
		flexDirection: "row",
		marginBottom: 12,
		borderBottomWidth: 1,
		borderBottomColor: "rgba(148, 163, 184, 0.4)",
	},
	tabItem: {
		paddingVertical: 8,
		marginRight: 16,
		borderBottomWidth: 2,
		borderBottomColor: "transparent",
	},
	tabItemActive: {
		borderBottomColor: "#2563EB",
	},
	tabLabel: {
		color: "#9CA3AF",
		fontSize: 14,
		fontWeight: "500",
	},
	tabLabelActive: {
		color: "#FFFFFF",
		fontWeight: "700",
	},
});
