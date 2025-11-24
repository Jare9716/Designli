import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { RootStackParamList, RootStackProps } from "@/types";

import { BottomTab } from "./bottomTab";
import { Login } from "@/screens";

const Stack = createNativeStackNavigator<RootStackParamList>();

export function RootStack({ user }: RootStackProps) {
	return (
		<Stack.Navigator>
			{user ? (
				<Stack.Screen
					name="BottomTab"
					component={BottomTab}
					options={{ headerShown: false }}
				/>
			) : (
				<Stack.Screen
					name="Login"
					component={Login}
					options={{ headerShown: false }}
				/>
			)}
		</Stack.Navigator>
	);
}
