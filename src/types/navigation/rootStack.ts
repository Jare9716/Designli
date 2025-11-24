import { NavigatorScreenParams } from "@react-navigation/native";
import { BottomTabParamList } from "./bottomTab";
import { User } from "react-native-auth0";

export type RootStackProps = {
	user: User | null;
};

export type RootStackParamList = {
	Login: undefined;
	BottomTab: NavigatorScreenParams<BottomTabParamList>;
};

declare global {
	namespace ReactNavigation {
		interface RootParamList extends RootStackParamList {}
	}
}
