export type BottomTabParamList = {
	Alerts: undefined;
	Stocks: undefined;
	Watchlist: undefined;
	Profile: undefined;
};

export type TabBarIconProps = {
	route: keyof BottomTabParamList;
	size: number;
	color: string;
};