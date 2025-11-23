import { NavigationContainer } from "@react-navigation/native";

import {
	useFinnhubSocket,
	usePriceAlerts,
	useNotificationPermission,
} from "@/hooks";

import { symbols } from "@/utils";

import { RootStack } from "./rootStack";

function Navigation() {
	const { connected } = useFinnhubSocket(symbols);
	const { granted } = useNotificationPermission();
	usePriceAlerts(granted);
	return (
		<NavigationContainer>
			<RootStack />
		</NavigationContainer>
	);
}

export default Navigation;
