import React from "react";
import {Text, View, StyleSheet} from "react-native";

export const Profile = () => {
    return(
        <View style={styles.Profile}>
            <Text style={styles.Text}>Profile</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    Profile:{

    },
    Text:{
        color:'grey'
    }
})
