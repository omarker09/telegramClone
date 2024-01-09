import DownIcon from "react-native-vector-icons/AntDesign"
import MoonIcon from 'react-native-vector-icons/Entypo';
import UsersIcon from 'react-native-vector-icons/Feather';
import UserIcon from 'react-native-vector-icons/Feather';
import CallIcon from 'react-native-vector-icons/Ionicons';
import BobIcon from 'react-native-vector-icons/Feather';
import SettingsIcon from 'react-native-vector-icons/Feather';
import InviteIcon from 'react-native-vector-icons/AntDesign';
import QuestIcon from 'react-native-vector-icons/AntDesign';
import LogoutIcon from 'react-native-vector-icons/MaterialIcons';
import { DrawerActions } from '@react-navigation/native';

import { View, Text, StatusBar, FlatList, Image, Button } from 'react-native'
import React, {useEffect,useState} from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNavigation } from "@react-navigation/native";
import { createDrawerNavigator } from '@react-navigation/drawer';
import Chatlist from './chatlist';
import { List, MD3Colors } from 'react-native-paper';
import { Menu, Divider, PaperProvider, TouchableRipple } from 'react-native-paper';
import { useAuth } from "../screens/aythContex";


const DrawerContent = ({navigation}) => {
    const { signOut } = useAuth();
  

    function Logout() {
        signOut()
        navigation.replace("Login")
    }
    return (
        <View style={{ backgroundColor: 'white' }}>
            <View className=" py-4 px-5" style={{ width: '100%', backgroundColor: "#7193c9", height: "auto", display: 'flex', flexDirection: 'column', alignItems: 'start', justifyContent: 'start' }}>
                <View className=" w-full flex items-center flex-row justify-between">
                    <Image source={require('../assets/me.jpg')} style={{ backgroundColor: 'black', width: 75, height: 75, borderRadius: 100 }} />
                    <View className=' h-full p-2'>
                        <MoonIcon name='moon' size={20} color={"white"} />
                    </View>
                </View>
                <View className=" pt-1  flex items-start justify-start">
                    <View className="w-full flex flex-row justify-between items-center pr-2">
                        <Text className=" text-white text-base font-medium">Darkminer</Text>
                        <DownIcon name='down' size={20} color={"white"} />
                    </View>
                    <Text className=" text-gray-300 text-xs">+213 792028538</Text>

                </View>
            </View>
            <View className="" style={{ width: '100%', paddingTop: 10, paddingHorizontal: 0, display: 'flex', flexDirection: 'column', gap: 10 }}>
                <TouchableRipple onPress={() => console.log('Pressed')}
                    rippleColor="rgba(0, 0, 0, 0.0.0.1)"
                    style={{ height: 50 }}
                    className="    bg-white w-full  px-5 flex items-center justify-center  ">
                    <View className=" h-16 flex flex-row  justify-start w-full items-center">
                        <UsersIcon name='users' size={20} color={"black"} />
                        <Text className=' ml-4 font-normal text-black'>New Group</Text>
                    </View>
                </TouchableRipple>
                <Divider />
                <TouchableRipple onPress={() => console.log('Pressed')}
                    rippleColor="rgba(0, 0, 0, 0.0.0.1)"
                    style={{ height: 50 }}
                    className="    bg-white w-full   flex items-center justify-center  ">
                    <View className=" h-16 flex flex-row px-5 justify-start w-full items-center">
                        <UsersIcon name='user' size={20} color={"black"} />
                        <Text className=' ml-4 font-normal text-black'>User</Text>
                    </View>
                </TouchableRipple>
                <TouchableRipple onPress={() => console.log('Pressed')}
                    rippleColor="rgba(0, 0, 0, 0.0.0.1)"
                    style={{ height: 50 }}
                    className="    bg-white w-full   flex items-center justify-center  ">
                    <View className=" h-16 flex flex-row px-5 justify-start w-full items-center">
                        <CallIcon name='call-outline' size={20} color={"black"} />
                        <Text className=' ml-4 font-normal text-black'>Contacts</Text>
                    </View>
                </TouchableRipple>
                <TouchableRipple onPress={() => console.log('Pressed')}
                    rippleColor="rgba(0, 0, 0, 0.0.0.1)"
                    style={{ height: 50 }}
                    className="    bg-white w-full   flex items-center justify-center  ">
                    <View className=" h-16 flex flex-row px-5 justify-start w-full items-center">
                        <BobIcon name='bookmark' size={20} color={"black"} />
                        <Text className=' ml-4 font-normal text-black'>Saved</Text>
                    </View>
                </TouchableRipple>
                <TouchableRipple onPress={() => console.log('Pressed')}
                    rippleColor="rgba(0, 0, 0, 0.0.0.1)"
                    style={{ height: 50 }}
                    className="    bg-white w-full   flex items-center justify-center  ">
                    <View className=" h-16 flex flex-row px-5 justify-start w-full items-center">
                        <SettingsIcon name='settings' size={20} color={"black"} />
                        <Text className=' ml-4 font-normal text-black'>Settings</Text>
                    </View>
                </TouchableRipple>
                <Divider />
                <TouchableRipple onPress={() => console.log('Pressed')}
                    rippleColor="rgba(0, 0, 0, 0.0.0.1)"
                    style={{ height: 50 }}
                    className="    bg-white w-full   flex items-center justify-center  ">
                    <View className=" h-16 flex flex-row px-5 justify-start w-full items-center">
                        <InviteIcon name='adduser' size={20} color={"black"} />
                        <Text className=' ml-4 font-normal text-black'>Invite User</Text>
                    </View>
                </TouchableRipple>
                <TouchableRipple onPress={() => console.log('Pressed')}
                    rippleColor="rgba(0, 0, 0, 0.0.0.1)"
                    style={{ height: 50 }}
                    className="    bg-white w-full   flex items-center justify-center  ">
                    <View className=" h-16 flex flex-row px-5 justify-start w-full items-center">
                        <QuestIcon name='questioncircleo' size={20} color={"black"} />
                        <Text className=' ml-4 font-normal text-black'>Invite User</Text>
                    </View>
                </TouchableRipple>
                <TouchableRipple onPress={() => Logout()}
                    rippleColor="rgba(0, 0, 0, 0.0.0.1)"
                    style={{ height: 50 }}
                    className="    bg-white w-full   flex items-center justify-center  ">
                    <View className=" h-16 flex flex-row px-5 justify-start w-full items-center">
                        <LogoutIcon name='logout' size={20} color={"black"} />
                        <Text className=' ml-4 font-normal text-red-500'>Log out</Text>
                    </View>
                </TouchableRipple>
            </View>
        </View>
    );
};

export default DrawerContent;


/*

        try {
            navigation.dispatch(DrawerActions.closeDrawer());
             AsyncStorage.removeItem("uid");
            console.log("Key 'uid' removed successfully!");
            
                // Redirect to login screen if not authenticated
                
             

        } catch (error) {
            console.error("Error removing key 'uid':", error);
        }

*/