import { StatusBar } from 'expo-status-bar';
import {Image, StyleSheet, Text, View} from 'react-native';
import {ScrollView} from "react-native";
import {SafeAreaView} from "react-native-safe-area-context";
import {Card} from "./src/components/Card";

export default function App() {
  return (
     <SafeAreaView>
         <ScrollView style={{
            marginTop: 32,
            marginHorizontal: 16,
            marginBottom: 16
         }}>
            <View
               style={{
                  height: 320, width: "100%", alignItems: "center"
            }}>
               <Image style={{ height: 240, width: 240, borderRadius: 16 }} source={{ uri: "https://lh3.googleusercontent.com/iY1TONzU7GOInHvPotAnwx6viU2Wg2qS8Uzvd7EyPn4E7id34k8DIX6oh0BNgjgg7rAslW_cJSMQpnWomQ=w544-h544-l90-rj" }}/>

            </View>
            <Card uri="https://i.imgur.com/wcl21SV.png" title="HI" description="its so hilarious"/>
         </ScrollView>
     </SafeAreaView>

  );
}