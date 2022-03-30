import React from "react";
import {Text, View, StyleSheet, Image} from "react-native";
import Avatar from '../../Assets/Images/UserAvatar.png'

export const UserCard = ({user}) => {
    return(
        <View style={styles.UserCard}>
            <Image style={styles.Avatar} source={user.photos.small || Avatar}/>
            <View style={styles.Info}>
                <Text style={styles.UserName}>{user.name}</Text>
                <Text style={styles.Text}>{user.status}</Text>
                <Text style={styles.Text}>ID: {user.id}</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    UserCard: {
        borderWidth: 1.5,
        borderRadius: 10,
        borderColor: '#121212',
        height: 85,
        marginTop: 7,
        flexDirection: 'row',
    },
    Avatar: {
        height: 60,
        width: 60,
        margin: 10,
    },
    Info: {
        margin: 5,
    },
    UserName:{
        color:'grey',
        fontWeight: 'bold',
        fontSize: 20
    },
    Text: {
        color:'grey'
    }
})
