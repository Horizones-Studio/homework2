import {StatusBar} from 'expo-status-bar';
import {Image, StyleSheet, Text, View} from 'react-native';
import {ScrollView} from "react-native";
import {SafeAreaView} from "react-native-safe-area-context";
import {Card} from "./src/components/Card";

export default function App() {
	return (

		<SafeAreaView>

			<View style={{
				// flex:1,
				height: "100%",
				marginTop: 32,
				paddingBottom: 64,
				// backgroundColor: "lightgray",
				marginHorizontal: 24
			}}>

				<View
					style={{
						height: 320, width: "100%", alignItems: "center"
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

				</View>

				<ScrollView style={{
					height: 90
				}}>
					<Card
						uri="https://lh3.googleusercontent.com/iY1TONzU7GOInHvPotAnwx6viU2Wg2qS8Uzvd7EyPn4E7id34k8DIX6oh0BNgjgg7rAslW_cJSMQpnWomQ=w544-h544-l90-rj"
						title="Intro: Lost" artist="Kim Wooseok"/>
					<View style={{marginLeft: 52, height: 1, width: "100%", backgroundColor: "lightgray"}}/>

					<Card
						uri="https://lh3.googleusercontent.com/iY1TONzU7GOInHvPotAnwx6viU2Wg2qS8Uzvd7EyPn4E7id34k8DIX6oh0BNgjgg7rAslW_cJSMQpnWomQ=w544-h544-l90-rj"
						title="Red Moon" artist="Kim Wooseok"/>
					<View style={{marginLeft: 52, height: 1, width: "100%", backgroundColor: "lightgray"}}/>

					<Card
						uri="https://lh3.googleusercontent.com/iY1TONzU7GOInHvPotAnwx6viU2Wg2qS8Uzvd7EyPn4E7id34k8DIX6oh0BNgjgg7rAslW_cJSMQpnWomQ=w544-h544-l90-rj"
						title="SINPhony" artist="Kim Wooseok"/>
					<View style={{marginLeft: 52, height: 1, width: "100%", backgroundColor: "lightgray"}}/>

					<Card
						uri="https://lh3.googleusercontent.com/iY1TONzU7GOInHvPotAnwx6viU2Wg2qS8Uzvd7EyPn4E7id34k8DIX6oh0BNgjgg7rAslW_cJSMQpnWomQ=w544-h544-l90-rj"
						title="Somebody Like You" artist="Kim Wooseok"/>
					<View style={{marginLeft: 52, height: 1, width: "100%", backgroundColor: "lightgray"}}/>

					<Card
						uri="https://lh3.googleusercontent.com/iY1TONzU7GOInHvPotAnwx6viU2Wg2qS8Uzvd7EyPn4E7id34k8DIX6oh0BNgjgg7rAslW_cJSMQpnWomQ=w544-h544-l90-rj"
						title="Do U Like" artist="Kim Wooseok"/>
					<View style={{marginLeft: 52, height: 1, width: "100%", backgroundColor: "lightgray"}}/>

					<Card
						uri="https://lh3.googleusercontent.com/iY1TONzU7GOInHvPotAnwx6viU2Wg2qS8Uzvd7EyPn4E7id34k8DIX6oh0BNgjgg7rAslW_cJSMQpnWomQ=w544-h544-l90-rj"
						title="Beautiful" artist="Kim Wooseok"/>
					<View style={{marginLeft: 52, height: 1, width: "100%", backgroundColor: "lightgray"}}/>

					<Card
						uri="https://lh3.googleusercontent.com/iY1TONzU7GOInHvPotAnwx6viU2Wg2qS8Uzvd7EyPn4E7id34k8DIX6oh0BNgjgg7rAslW_cJSMQpnWomQ=w544-h544-l90-rj"
						title="The Winter" artist="Kim Wooseok"/>
					<View style={{marginLeft: 52, height: 1, width: "100%", backgroundColor: "lightgray"}}/>

				</ScrollView>

			</View>

		</SafeAreaView>

	);
}