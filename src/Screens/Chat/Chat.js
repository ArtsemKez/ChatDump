import React from "react";
import {Text, View, StyleSheet} from "react-native";

export const Chat = () => {
    return(
        <View style={styles.Chat}>
            <Text style={styles.Text}>Chat</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    Chat:{
        backgroundColor:"black",
    },
    Text:{
        color:'grey'
    }
})
