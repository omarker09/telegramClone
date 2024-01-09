import { View, Text, StatusBar, FlatList, Image, Button, Alert } from 'react-native'
import React, { useState, useEffect } from 'react'
import { createDrawerNavigator } from '@react-navigation/drawer';
import Chatlist from './chatlist';
import { List, MD3Colors } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';
import { Menu, Divider, PaperProvider, TouchableRipple } from 'react-native-paper';
import { createStackNavigator, CardStyleInterpolators, TransitionSpecs, TransitionPresets } from '@react-navigation/stack';
import SearchIcon from "react-native-vector-icons/Fontisto"
import DrawerContent from './drwerContent';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useAuth } from '../screens/aythContex';
const Drawers = createDrawerNavigator();

const datas = [
    { id: 1, title: "First Chat", description: "hi my name omar", datetime: "1 Jan", image: require("../assets/me.jpg") },
    { id: 2, title: "GTA leaks ", description: "ok see you later ", datetime: "21:05", image: require("../assets/gta6city.jpg") },
    { id: 3, title: "Leonida", description: "what did you say to me dfgdgdfgdfgfdfghfgh", datetime: "last day", image: require("../assets/gta6.png") },
    { id: 4, title: "Cyberia", description: "Logs for sale !!", datetime: "14:42", image: require("../assets/the-witcher.jpg") },
    { id: 5, title: "Jacuzi", description: "Wahtch pom", datetime: "4 Dec", image: require("../assets/pubg.png") },
    { id: 6, title: "First Chat", description: "hi my name omar", datetime: "1 Jan", image: require("../assets/me.jpg") },
    { id: 7, title: "GTA leaks ", description: "ok see you later ", datetime: "21:05", image: require("../assets/gta6city.jpg") },
    { id: 8, title: "Leonida", description: "what did you say to me dfgdgdfgdfgfdfghfgh", datetime: "last day", image: require("../assets/gta6.png") },
    { id: 9, title: "Cyberia", description: "Logs for sale !!", datetime: "14:42", image: require("../assets/the-witcher.jpg") },
    { id: 10, title: "Jacuzi", description: "Wahtch pom", datetime: "4 Dec", image: require("../assets/pubg.png") },
    { id: 11, title: "Jacuzi", description: "Wahtch pom", datetime: "4 Dec", image: require("../assets/pubg.png") },
    { id: 12, title: "Jacuzi", description: "Wahtch pom", datetime: "4 Dec", image: require("../assets/pubg.png") },
]

const HomDrawer = ({ navigation }) => {
    const [storageToken, setStorageToken] = useState('');

    const getItemStorage = async () => {
        try {
            const tokenS = await AsyncStorage.getItem('uid');
            if (tokenS !== null) {
                
                setStorageToken(tokenS);
            } else {
                console.log('No token found in AsyncStorage');
                navigation.replace("Login")
            }
        } catch (error) {
            console.error('Error retrieving token from AsyncStorage:', error);
        }
    };
    // Empty dependency array ensures that it runs only once, similar to componentDidMount

    
      

    const { token } = useAuth();
    useEffect(() => {
        getItemStorage()
    }, [token, navigation, storageToken]);


    return (
        <View className=" flex-1 bg-gray-100 flex w-full items-center overflow-hidden justify-start">
            <StatusBar backgroundColor={"#617ead"} barStyle={"light-content"} />
            <FlatList
                showsVerticalScrollIndicator={false}
                data={datas}

                keyExtractor={(e) => e.id}
                renderItem={(e) => (
                    <Chatlist title={e.item.title} image={e.item.image} description={e.item.description} date={e.item.datetime} />
                )}
            />
        </View>
    )
}
const Chat = () => {
    return (
        <View>
            <Text>chat screen</Text>
        </View>
    )
}




function Drawer({ navigation }) {


    return (
        <Drawers.Navigator screenOptions={{
            headerStyle: {
                backgroundColor: '#617ead', // Change this to your desired header color
            },
            headerTintColor: 'white', // Change this to your desired text color
            cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
            cardOverlayEnabled: true,
            SlideFromRightIOS: true,
            gestureResponseDistance: 150,
            transitionSpec: {
                open: TransitionSpecs.TransitionIOSSpec,
                close: TransitionSpecs.TransitionIOSSpec

            },


        }}
            drawerContent={({ navigation }) => <DrawerContent navigation={navigation} initialParams={{ drawerOpen: false }} />}
        >
            <Drawers.Screen name="HomDrawer" options={{
                title: "Telegram", headerRight: () => {
                    return (
                        <View className=" flex px-4 items-end w-full ">
                            <SearchIcon name='search' color={"white"} size={18} />
                        </View>
                    )
                }
            }} component={HomDrawer} />
            <Drawers.Screen name="Chat" component={Chat} />
        </Drawers.Navigator>
    );
}

export default Drawer;