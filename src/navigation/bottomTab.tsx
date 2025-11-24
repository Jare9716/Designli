import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import { BottomTabParamList } from "@/types";

import { Stocks, Watchlist, Alerts } from "@/screens";

import { TabBarIcon } from "@/components";

const Tab = createBottomTabNavigator<BottomTabParamList>();

export function BottomTab() {
	return (
		<Tab.Navigator
			screenOptions={({ route }) => ({
				tabBarIcon: ({ size, color }) => {
					return <TabBarIcon route={route.name} size={size} color={color} />;
				},
				tabBarInactiveTintColor: "white",
				tabBarActiveTintColor: "#2563EB",
				tabBarStyle: {
					backgroundColor: "#1E293B",
				},
				headerStyle: {
					backgroundColor: "#1E293B",
				},
				headerTitleStyle: {
					color: "white",
				},
			})}
		>
			<Tab.Screen name="Watchlist" component={Watchlist} />
			<Tab.Screen name="Stocks" component={Stocks} />
			<Tab.Screen name="Alerts" component={Alerts} />
		</Tab.Navigator>
	);
}
