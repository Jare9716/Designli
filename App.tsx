import { GestureHandlerRootView } from "react-native-gesture-handler";
import { SafeAreaProvider } from "react-native-safe-area-context";
import * as Notifications from "expo-notifications";
import { Auth0Provider } from "react-native-auth0";

import { Provider } from "react-redux";
import { store } from "@/redux/store";

import { Navigation } from "@/navigation";

Notifications.setNotificationHandler({
	handleNotification: async () => ({
		shouldPlaySound: false,
		shouldSetBadge: true,
		shouldShowBanner: true,
		shouldShowList: true,
	}),
});

export default function App() {
	return (
		<GestureHandlerRootView>
			<Auth0Provider
				domain={process.env.EXPO_PUBLIC_AUTH_DOMAIN}
				clientId={process.env.EXPO_PUBLIC_AUTH_CLIENT_ID}
			>
				<Provider store={store}>
					<SafeAreaProvider>
						<Navigation />
					</SafeAreaProvider>
				</Provider>
			</Auth0Provider>
		</GestureHandlerRootView>
	);
}
