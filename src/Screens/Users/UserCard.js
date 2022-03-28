import React from "react";
import {Text, View, StyleSheet} from "react-native";

export const UserCard = () => {
    return(
        <View style={styles.UserCard}>
            <Text style={styles.Text}>User Card</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    UserCard: {
        borderWidth: 1.5,
        borderRadius: 10,
        borderColor: '#757575',
        height: 85,
        marginTop: 7
    },
    Text: {
        color:'grey'
    }
})
