// import React from "react"

import {Text, View} from "react-native";
import {Image} from "react-native";

export const Card = (props) =>{
	return(
		<View style={{
			height: 120,
			width: "100%",
			flexDirection:　"row"
		}}>
				<Text>{props.title}</Text>
				<Text>{props.description}</Text>
		</View>
	)
}