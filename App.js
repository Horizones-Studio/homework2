import {StatusBar} from 'expo-status-bar';
import {Image, StyleSheet, Text, View} from 'react-native';
import {ScrollView} from "react-native";
import {SafeAreaView} from "react-native-safe-area-context";
import {Card} from "./src/components/Card";
import * as data from "./src/JSON/data.json"
import {IPlay, IPlaySkipBack, IPlaySkipForward, IRepeat, IShuffle} from "./src/components/Icons";
import {Audio} from 'expo-av';
import {useEffect, useRef, useState} from "react";

const _sound = new Audio.Sound();
let selectedSong = 0

export default function App() {

	let sound

	const [playingSong, setSong] = useState(0)
	const [isPlay, setIsPlay] = useState(false)
	const [loading, setLoading] = useState(false)
	const [playhead, setPlayhead] = useState(100)
	const [playable, setPlayable] = useState(100)
	const [songLength, setSongLength] = useState(0)

	async function setMode() {
		await Audio.setAudioModeAsync({
			staysActiveInBackground: true
		})
	}


	async function setStatus() {
		_sound.setOnPlaybackStatusUpdate((status) => {
			console.log(status)
			setSongLength(status.durationMillis)
			setPlayhead(status.positionMillis)
			setPlayable(status.playableDurationMillis)
		})
	}

	async function play() {
		await setStatus()

		// await _sound.unloadAsync()
		_sound.loadAsync({
			uri: data.songs[selectedSong].source
		}, {}, false)
			.then(res => {


				_sound.playAsync()
				// setTimeout(function(){
				// 	_sound.pauseAsync()
				// }, 5000);
				console.log(res)

			}, rej => {

				_sound.playAsync()
				console.log("load rejected, reason: " + rej.message)
				// _sound.unloadAsync()
				// 	.then(res => {
				// 		_sound.loadAsync({ uri: data.songs[selectedSong].source
				// 		}, {}, false)
				// 		_sound.playAsync()
				// 		}, rej => {
				// 		console.log("second load rejected, reason: " + rej.message)
				//
				// 	})
			})
	}

	async function skip(continuePlaying) {

		await setStatus()

		if (continuePlaying) {
			await _sound.unloadAsync()
			_sound.loadAsync({
				uri: data.songs[selectedSong].source
			}, {}, false)
				.then(res => {

					_sound.playAsync()
					// setTimeout(function(){
					// 	_sound.pauseAsync()
					// }, 5000);
					console.log(res)

				}, rej => {

					_sound.playAsync()
					console.log("rejected, reason: " + rej.message)
				})
		} else {
			await _sound.unloadAsync()
		}
	}

	async function pause() {
		await _sound.pauseAsync()
	}

	function millisToMinutesAndSeconds(millis) {
		let minutes = Math.floor(millis / 60000);
		let seconds = ((millis % 60000) / 1000).toFixed(0);
		return minutes + ":" + (seconds < 10 ? '0' : '') + seconds;
	}

	useEffect(() => {
		console.log(selectedSong)
	})

	useEffect(() => {
		setMode()
	}, [])

	return (

		<SafeAreaView>
			<View style={{
				// flex:1,
				height: "100%",
				marginTop: 32,
				paddingBottom: 64,
				marginHorizontal: 36
				// backgroundColor: "lightgray",
				// overflow: "show"
			}}>

				<View
					style={{
						height: 420, width: "100%", alignItems: "center"
					}}>
					<View style={{
						height: 240,
						width: 240,
						borderRadius: 16,
						elevation: 20
					}}>
						<Image style={{
							height: 240,
							width: 240,
							borderRadius: 24,
						}}
						       source={{uri: data.albumThumbnail}}
						/>
					</View>

					<Text style={{
						marginTop: 16,
						fontSize: 22,
						fontWeight: "bold"
					}}>1st Desire</Text>

					<Text style={{
						marginTop: 4,
					}}>Kim Wooseok</Text>

					<View style={{
						flexDirection: "row",
						marginTop: 16,
						marginBottom: 8
					}}>

						<View style={{
							width: 48,
							height: 48,
							justifyContent: "center",
							alignItems: "flex-start"
						}}>
							<Text style={{color: "gray"}}>{millisToMinutesAndSeconds(playhead)}</Text>
						</View>


						<IShuffle/>
						<IPlaySkipBack onPress={() => {
							if (selectedSong !== 0) {
								selectedSong--
								setSong(selectedSong)
							} else {
								selectedSong = 6
								setSong(selectedSong)

							}

							skip(isPlay)

						}}/>
						<IPlay onPress={() => {

							setIsPlay(prev => !prev)
							if (isPlay === false) play()
							else pause()

						}} isPlay={isPlay}/>

						<IPlaySkipForward onPress={() => {
							if (selectedSong !== 6) {
								selectedSong++
								setSong(selectedSong)
							} else {
								selectedSong = 0
								setSong(selectedSong)
							}

							skip(isPlay)
						}}/>
						<IRepeat onPress={() => {

						}
						}/>

						<View style={{
							width: 48,
							height: 48,
							justifyContent: "center",
							alignItems: "flex-end"
						}}>
							<Text style={{color: "gray"}}>{millisToMinutesAndSeconds(songLength)}</Text>
						</View>

					</View>
					<View style={{
						height: 5,
						borderRadius: 33,

						width: "100%",
						backgroundColor: "#f4f4f4"
					}}>
						<View style={{
							height: 5,
							borderRadius: 3,
							width: 100 * (playable / songLength) + "%",
							backgroundColor: "#d1d1f8"
						}}>
							<View style={{
								height: 5,
								borderRadius: 3,
								width: 100 * (playhead / songLength) * (songLength / playable) + "%",
								backgroundColor: "#0032ff"
							}}/>
						</View>
					</View>
				</View>

				{/*<View style={{ height: 24, width: 1000, zIndex: 100, backgroundColor: "white",*/}
				{/*}}/>*/}

				{/*<View style={{ height: 1, width: "80%", backgroundColor: "white",*/}
				{/*	shadowBlur: 8,*/}
				{/*	shadowRadius: 12,*/}
				{/*	shadowColor: "#000",*/}
				{/*	shadowOpacity: 1,*/}
				{/*	// shadowOffset: { width: 0, height: 5 }*/}

				{/*	marginBottom: 4*/}
				{/*}}/>*/}

				{/*<View style={{*/}
				{/*	height: 300,*/}
				{/*	// width: "100%",*/}
				{/*}}>*/}

				<ScrollView style={{
					width: "100%",
				}}>

					<Card
						uri={data.albumThumbnail}
						title={data.songs[0].name} artist={data.artist} Id={0} songId={playingSong}
						onPress={() => {
							selectedSong = 0
							setSong(0)
							skip(isPlay)
						}
						}/>
					<View style={playingSong === 1 || playingSong === 0 ? {} : {
						marginLeft: 52,
						height: 1,
						width: "100%",
						backgroundColor: "#eee"
					}}/>


 					<Card
						uri={data.albumThumbnail}
						title={data.songs[1].name} artist={data.artist} Id={1} songId={playingSong}
						onPress={() => {
							selectedSong = 1
							setSong(1)
							skip(isPlay)
						}}/>
					<View style={playingSong === 2 || playingSong === 1 ? {} : {
						marginLeft: 52,
						height: 1,
						width: "100%",
						backgroundColor: "#eee"
					}}/>


					<Card
						uri={data.albumThumbnail}
						title={data.songs[2].name} artist={data.artist} Id={2} songId={playingSong}
						onPress={() => {
							selectedSong = 2
							setSong(2)
							skip(isPlay)
						}}/>
					<View style={playingSong === 3 || playingSong === 2 ? {} : {
						marginLeft: 52,
						height: 1,
						width: "100%",
						backgroundColor: "#eee"
					}}/>


					<Card
						uri={data.albumThumbnail}
						title={data.songs[3].name} artist={data.artist} Id={3} songId={playingSong}
						onPress={() => {
							selectedSong = 3
							setSong(3)
							skip(isPlay)
						}}/>
					<View style={playingSong === 4 || playingSong === 3 ? {} : {
						marginLeft: 52,
						height: 1,
						width: "100%",
						backgroundColor: "#eee"
					}}/>


					<Card
						uri={data.albumThumbnail}
						title={data.songs[4].name} artist={data.artist} Id={4} songId={playingSong}
						onPress={() => {
							selectedSong = 4
							setSong(4)
							skip(isPlay)
						}}/>

					<View style={playingSong === 5 || playingSong === 4 ? {} : {
						marginLeft: 52,
						height: 1,
						width: "100%",
						backgroundColor: "#eee"
					}}/>


					<Card
						uri={data.albumThumbnail}
						title={data.songs[5].name} artist={data.artist} Id={5} songId={playingSong}
						onPress={() => {
							selectedSong = 5
							setSong(5)
							skip(isPlay)
						}}/>
					<View style={playingSong === 6 || playingSong === 5 ? {} : {
						marginLeft: 52,
						height: 1,
						width: "100%",
						backgroundColor: "#eee"
					}}/>


					<Card
						uri={data.albumThumbnail}
						title={data.songs[6].name} artist={data.artist} Id={6} songId={playingSong}
						onPress={() => {
							selectedSong = 6
							setSong(6)
							skip(isPlay)
						}}/>
					<View
						style={playingSong === 6 ? {} : {marginLeft: 52, height: 1, width: "100%", backgroundColor: "#eee"}}/>


				</ScrollView>
				{/*</View>*/}

			</View>
		</SafeAreaView>

	);
}