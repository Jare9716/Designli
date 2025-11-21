import { NavigationContainer } from "@react-navigation/native";

import { RootStack } from "./rootStack";

function Navigation() {
	return (
		<NavigationContainer>
			<RootStack />
		</NavigationContainer>
	);
}

export default Navigation;
