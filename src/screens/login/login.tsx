import { View, Pressable, StyleSheet, Text } from "react-native";

import { SafeAreaView } from "react-native-safe-area-context";
import { useAuth0 } from "react-native-auth0";

function Login() {
	const { authorize } = useAuth0();

	async function login() {
		try {
			await authorize();
		} catch (e) {
			console.log(e);
		}
	}

	return (
		<SafeAreaView style={styles.container}>
			<View style={styles.content}>
				<Text style={styles.title}>Welcome to Designli Stock Tracker</Text>
				<Text style={styles.subtitle}>
					Track your favorite markets in real time, visualize price action, and
					stay on top of your alerts.
				</Text>
			</View>
			<Pressable style={styles.button} onPress={login}>
				<Text style={styles.buttonText}>Login</Text>
			</Pressable>
		</SafeAreaView>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		paddingHorizontal: 16,
		gap: 24,
		backgroundColor: "#020617",
		justifyContent: "center",
	},
	content: {
		marginTop: 80,
	},
	title: {
		color: "white",
		fontSize: 28,
		fontWeight: "700",
		marginBottom: 8,
	},
	subtitle: {
		color: "#9CA3AF",
		fontSize: 15,
		lineHeight: 22,
	},
	button: {
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

export default Login;
