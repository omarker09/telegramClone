import { View, Text, Image, AsyncStorage } from 'react-native'
import React from 'react'
import { createDrawerNavigator } from '@react-navigation/drawer';
import { useNavigation } from '@react-navigation/native';
import { List, MD3Colors } from 'react-native-paper';
import { Button, Menu, Divider, PaperProvider, TouchableRipple } from 'react-native-paper';



const Chatlist = (props) => {
    const navigation = useNavigation()
    return (

        <TouchableRipple
            onPress={() => navigation.navigate("ChatScreen" , {
                title: props.title,
                date: props.date,
                description: props.description,
                image: props.image
            })}
            rippleColor="rgba(0, 0, 0, 0.0.0.1)"
            
            style={{height: 70}}
            className="  border border-slate-100  bg-white w-full  flex items-center justify-center  "
        >
            <View className=" flex flex-row items-center w-full h-full justify-around ">
                <View className="">
                    <Image
                        height={30}
                        width={30}
                        className=" h-14  rounded-full w-14"
                        source={props.image}
                    />
                </View>
                <View className="  flex gap-y-1 w-72  justify-center h-full ">
                    <View className="  flex  flex-row w-full   justify-between items-start ">
                        <Text className="text-black text-sm font-bold">{props.title}</Text>
                        <Text className="text-gray-400 text-xs ">{props.date}</Text>
                    </View>
                    <View className="flex  flex-row w-full   justify-between items-start ">
                        <Text className="text-gray-400">{props.description.length >= 30 ? props.description.slice(0,27) + " ..." : props.description}</Text>
                        <View className=" bg-slate-400  rounded-full py-1 px-3">
                            <Text className="text-slate-100 text-xs">253</Text>
                        </View>
                    </View>
                </View>
            </View>
        </TouchableRipple>

    )
}

export default Chatlist