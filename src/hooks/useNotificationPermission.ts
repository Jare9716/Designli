import { useEffect, useState } from "react";
import * as Notifications from "expo-notifications";

export function useNotificationPermission() {
	const [granted, setGranted] = useState(false);

	useEffect(() => {
		const askPermission = async () => {
			try {
				// Check existing permission
				const { status } = await Notifications.getPermissionsAsync();
				let finalStatus = status;

				// Request if not granted
				if (status !== "granted") {
					const req = await Notifications.requestPermissionsAsync();
					finalStatus = req.status;
				}

				setGranted(finalStatus === "granted");
			} catch (e) {
				console.log("Notification permission error:", e);
				setGranted(false);
			}
		};

		askPermission();
	}, []);

	return { granted };
}
