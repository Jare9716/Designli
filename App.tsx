import { GestureHandlerRootView } from "react-native-gesture-handler";
import { SafeAreaProvider } from "react-native-safe-area-context";

import { Provider } from "react-redux";
import { store } from "@/redux/store";

import { Navigation } from "@/navigation";

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
