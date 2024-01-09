import React, { useEffect } from 'react';
import { View, Text, SafeAreaView, StatusBar } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { NavigationContainer } from '@react-navigation/native';
import { SelectCheckAuth } from './redux-toolkit/slices/navslice';
import { createStackNavigator, CardStyleInterpolators, TransitionSpecs, TransitionPresets } from '@react-navigation/stack';
import 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';
import HomeScreen from './home';
import { store } from '../redux-toolkit/store'
import { Provider } from 'react-redux'
import MapScreen from './mapScreen';
import { PaperProvider } from 'react-native-paper';
import Chatscreen from './chatscreen';
import Login from './login'


const Stack = createStackNavigator();



const ScreensParent = () => {
    const [value, setValue] = React.useState("")
    const idStorage = async () => {
        const valueStorage = await AsyncStorage.getItem("uid")
        return valueStorage
    }
    useEffect(() => {
        setValue(idStorage)
        console.log(idStorage);
        console.log(value);
    }, [])
    return (
        <Stack.Navigator initialRouteName={value === "yes" ? "Login" : "Home"} screenOptions={{
            cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,

            cardOverlayEnabled: true,
            SlideFromRightIOS: true,
            gestureResponseDistance: 150,
            transitionSpec: {
                open: TransitionSpecs.TransitionIOSSpec,
                close: TransitionSpecs.TransitionIOSSpec
            },

        }}>
            <>
                <Stack.Screen
                    name="Login"
                    options={{ headerShown: false }}
                    component={Login}
                />

                <Stack.Screen name="Home" options={{ headerShown: false, headerStyle: { backgroundColor: '#4e8df2', }, }} component={HomeScreen} />
                <Stack.Screen
                    name="MapScreen"
                    options={{ headerShown: false }}
                    component={MapScreen}
                />
                <Stack.Screen
                    name="ChatScreen"
                    options={{
                        headerShown: true,
                        headerTitle: "Chat",
                        headerTintColor: "white",
                        headerStyle: {
                            backgroundColor: '#617ead',
                        },
                    }}
                    component={Chatscreen}
                />
            </>
        </Stack.Navigator>
    )
}

export default ScreensParent;