import {Dimensions, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import { StatusBar } from 'expo-status-bar'
import Constants from "expo-constants";
import { SafeAreaView } from 'react-native';
import trafficLight from './traffic-light/traffic-light.png'
import trafficLightGreen from './traffic-light/traffic-light-green.png'
import trafficLightYellow from './traffic-light/traffic-light-yellow.png'
import trafficLightRed from './traffic-light/traffic-light-red.png'
export default function TrafficLight() {
    const [color, setColor] = useState("");

    let imageSource = trafficLight;
    if (color === "red") {
      imageSource = trafficLightRed;
    } else if (color === "yellow") {
      imageSource = trafficLightYellow;
    } else if (color === "green") {
      imageSource = trafficLightGreen;
    }
    <StatusBar style="light" />
    return (
        <SafeAreaView style = {styles.container}>
            <Image fadeDuration={0} source={imageSource} style = {styles.image}/>
            <View style = {styles.buttonGroup}>
                <TouchableOpacity
                    style = {[styles.button, {backgroundColor:'red'}]}
                    underlayColor="#9b0100"
                    onPress={() => setColor("red")}>
                    <Text style = {styles.txtButton}>Red</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style = {[styles.button, {backgroundColor:'#ff8300'}]}
                    underlayColor="#cc6900"
                    onPress={() => setColor("yellow")}>
                    <Text style = {styles.txtButton}>Yellow</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style = {[styles.button, {backgroundColor:'green'}]}
                    underlayColor="#3c730c"
                    onPress={() => setColor("green")}>
                    <Text style = {styles.txtButton}>Green</Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
  )
}
const TEXT = {
    color: '#fff',
    textAlign: 'center'
  }
const screenHeight = Dimensions.get("window").height
const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: Constants.statusBarHeight,
        backgroundColor: 'black'
    },
    image:{
        maxWidth: '100%',
        maxHeight: screenHeight - Constants.statusBarHeight - 150,
        resizeMode: 'contain',
        marginBottom: 20
    },
    buttonGroup:{
        // borderWidth: 2,
        // borderColor:'white',
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: 30, 
    },
    button:{
        paddingVertical:8,
        borderRadius: 4,
        // borderWidth: 2,
        // borderColor:'black',
        width:80,
        justifyContent: 'center',
    },
    txtButton:{
        ...TEXT
    }
})