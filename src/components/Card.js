import {Text, View} from "react-native";
import {Image} from "react-native";
import {IOptions} from "./Icons";

export const Card = (props) =>{
	return(
		<View style={{
			height: 64,
			width: 360,
			flexDirection:　"row",
			// backgroundColor: "black"
		}}>

			<View style={{
				height: 64,
				justifyContent: "center"
			}}>
				<Image style={{
					height: 42,
					width: 42,
					borderRadius: 6,
				}} source={{ uri: props.uri}}/>
			</View>

			<View style={{
				width: "60%",
				flexDirection: "row",
				justifyContent: "space-between"
			}}>
				<View style={{
					marginLeft: 6,
					padding: 8,
					height: 64,
					width: "100%",
					flexDirection:　"column",
					justifyContent: "space-around"
				}}>
					<Text style={{
						fontWeight: "700",
						fontSize: 16
					}}>{props.title}</Text>
					<Text style={{
						color: "gray"
					}}>{props.artist}</Text>
				</View>

				<IOptions/>
			</View>

		</View>
	)
}