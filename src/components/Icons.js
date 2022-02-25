import {MaterialCommunityIcons} from "@expo/vector-icons";
import {View} from "react-native";


export function IOptions() {
	return(
		<View style={{
			backgroundColor: "gray",
			height: 64,
			width: 64,
			justifyContent: "center",
			alignItems: "center"
		}}>

		<MaterialCommunityIcons name="dots-horizontal" size={16} color="black"/>

		</View>
	)
}