import {Pressable, Text, View} from "react-native";
import {Image} from "react-native";
import {IOptions} from "./Icons";

export const Card = ({ Id ,songId ,uri, artist, title, ...props}) =>{
	return(
		<Pressable style={ Id === songId?{
			height: 64,
			width: "100%",
			flexDirection:　"row",
			borderRadius: 12,
			backgroundColor: "#e1e1f5"
			// backgroundColor: "black"

		}: {
			height: 64,
			width: "100%",
			flexDirection:　"row",
			borderRadius: 8
			// backgroundColor: "lightgray"
			// backgroundColor: "black"
		}} {...props}
		>

			<View style={{
				height: 64,
				justifyContent: "center",
			}}>
				<Image style={{
					height: 42,
					width: 42,
					borderRadius: 6,
				}} source={{uri}}/>
			</View>

			<View style={{
				width: "87%",
				flexDirection: "row",
				justifyContent: "space-between",
				// backgroundColor: "red"
			}}>
				<View style={{
					marginLeft: 6,
					padding: 8,
					height: 64,
					width: "auto",
					flexDirection:　"column",
					justifyContent: "space-around",
					// backgroundColor: "lightgray"

				}}>
					<Text style={{
						fontWeight: "700",
						fontSize: 16,
					}}>{title}</Text>
					<Text style={{
						color: "gray",
						// backgroundColor: "lightgray"
					}}>{artist}</Text>
				</View>
				<IOptions/>
			</View>

		</Pressable>
	)
}