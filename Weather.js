import React from "react"
import PropTypes from "prop-types"
import {StyleSheet, View, Text, StatusBar} from "react-native"
import {MaterialCommunityIcons} from "@expo/vector-icons"
import { LinearGradient } from 'expo-linear-gradient'

const weatherOptions={
    Haze:{
        iconName:"weather-hail",
        gradient:["#4DA0B0","#D39D38"],
        title:"Haze",
        subtitle:"Just don't go outside"
    },
    Thunderstorm:{
        iconName: "weather-lightning",
        gradient: ["#373B44", "#4286f4"],
        title:"Thunderstorm",
        subtitle:"GO to house"
    },
    Drizzle:{
        iconName:"weather-hail",
        gradient: ["#89F7FE", "#66A6FF"],
        title:"Drizzle",
        subtitle:"Drizzzzzzzzzzzle"
    },
    Rain:{
        iconName: "weather-rainy",
        gradient: ["#00C6FB", "#005BEA"],
        title:"Rain",
        subtitle:"It's rainy day"
    },
    Snow:{
        iconName: "weather-snowy",
        gradient: ["#7DE2FC", "#B9B6E5"],
        title :"Snow",
        subtitle:"Make snowman!"
    },
    Atmosphere:{
        iconName: "weather-hail",
        gradient: ["#89F7FE", "#66A6FF"],
        title:"Atmosphere",
        subtitle:"What the Atmosphere"
    },
    Clear:{
        iconName: "weather-sunny",
        gradient: ["#FF7300", "#FEF253"],
        title:"Sunny",
        subtitle:"go outside!!!!"
    },
    Clouds:{
        iconName: "weather-cloudy",
        gradient: ["#D7D2CC", "#304352"],
        title: "clouds",
        subtitle:"Just don't go outside"
    },
    Dust:{
        iconName: "weather-hail",
        gradient: ["#4DA0B0", "#D39D38"],
        title:"Dust",
        subtitle:"Dust man"
    },
    Mist:{
        iconName: "weather-hail",
        gradient: ["#4DA0B0", "#D39D38"],
        title:"Mist",
        subtitle:"Free mist"
    },
}

export default function Weather({temp,condition}){
    return(
        <LinearGradient
            colors={weatherOptions[condition].gradient}    
            style={styles.container}
        >
            <StatusBar barStyle="light-content"/>
            <View style={styles.halfContainer}>
                <MaterialCommunityIcons name={weatherOptions[condition].iconName} size={96} color="white"/>
                <Text style={styles.temp}>{temp}°</Text>
            </View>
            <View style={[styles.halfContainer, styles.textContainer]}>
                <Text style={styles.title}>{weatherOptions[condition].title}</Text>
                <Text style={styles.subtitle}>{weatherOptions[condition].subtitle}</Text>
            </View>
        </LinearGradient>
    )
}
Weather.propTypes={
    temp:PropTypes.number.isRequired,
    condition:PropTypes.oneOf(["Thunderstorm","Haze","Drizzle","Rain","Snow","Atmosphere","Clear","Clouds","Dust","Mist"]).isRequired
}
const styles=StyleSheet.create({
    container:{
        flex:1,
        justifyContent:"center",
        alignItems:"center"
    },
    temp:{
        fontSize:42,
        color:"white"
    },
    halfContainer:{
        flex:1,
        justifyContent:"center",
        alignItems:"center"
    },
    title:{
        color:"white",
        fontSize:44,
        fontWeight:"300",
        marginBottom:10
    },
    subtitle:{
        color:"white",
        fontWeight:"600",
        fontSize:24,
    },
    textContainer:{
        paddingHorizontal:20,
        alignItems:"flex-start",
    }
})