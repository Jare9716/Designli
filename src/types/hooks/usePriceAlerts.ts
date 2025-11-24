import { User } from "react-native-auth0";

export type usePriceAlertsProps = {
	granted: boolean;
	user: User | null;
};
