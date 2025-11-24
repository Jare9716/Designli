import { NavigationContainer } from "@react-navigation/native";

import { useAuth0 } from "react-native-auth0";

import {
	useFinnhubSocket,
	usePriceAlerts,
	useNotificationPermission,
} from "@/hooks";

import { symbols } from "@/utils";

import { RootStack } from "./rootStack";

function Navigation() {
	const { user } = useAuth0();
	const { granted } = useNotificationPermission();

	const { connected } = useFinnhubSocket({ symbols, user });
	usePriceAlerts({ granted, user });

	return (
		<NavigationContainer>
			<RootStack user={user} />
		</NavigationContainer>
	);
}

export default Navigation;
