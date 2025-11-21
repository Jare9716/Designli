import { NavigatorScreenParams } from "@react-navigation/native";
import { BottomTabParamList } from "./bottomTab";

export type RootStackParamList = {
	BottomTab: NavigatorScreenParams<BottomTabParamList>;
};

declare global {
	namespace ReactNavigation {
		interface RootParamList extends RootStackParamList {}
	}
}
