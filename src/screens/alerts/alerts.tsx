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

import { useAppDispatch } from "@/redux/hooks";
import { alertAdded } from "@/redux/slices/alertsSlice";

import { StockSymbolsProps } from "@/types";
import { StockSymbolsName } from "@/enums";

import { symbols, currencyFormat } from "@/utils";

export function Alerts() {
	const [symbol, setSymbol] = useState<StockSymbolsProps>("BINANCE:BTCUSDT");
	const [targetPrice, setTargetPrice] = useState("");

	const dispatch = useAppDispatch();

	function createAlert(price: number) {
		const id = symbol + "-" + Date.now();
		dispatch(
			alertAdded({
				symbol,
				targetPrice: price,
				id,
			})
		);
		setTargetPrice("");
	}

	const handleSave = () => {
		const price = Number(targetPrice);
		if (!price || price <= 0) {
			Alert.alert("Invalid price", "Please enter a valid target price.");
			return;
		}
		createAlert(price);
		Alert.alert(
			"Alert saved",
			`Alert created for ${StockSymbolsName[symbol]} at ${currencyFormat(
				price
			)}`
		);
	};

	return (
		<Pressable style={styles.container} onPress={() => Keyboard.dismiss()}>
			<Text style={styles.label}>Stock</Text>
			<View style={styles.pickerWrapper}>
				<Picker
					selectedValue={symbol}
					onValueChange={(itemValue) => setSymbol(itemValue)}
					dropdownIconColor="white"
				>
					{symbols.map((symbol) => (
						<Picker.Item
							key={symbol}
							label={StockSymbolsName[symbol]}
							value={symbol}
							color="white"
							style={styles.pickerItemStyle}
						/>
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
				<Text style={styles.buttonText}>Save Alert</Text>
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
	pickerItemStyle: {
		backgroundColor: "#111827",
	},
	input: {
		backgroundColor: "#111827",
		borderRadius: 8,
		borderWidth: 1,
		borderColor: "#374151",
		paddingHorizontal: 12,
		height: 48,
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
