import React, {useEffect} from "react";
import {ActivityIndicator, ScrollView, StyleSheet, View} from "react-native";
import {UserCard} from "./UserCard";
import {useDispatch, useSelector} from "react-redux";
import {requestUsers} from "../../Redux/UsersReducer";
import {getIsPreloader, getUsers} from "../../Redux/Selectors";

export const Users = () => {

    const dispatch = useDispatch()
    const users = useSelector(getUsers)
    const isPreloader = useSelector(getIsPreloader)


    useEffect(() => {
        dispatch(requestUsers())

    }, [])

    return (
        <View style={styles.Wrapper}>
            {
                isPreloader ? <ActivityIndicator size={100} color={'#121212'}/> :
                <ScrollView>
                    {users.map((usersItem) => (
                            <UserCard user={usersItem} key={usersItem.id}/>
                        )
                    )}
                </ScrollView>
            }
        </View>

    )
}

const styles = StyleSheet.create({
    Wrapper: {
        flex: 1,
        justifyContent: 'center'
    },
})
