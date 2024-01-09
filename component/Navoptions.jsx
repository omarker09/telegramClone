import { View, Text, FlatList, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import Icon from 'react-native-vector-icons/AntDesign';
import Feather from 'react-native-vector-icons/Feather';
import FontAwesome6 from 'react-native-vector-icons/FontAwesome6';
import { useNavigation } from '@react-navigation/native';

const datas = [
    {
        id: "42",
        title: "Get A Ride",
        image: require("../assets/UberX.webp"),
        screen: "MapScreen"
    },
    {
        id: "45",
        title: "Order Food",
        image: require("../assets/uberfood.png"),
        screen: "Food Screen"
    }

]


const Navoptions = () => {
    const navigation = useNavigation()
    return (

        <FlatList
            data={datas}
            keyExtractor={(item) => item.id}
            showsHorizontalScrollIndicator={false}
            horizontal
            renderItem={({ item }) => (
                <TouchableOpacity onPress={() => {navigation.navigate(item.screen)}} activeOpacity={0.5} className=" h-auto mr-4 p-2 pb-8 pt-4 rounded-lg flex items-center justify-center  bg-gray-200">
                    <View className=" flex gap-2 items-center ml-4 justify-center">
                        <Image
                            source={item.image}
                            style={{ height: 120, width: 120, resizeMode: "contain" }}
                        />
                        <Text className=" text-black">{item.title}</Text>
                    </View>

                </TouchableOpacity>
            )}
        />

    )
}

export default Navoptions