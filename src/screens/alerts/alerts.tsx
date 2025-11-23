import { useState } from "react";
import {
	View,
	Text,
	StyleSheet,
	TextInput,
	Pressable,
	Alert,
	Keyboard,
} from "react-native";

import { Picker } from "@react-native-picker/picker";

import { StockSymbolsProps } from "@/types";

export function Alerts() {
	const symbols: StockSymbolsProps[] = [
		"BINANCE:BTCUSDT",
		"BINANCE:ETHUSDT",
		"AAPL",
		"TSLA",
	];
	const [symbol, setSymbol] = useState<StockSymbolsProps>("AAPL");
	const [targetPrice, setTargetPrice] = useState("");

	const handleSave = () => {
		const price = Number(targetPrice);
		if (!price || price <= 0) {
			Alert.alert("Invalid price", "Please enter a valid target price.");
			return;
		}

		Alert.alert(
			"Alert saved",
			`Alert created for ${symbol} at $${price.toFixed(2)}`
		);
		setTargetPrice("");
	};
	return (
		<Pressable style={styles.container} onPress={() => Keyboard.dismiss()}>
			<Text style={styles.label}>Stock</Text>
			<View style={styles.pickerWrapper}>
				<Picker
					selectedValue={symbol}
					onValueChange={(itemValue) => setSymbol(itemValue)}
					dropdownIconColor="white"
					style={styles.picker}
				>
					{symbols.map((s, index) => (
						<Picker.Item key={index} label={s} value={s} color="white" />
					))}
				</Picker>
			</View>
			<Text style={styles.label}>Target Price (USD)</Text>
			<TextInput
				value={targetPrice}
				onChangeText={setTargetPrice}
				keyboardType="decimal-pad"
				placeholder="e.g. 210"
				placeholderTextColor="#6B7280"
				style={styles.input}
			/>
			<Pressable style={styles.button} onPress={handleSave}>
				<Text style={styles.buttonText}>Save Alert (mock)</Text>
			</Pressable>
		</Pressable>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		paddingHorizontal: 16,
		paddingTop: 16,
		backgroundColor: "#020617",
	},
	label: {
		fontSize: 14,
		marginTop: 12,
		marginBottom: 4,
		color: "#E5E7EB",
	},
	pickerWrapper: {
		borderRadius: 8,
		borderWidth: 1,
		borderColor: "#374151",
		backgroundColor: "#111827",
	},
	picker: {
		color: "white",
	},
	input: {
		backgroundColor: "#111827",
		borderRadius: 8,
		borderWidth: 1,
		borderColor: "#374151",
		paddingHorizontal: 12,
		paddingVertical: 10,
		color: "white",
		marginTop: 4,
	},
	button: {
		marginTop: 24,
		backgroundColor: "#2563EB",
		borderRadius: 999,
		paddingVertical: 12,
		alignItems: "center",
	},
	buttonText: {
		color: "white",
		fontWeight: "600",
		fontSize: 16,
	},
});

export default Alerts;
