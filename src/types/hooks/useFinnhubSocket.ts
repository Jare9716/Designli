import { User } from "react-native-auth0";
import { StockSymbolsProps } from "../stock/data";

export type useFinnhubSocketProps = {
	symbols: StockSymbolsProps[];
	user: User | null;
};
