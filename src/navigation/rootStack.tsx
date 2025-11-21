import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { BottomTab } from "./bottomTab";

import { RootStackParamList } from "@/types";

const Stack = createNativeStackNavigator<RootStackParamList>();

export function RootStack() {
	return (
		<Stack.Navigator>
			<Stack.Screen
				name="BottomTab"
				component={BottomTab}
				options={{ headerShown: false }}
			/>
		</Stack.Navigator>
	);
}
