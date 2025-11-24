import React, { useCallback, useEffect, useState } from "react";
import { View, Text, Button, StyleSheet, Platform, Alert } from "react-native";
import * as Notifications from "expo-notifications";
import * as Device from "expo-device";

export function NotificationsTest() {
	const [permissionGranted, setPermissionGranted] = useState<boolean | null>(
		null
	);

	// Ask for permission once when the screen mounts
	useEffect(() => {
		const requestPermissions = async () => {
			const { status: existingStatus } =
				await Notifications.getPermissionsAsync();
			let finalStatus = existingStatus;

			if (existingStatus !== "granted") {
				const { status } = await Notifications.requestPermissionsAsync();
				finalStatus = status;
			}

			const granted = finalStatus === "granted";
			setPermissionGranted(granted);

			if (!granted) {
				Alert.alert(
					"Notifications disabled",
					"Enable notifications in system settings to test alerts."
				);
			}
		};

		requestPermissions();
	}, []);

	const handleTestNotification = useCallback(async () => {
		if (!permissionGranted) {
			console.log("No notification permission.");
			return;
		}

		// Fire an immediate local notification
		await Notifications.scheduleNotificationAsync({
			content: {
				title: "Test Price Alert 📈",
				body: "This is a test notification. Your alert system works.",
				data: { test: true },
			},
			trigger: null, // null = show immediately
		});
	}, [permissionGranted]);

	return (
		<View style={styles.container}>
			<Text style={styles.title}>Notifications Test</Text>
			<Text style={styles.subtitle}>
				Permission:{" "}
				{permissionGranted === null
					? "Checking..."
					: permissionGranted
					? "Granted"
					: "Denied"}
			</Text>

			<Button title="Send test notification" onPress={handleTestNotification} />
			{Platform.OS === "ios" && (
				<Text style={styles.note}>
					On iOS, test on a real device for best results.
				</Text>
			)}
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "#020617",
		alignItems: "center",
		justifyContent: "center",
		padding: 16,
	},
	title: {
		color: "white",
		fontSize: 20,
		fontWeight: "700",
		marginBottom: 8,
	},
	subtitle: {
		color: "#9CA3AF",
		fontSize: 14,
		marginBottom: 16,
	},
	note: {
		color: "#9CA3AF",
		fontSize: 12,
		marginTop: 12,
		textAlign: "center",
	},
});

export default NotificationsTest;
