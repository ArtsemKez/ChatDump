import React from "react";
import {Text, View, StyleSheet} from "react-native";

export const LogIn =() => {
    return(
        <View style={styles.logIn}>
            <Text style={styles.Text}>LogIn</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    logIn:{
        backgroundColor:"black",
    },
    Text:{
        color:'grey'
    }
})
