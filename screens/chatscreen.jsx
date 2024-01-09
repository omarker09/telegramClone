import { View, Text, Image, ScrollView, ImageBackground, StyleSheet, TextInput, FlatList, Keyboard ,AsyncStorage, Alert } from 'react-native'
import React, { useEffect, useState, useRef } from 'react'
import { Button, Menu, Divider, PaperProvider, TouchableRipple } from 'react-native-paper';
import { scrollTo } from 'react-native-reanimated';

// icons
import Dots from "react-native-vector-icons/MaterialCommunityIcons"
import EmojiSticker from "react-native-vector-icons/MaterialCommunityIcons"
import MicroIcon from "react-native-vector-icons/MaterialCommunityIcons"
import AttatIcon from "react-native-vector-icons/Entypo"
import SendIcon from "react-native-vector-icons/Ionicons"




const CustomHeader = (props) => {
    return (
        <View className=" flex ml-5 flex-row items-center w-full h-full justify-center gap-2">
            <View className="flex items-center justify-center">
                <Image
                    height={20}
                    width={20}
                    className=" h-10  rounded-full w-10"
                    source={props.image}
                />
            </View>
            <View className="flex flex-row py-2 pr-3 w-72 items-center justify-between">
                <View className="flex items-start h-full justify-start">
                    <Text className=" text-white">
                        {props.title}
                    </Text>
                    <Text className=" text-gray-300">
                        {props.date} Members
                    </Text>
                </View>
                <View className="  flex h-full items-center justify-start">
                    <TouchableRipple
                        onPress={() => { console.log("fg"); }}
                        rippleColor="rgba(0, 0, 0, 0.0.0.1)"
                        className=" py-1 px-1  rounded-full "
                        style={{ borderRadius: 12 }}
                        borderless

                    >
                        <Dots name='dots-vertical' size={25} color={"white"} />
                    </TouchableRipple>

                </View>
            </View>
        </View>
    )
}

const Chatscreen = ({ route, navigation }) => {
    const { title, date, description, image } = route.params;
    const [textValue, setTextValue] = useState("")
    const [dataChat, setDataChat] = useState([])
    const [isEmpty, setIsEmpty] = useState(true)
    let listViewref;
    
    useEffect(() => {
        navigation.setOptions({
            headerTitle: () => <CustomHeader image={image} date={date} description={description} title={title} />,
        })

    }, [])
    function handleSend() {
        setDataChat((prev) => [...prev,{ value: textValue, type: "user" }])
        setDataChat((prev) => [...prev,{ botvalue: textValue, type: "bot" }])
      //  dataChat.push({ value: textValue, type: "user" })
        
        console.log(dataChat);
        setTextValue("")
        Keyboard.dismiss();
        listViewref.scrollToEnd({ animated: true })
    }
    return (
        <View className=" flex-1">
            <ImageBackground
                source={require('../assets/theme/chat-background.png')} // Replace with your image path
                style={styles.backgroundImage}
            >
                <View style={{ paddingBottom: 49 }} showsVerticalScrollIndicator={false} className=" px-2  h-full relative" >
                    <FlatList
                        data={dataChat}
                        keyExtractor={(e, index) => e.index}
                        showsVerticalScrollIndicator={false}
                        ref={(refs) => {
                            listViewref = refs
                        }}
                        className=" h-full "
                        renderItem={(e) => (
                            e.item.type === "user" ? <View className="flex w-full pb-2 pt-2   items-end justify-start ">
                                <View style={{ borderTopRightRadius: 10, borderBottomRightRadius: 0, borderTopLeftRadius: 10, borderBottomLeftRadius: 10, backgroundColor: "#EFFEDD" }} className="  text-md p-2">
                                    <View className=" flex items-start">
                                        <View>
                                            <Text style={{ color: "#617ead" }} className="  text-md">{title}</Text>
                                        </View>
                                        <View style={{ maxWidth: 270 }} className=" flex  flex-row relative justify-between flex-wrap items-center">
                                            <Text className=" text-black  flex items-center text-md">
                                                {e.item.value}
                                            </Text>
                                            <Text className=" ml-2 text-xs flex  items-end justify-end  bottom-1 right-1 text-gray-500">14:02</Text>
                                        </View>
                                    </View>
                                </View>
                            </View> : <View className="flex w-full pb-2 pt-2  items-start justify-start ">
                                <View style={{ borderTopRightRadius: 10, borderBottomRightRadius: 10, borderTopLeftRadius: 10, borderBottomLeftRadius: 0, backgroundColor: "white" }} className="  text-md p-2">
                                    <View className=" flex items-start">
                                        <View>
                                            <Text style={{ color: "#617ead" }} className="  text-md">{title}</Text>
                                        </View>
                                        <View style={{ maxWidth: 270 }} className=" flex  flex-row relative justify-between flex-wrap items-center">
                                            <Text className=" text-black  flex items-center text-md">
                                                {e.item.botvalue}
                                            </Text>
                                            <Text className=" ml-2 text-xs flex  items-end justify-end  bottom-1 right-1 text-gray-500">14:02</Text>
                                        </View>
                                    </View>
                                </View>
                            </View>
                        )}
                    />

                </View>
            </ImageBackground>
            <View style={{ position: "absolute" }} className=" w-full h-12 hidden bg-white right-0 bottom-0 fixed  text-center  items-center justify-center ">
                <Text className=" text-blue-400">Mute</Text>
            </View>
            <View style={{ position: "absolute", height: 50 }} className=" flex flex-row w-full  items-center  px-3 bg-white right-0 bottom-0 fixed  text-center justify-between">
                <View className=" items-center flex flex-row">
                    <EmojiSticker size={25} name='sticker-emoji' color={"black"} />
                    <TextInput value={textValue} onChangeText={(text) => {
                        setTextValue(text);
                        setIsEmpty(false)
                    }} style={{ width: textValue.length >= 1 ? 300 : 280 }} placeholder='Message' className="ml-2 " />
                </View>
                <View className={textValue.length >= 1 ? "items-center gap-x-3 flex flex-row" : "hidden"}>

                    <SendIcon onPress={() => { handleSend() }} name='send' color={"#617ead"} size={22} />

                </View>
                <View className={textValue.length < 1 ? "items-center gap-x-3 flex flex-row" : "hidden"}>

                    <AttatIcon size={25} name='attachment' color={"black"} />
                    <MicroIcon size={25} name='microphone-outline' color={"black"} />
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    backgroundImage: {
        flex: 1,
        resizeMode: 'cover', // or 'stretch' or 'contain'
    },
    overlay: {
        flex: 1,
        backgroundColor: 'rgba(0,0,0,0.5)', // Adjust the opacity/color as needed
        justifyContent: 'center',
        alignItems: 'center',
    },
    text: {
        color: 'white',
        fontSize: 20,
        fontWeight: 'bold',
    },
});

export default Chatscreen







