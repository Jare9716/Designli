import { View, Text, StyleSheet } from "react-native";

export function Alerts() {
	return (
		<View style={styles.container}>
			<Text>Alerts</Text>
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

export default Alerts;
