import {StatusBar} from 'expo-status-bar';
import {Image, StyleSheet, Text, View} from 'react-native';
import {ScrollView} from "react-native";
import {SafeAreaView} from "react-native-safe-area-context";
import {Card} from "./src/components/Card";
import * as data from "./src/JSON/data.json"
import {IPlay, IPlaySkipBack, IPlaySkipForward} from "./src/components/Icons";

export default function App() {
	return (

		<SafeAreaView>
			<View style={{
				// flex:1,
				height: "100%",
				marginTop: 32,
				paddingBottom: 64,
				alignItems: 'center'
				// backgroundColor: "lightgray",
				// overflow: "show"
			}}>

				<View
					style={{
						height: 360, width: "100%", alignItems: "center"
					}}>
					<View style={{
						height: 240,
						width: 240,
						borderRadius: 16,
						elevation: 16
					}}>
						<Image style={{
							height: 240,
							width: 240,
							borderRadius: 16,
						}}
						       source={{uri: "https://lh3.googleusercontent.com/iY1TONzU7GOInHvPotAnwx6viU2Wg2qS8Uzvd7EyPn4E7id34k8DIX6oh0BNgjgg7rAslW_cJSMQpnWomQ=w544-h544-l90-rj"}}
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
						marginTop: 8
					}}>

						<IPlaySkipBack/>
						<IPlay/>
						<IPlaySkipForward/>

					</View>

				</View>

				<View style={{ height: 24, width: 1000, zIndex: 100, backgroundColor: "white",
				}}/>

				<View style={{ height: 1, width: "80%", backgroundColor: "white",
					shadowBlur: 8,
					shadowRadius: 12,
					shadowColor: "#000",
					shadowOpacity: 1,
					// shadowOffset: { width: 0, height: 5 }

					marginBottom: 4
				}}/>

				<View style={{
					alignItems: "center"
				}}>
					<ScrollView style={{
						height: 0,
						width: "100%",
						marginHorizontal: 24
					}}>

						<Card
							uri="https://lh3.googleusercontent.com/iY1TONzU7GOInHvPotAnwx6viU2Wg2qS8Uzvd7EyPn4E7id34k8DIX6oh0BNgjgg7rAslW_cJSMQpnWomQ=w544-h544-l90-rj"
							title={data.songs[0].name} artist={data.artist}/>
						<View style={{marginLeft: 52, height: 1, width: "100%", backgroundColor: "lightgray"}}/>

						<Card
							uri="https://lh3.googleusercontent.com/iY1TONzU7GOInHvPotAnwx6viU2Wg2qS8Uzvd7EyPn4E7id34k8DIX6oh0BNgjgg7rAslW_cJSMQpnWomQ=w544-h544-l90-rj"
							title={data.songs[1].name} artist={data.artist}/>
						<View style={{marginLeft: 52, height: 1, width: "100%", backgroundColor: "lightgray"}}/>

						<Card
							uri="https://lh3.googleusercontent.com/iY1TONzU7GOInHvPotAnwx6viU2Wg2qS8Uzvd7EyPn4E7id34k8DIX6oh0BNgjgg7rAslW_cJSMQpnWomQ=w544-h544-l90-rj"
							title={data.songs[2].name} artist={data.artist}/>
						<View style={{marginLeft: 52, height: 1, width: "100%", backgroundColor: "lightgray"}}/>

						<Card
							uri="https://lh3.googleusercontent.com/iY1TONzU7GOInHvPotAnwx6viU2Wg2qS8Uzvd7EyPn4E7id34k8DIX6oh0BNgjgg7rAslW_cJSMQpnWomQ=w544-h544-l90-rj"
							title={data.songs[3].name} artist={data.artist}/>
						<View style={{marginLeft: 52, height: 1, width: "100%", backgroundColor: "lightgray"}}/>

						<Card
							uri="https://lh3.googleusercontent.com/iY1TONzU7GOInHvPotAnwx6viU2Wg2qS8Uzvd7EyPn4E7id34k8DIX6oh0BNgjgg7rAslW_cJSMQpnWomQ=w544-h544-l90-rj"
							title={data.songs[4].name} artist={data.artist}/>
						<View style={{marginLeft: 52, height: 1, width: "100%", backgroundColor: "lightgray"}}/>

						<Card
							uri="https://lh3.googleusercontent.com/iY1TONzU7GOInHvPotAnwx6viU2Wg2qS8Uzvd7EyPn4E7id34k8DIX6oh0BNgjgg7rAslW_cJSMQpnWomQ=w544-h544-l90-rj"
							title={data.songs[5].name} artist={data.artist}/>
						<View style={{marginLeft: 52, height: 1, width: "100%", backgroundColor: "lightgray"}}/>

						<Card
							uri="https://lh3.googleusercontent.com/iY1TONzU7GOInHvPotAnwx6viU2Wg2qS8Uzvd7EyPn4E7id34k8DIX6oh0BNgjgg7rAslW_cJSMQpnWomQ=w544-h544-l90-rj"
							title={data.songs[6].name} artist={data.artist}/>
						<View style={{marginLeft: 52, height: 1, width: "100%", backgroundColor: "lightgray"}}/>

					</ScrollView>
				</View>

			</View>
		</SafeAreaView>

	);
}