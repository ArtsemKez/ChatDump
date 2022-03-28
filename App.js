import React from 'react';
import {DarkTheme, NavigationContainer} from "@react-navigation/native";
import {createNativeStackNavigator} from "@react-navigation/native-stack";
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";
import {LogIn} from "./src/Screens/LogIn/LogIn";
import {Chat} from "./src/Screens/Chat/Chat";
import {Settings} from "./src/Screens/Settings/Settings";
import Ionicons from "react-native-vector-icons/Ionicons";
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {getIsAuth} from "./src/Redux/Selectors";
import {Provider, useSelector} from "react-redux";
import store from "./src/Redux/Store";
import {getAuthUserData} from "./src/Redux/AuthReducer";
import {Users} from "./src/Screens/Users/Users";


const MainApp = () => {

    const isAuth = useSelector(getIsAuth)
    const Stack = createNativeStackNavigator()
    const Tab = createBottomTabNavigator()

    getAuthUserData()

    return (
        <NavigationContainer theme={DarkTheme}>
            {
                !isAuth ?
                    <Tab.Navigator initialRouteName={'Users'}
                                   screenOptions={({route}) => ({
                                       tabBarIcon: ({focused, size}) => {
                                           let iconName
                                           let iconColor

                                           if (route.name === 'Chat') {
                                               iconName = 'chatbubbles'
                                               iconColor = focused ? '#fff' : '#736b6b'
                                           } else if (route.name === 'Users') {
                                               iconName = 'people-sharp'
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
                        <Tab.Screen name={'Users'} component={Users}/>
                        <Tab.Screen name={'Settings'} component={Settings}/>
                    </Tab.Navigator>
                    :
                    <Stack.Navigator>
                        <Stack.Screen name={'Log In'} component={LogIn}/>
                    </Stack.Navigator>
            }
        </NavigationContainer>
    );
};

const App = () => {
    return (
        <Provider store={store}>
            <SafeAreaProvider>
                <MainApp/>
            </SafeAreaProvider>
        </Provider>
    )
}

export default App
