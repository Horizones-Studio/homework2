import {Fontisto, Ionicons, MaterialCommunityIcons} from "@expo/vector-icons";
import {View} from "react-native";
import {useState} from "react";
import {Pressable} from "react-native";


export function IOptions() {
	return(
		<Pressable style={{
			// backgroundColor: "gray",
			height: 64,
			width: 32,
			justifyContent: "center",
			alignItems: "center"
		}}>
			<MaterialCommunityIcons name="dots-horizontal" size={24} color="black"/>
		</Pressable>
	)
}

export function IPlaySkipBack({onPress}) {
	return(
		<Pressable style={{
			// backgroundColor: "gray",
			height: 48,
			width: 48,
			justifyContent: "center",
			alignItems: "center"
		}} onPress={onPress}>

			<Ionicons name="play-skip-back" size={24} color="black"/>

		</Pressable>
	)
}

export function IPlaySkipForward({onPress}) {
	return(
		<Pressable style={{
			// backgroundColor: "gray",
			height: 48,
			width: 48,
			justifyContent: "center",
			alignItems: "center"
		}} onPress={onPress}>

			<Ionicons name="play-skip-forward" size={24} color="black"/>

		</Pressable>
	)
}

export function IPlay({onPress, isPlay}) {

	return(
		<Pressable style={{
			// backgroundColor: "gray",
			height: 48,
			width: 48,
			justifyContent: "center",
			alignItems: "center"
		}} onPress={onPress}>

			{isPlay ? <Fontisto name="pause" size={22} color="black"/> : <View style={{ marginLeft: 2}}><Ionicons name="play" size={28} color="black"/></View>}

		</Pressable>
	)
}

export function IRepeat({onPress}) {
	return(
		<Pressable style={{
			// backgroundColor: "gray",
			height: 48,
			width: 48,
			justifyContent: "center",
			alignItems: "center"
		}} onPress ={onPress}>

			<Ionicons name="repeat" size={24} color="black"/>

		</Pressable>
	)
}

export function IShuffle() {


	return(
		<Pressable style={{
			// backgroundColor: "gray",
			height: 48,
			width: 48,
			justifyContent: "center",
			alignItems: "center"
		}} >

			<Ionicons name="shuffle" size={24} color="black"/>

		</Pressable>
	)
}