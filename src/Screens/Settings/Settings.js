import React from "react";
import {Text, View, StyleSheet} from "react-native";

export const Settings =() => {
    return(
        <View style={styles.Settings}>
            <Text style={styles.Text}>Settings</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    Settings:{
        backgroundColor:"black",
    },
    Text:{
        color:'grey'
    }
})
