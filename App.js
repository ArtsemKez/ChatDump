import React from 'react';
import {DarkTheme, NavigationContainer} from "@react-navigation/native";
import {createNativeStackNavigator} from "@react-navigation/native-stack";
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";
import {LogIn} from "./src/Screens/LogIn/LogIn";
import {Profile} from "./src/Screens/Profile/Profile";
import {Chat} from "./src/Screens/Chat/Chat";
import {Settings} from "./src/Screens/Settings/Settings";
import Ionicons from "react-native-vector-icons/Ionicons";
import { SafeAreaProvider } from 'react-native-safe-area-context';


const App = () => {

    const isAuth = true

    const Stack = createNativeStackNavigator()
    const Tab = createBottomTabNavigator()

    return (
        <SafeAreaProvider>


        <NavigationContainer theme={DarkTheme}>
            {
                isAuth ?
                    <Tab.Navigator initialRouteName={'Profile'}
                                   screenOptions={({route}) => ({
                                       tabBarIcon: ({focused, size}) => {
                                           let iconName
                                           let iconColor
                                           if (route.name === 'Chat') {
                                               iconName = 'chatbubbles'
                                               iconColor = focused ? '#fff' : '#736b6b'
                                           } else if (route.name === 'Profile') {
                                               iconName = 'person'
                                               iconColor = focused ? '#fff' : '#736b6b'
                                           } else if (route.name === 'Settings') {
                                               iconName = 'cog'
                                               iconColor = focused ? '#fff' : '#736b6b'
                                           }

                                           // You can return any component that you like here!
                                           return <Ionicons name={iconName} size={size} color={iconColor}/>
                                       },
                                       tabBarActiveTintColor: '#fff',
                                       tabBarInactiveTintColor: '#736b6b',
                                   })}>
                        <Tab.Screen name={'Chat'} component={Chat}/>
                        <Tab.Screen name={'Profile'} component={Profile}/>
                        <Tab.Screen name={'Settings'} component={Settings}/>
                    </Tab.Navigator>
                    :
                    <Stack.Navigator>
                        <Stack.Screen name={'Log In'} component={LogIn}/>
                    </Stack.Navigator>
            }


        </NavigationContainer>
        </SafeAreaProvider>
    );
};

export default App;
