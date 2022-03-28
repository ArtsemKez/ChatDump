import React, {useEffect} from "react";
import {StyleSheet, Text, View} from "react-native";
import {UserCard} from "./UserCard";
import {useDispatch, useSelector} from "react-redux";
import {requestUsers} from "../../Redux/UsersReducer";
import {getUsers} from "../../Redux/Selectors";

export const Users = () => {

    const dispatch = useDispatch()
    const users = useSelector(getUsers)

    useEffect(()=>{
        dispatch(requestUsers())
    },[])

  return(
      <View>
          <Text style={styles.Text}>Users</Text>
          {users.map((user) => (
              <UserCard/>
              )
          )}
          <UserCard/>
      </View>
  )
}

const styles = StyleSheet.create({
    Text: {
        color:'grey'
    }
})
