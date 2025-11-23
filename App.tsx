import { GestureHandlerRootView } from "react-native-gesture-handler";
import { SafeAreaProvider } from "react-native-safe-area-context";
import * as Notifications from "expo-notifications";

import { Provider } from "react-redux";
import { store } from "@/redux/store";

import { Navigation } from "@/navigation";

Notifications.setNotificationHandler({
	handleNotification: async () => ({
		shouldPlaySound: false,
		shouldSetBadge: false,
		shouldShowBanner: true,
		shouldShowList: true,
	}),
});

export default function App() {
	return (
		<GestureHandlerRootView>
			<Provider store={store}>
				<SafeAreaProvider>
					<Navigation />
				</SafeAreaProvider>
			</Provider>
		</GestureHandlerRootView>
	);
}
