import { MaterialIcons } from "@expo/vector-icons";

import { MaterialIconName } from "@/types";
import { TabBarIconProps } from "@/types";
import { ScreenIcon } from "@/enums";

export function TabBarIcon({ route, size, color }: TabBarIconProps) {
	function isMaterialIconName(iconName: string): iconName is MaterialIconName {
		return iconName in MaterialIcons.glyphMap;
	}
	const iconName = ScreenIcon[route];
	const name = isMaterialIconName(iconName) ? iconName : "help";

	return <MaterialIcons name={name} size={size} color={color} />;
}
