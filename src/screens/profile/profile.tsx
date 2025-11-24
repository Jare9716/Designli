import { View, Pressable, StyleSheet, Text, Image } from "react-native";

import { useAuth0 } from "react-native-auth0";
import { MaterialIcons } from "@expo/vector-icons";

function Profile() {
	const { clearSession, user } = useAuth0();

	const logOut = async () => {
		try {
			await clearSession();
		} catch (e) {
			console.log(e);
		}
	};

	return (
		<View style={styles.container}>
			<View style={styles.userContainer}>
				<Image
					source={{
						uri: user?.picture,
					}}
					style={styles.image}
					resizeMode="cover"
				/>
				<View style={styles.userTextcontainer}>
					<Text style={styles.userTitleText}>{user?.name}</Text>
					<Text style={styles.userSubtitleText}>{user?.email}</Text>
				</View>
			</View>
			<Pressable style={styles.logutButton} onPress={logOut}>
				<Text style={styles.logoutText}>Log Out</Text>
				<MaterialIcons name="logout" size={18} color="#2563EB" />
			</Pressable>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "#020617",
		justifyContent: "space-between",
		alignItems: "center",
		paddingVertical: 24,
	},
	logutButton: {
		flexDirection: "row",
		gap: 6,
		alignItems: "flex-end",
	},
	userContainer: {
		alignItems: "center",
		gap: 12,
	},
	image: {
		width: 100,
		height: 100,
		borderRadius: 50,
	},
	userTextcontainer: {
		alignItems: "center",
	},
	userTitleText: {
		color: "white",
		fontWeight: "600",
		fontSize: 16,
	},
	userSubtitleText: {
		color: "white",
		fontWeight: "400",
		fontSize: 14,
	},
	logoutText: {
		color: "#2563EB",
		fontWeight: "600",
		fontSize: 16,
		textDecorationLine: "underline",
	},
});

export default Profile;
