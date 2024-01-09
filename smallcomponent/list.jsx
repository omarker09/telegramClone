import { Menu, Divider, PaperProvider, TouchableRipple } from 'react-native-paper';
import { View, Text, StatusBar, FlatList, Image, Button } from 'react-native'


<TouchableRipple onPress={() => console.log('Pressed')}
    rippleColor="rgba(0, 0, 0, 0.0.0.1)"
    style={{ height: 50 }}
    className="    bg-white w-full   flex items-center justify-center  ">
    <View className=" h-16 flex flex-row px-5 justify-start w-full items-center">
        <Icon name={props.iconname} size={20} color={"black"} />
        <Text className=' ml-4 font-normal text-black'>{props.title}</Text>
    </View>
</TouchableRipple>