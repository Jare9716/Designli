import { NavigationContainer } from "@react-navigation/native";

import { useFinnhubSocket } from "@/hooks";

import { StockSymbolsProps } from "@/types";

import { RootStack } from "./rootStack";

const WATCHLIST: StockSymbolsProps[] = ["BINANCE:BTCUSDT", "BINANCE:ETHUSDT"];

function Navigation() {
	const { connected } = useFinnhubSocket(WATCHLIST);
	return (
		<NavigationContainer>
			<RootStack />
		</NavigationContainer>
	);
}

export default Navigation;
