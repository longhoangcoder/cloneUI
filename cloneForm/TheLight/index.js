import { SafeAreaView
        , StyleSheet
        , Text
        , View
        , Image
        ,Dimensions, 
        Button,
        Platform,
        Switch} from 'react-native'
import React, { useState } from 'react'
import bulbOff from './the-light/bulb-off.jpg'
import bulbOn from './the-light/bulb-on.jpg'
import { StatusBar } from 'expo-status-bar'
import Constants from "expo-constants";
export default function TheLight() {
    const [isEnabled, setIsEnabled] = useState(false);
    const toggleSwitch = () => setIsEnabled(previousState => !previousState);
  return (
      <SafeAreaView style = {styles.container}>
          <StatusBar style = {'dark'}/>
          <Image 
            fadeDuration={0}
            source={ 
                isEnabled ? bulbOn : bulbOff} 
                style = {styles.image}/>
          <Switch
            style = {styles.switch}
            trackColor={{ false: "#767577", true: "#81b0ff" }}
            thumbColor={isEnabled ? "#f5dd4b" : "#f4f3f4"}
            ios_backgroundColor="#3e3e3e"
            onValueChange={toggleSwitch}
            value={isEnabled}
            />
      </SafeAreaView>
  )
}
const screenHeight = Dimensions.get("window").height;
const styles = StyleSheet.create({
    container:{ 
        flex: 1,
        paddingTop: Constants.statusBarHeight,
    },
    image:{
        maxWidth:'100%',
        maxHeight: screenHeight - Constants.statusBarHeight - 150,
        resizeMode: 'contain',
        // width: windowWidth,
        // height: (windowWidth*925)/631
    },
    switch:{
        alignSelf: 'center',     
        transform: Platform.OS === "android" ? [{ scale: 1.5 }] : []
    }
})