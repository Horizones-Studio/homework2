import {Ionicons, MaterialCommunityIcons} from "@expo/vector-icons";
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

export function IPlaySkipBack() {
	return(
		<View style={{
			// backgroundColor: "gray",
			height: 48,
			width: 48,
			justifyContent: "center",
			alignItems: "center"
		}}>

			<Ionicons name="play-skip-back" size={24} color="black"/>

		</View>
	)
}

export function IPlaySkipForward() {
	return(
		<View style={{
			// backgroundColor: "gray",
			height: 48,
			width: 48,
			justifyContent: "center",
			alignItems: "center"
		}}>

			<Ionicons name="play-skip-forward" size={24} color="black"/>

		</View>
	)
}

export function IPlay() {
	return(
		<View style={{
			// backgroundColor: "gray",
			height: 48,
			width: 48,
			justifyContent: "center",
			alignItems: "center"
		}}>

			<Ionicons name="play" size={24} color="black"/>

		</View>
	)
}

// export function IOptions() {
// 	return(
// 		<View style={{
// 			backgroundColor: "gray",
// 			height: 64,
// 			width: 64,
// 			justifyContent: "center",
// 			alignItems: "center"
// 		}}>
//
// 			<MaterialCommunityIcons name="dots-horizontal" size={16} color="black"/>
//
// 		</View>
// 	)
// }
//
// export function IOptions() {
// 	return(
// 		<View style={{
// 			backgroundColor: "gray",
// 			height: 64,
// 			width: 64,
// 			justifyContent: "center",
// 			alignItems: "center"
// 		}}>
//
// 			<MaterialCommunityIcons name="dots-horizontal" size={16} color="black"/>
//
// 		</View>
// 	)
// }