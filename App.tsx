import { GestureHandlerRootView } from "react-native-gesture-handler";
import { SafeAreaProvider } from "react-native-safe-area-context";

import { Navigation } from "@/navigation";

export default function App() {
	return (
		<GestureHandlerRootView>
			<SafeAreaProvider>
				<Navigation />
			</SafeAreaProvider>
		</GestureHandlerRootView>
	);
}
