import { View, Text, TextInput, Button, TouchableOpacity, StatusBar, ActivityIndicator, Alert } from 'react-native'
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useDispatch } from 'react-redux';
import { checkAuth } from '../redux-toolkit/slices/navslice';
import React, { useState, useEffect } from 'react'
import auth from '@react-native-firebase/auth';
import { firebase } from '@react-native-firebase/auth';
import messaging from '@react-native-firebase/messaging';
import { useNavigation } from '@react-navigation/native';
import { useFocusEffect } from '@react-navigation/native';
import { useAuth } from './aythContex';

const Login = ({ navigation }) => {
    const { signIn } = useAuth();

    const [loading, setLoading] = useState(false)
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const { token } = useAuth();
    useEffect(() => {
        if (token) {
            // Redirect to login screen if not authenticated
            navigation.navigate('Home');
        }
    }, [token, navigation]);

    _retrieveData = async (id) => {
        try {
            const value = await AsyncStorage.getItem(id);
            if (value !== null) {
                // We have data!!
                Settoken(value)
                console.log(value);
            }
        } catch (error) {
            console.log("not found or ", error);
        }
    };


    async function requstPermission() {
        const authStatus = await messaging().requestPermission();
        const enabled = authStatus === messaging.AuthorizationStatus.AUTHORIZED || authStatus === messaging.AuthorizationStatus.PROVISIONAL
        if (enabled) {
            console.log("Authorization Enabled", authStatus);
        }
    }
    useEffect(() => {

        requstPermission()
        const getFCMToken = async () => {
            try {
                const token = await messaging().getToken();
                console.log('FCM Token:', token);
            } catch (error) {
                console.error('Error getting FCM token:', error);
            }
        };

        getFCMToken();

    }, []);


    function SignUp() {
        auth().createUserWithEmailAndPassword(email, password).then((e) => {
            Alert.alert("User Created !!")
            console.log(e);
        }).catch((err) => {
            Alert.alert(`Error ${err.message}`);
            console.log(`Error ${err.message}`);
        })
    }
   async function SignInnow() {
    auth().signInWithEmailAndPassword(email, password).then((e) => {
        signIn(e.user.uid);
        console.log("id", e.user.uid);
    }).catch((err) => {
        Alert.alert(`Error ${err.message}`);
        console.log(`Error ${err.message}`);
    })
    }

    return (
        <View className="flex-1 white  h-full flex items-center justify-center">
            <StatusBar barStyle={"dark-content"} backgroundColor={"white"} />
            <View className={loading ? " absolute top-0 left-0 z-50 h-screen w-full flex items-center justify-center bg-white" : "hidden"}>
                <ActivityIndicator size={"large"} color={"blue"} />
            </View>
            <View className=" h-auto w-60 flex items-center  py-6 justify-center rounded-md shadow-2xl bg-slate-200 px-4">
                <View className=" w-full gap-y-2 py-2 ">
                    <Text>Email</Text>

                    <TextInput value={email} onChangeText={(text) => { setEmail(text) }} className=" bg-white p-2" placeholder='Email adress' />
                </View>
                <View className=" w-full gap-y-2  py-2  ">
                    <Text>Password</Text>
                    <TextInput value={password} onChangeText={(text) => { setPassword(text) }} secureTextEntry={true} className=" bg-white p-2" placeholder='Password' />
                </View>
                <View className=" w-full gap-2  py-2 ">
                    <TouchableOpacity onPress={() => { SignInnow() }} activeOpacity={0.4} className=" bg-orange-400 w-full p-2 flex items-center justify-center" color={"orange"} title='SignIn'>
                        {loading ? <ActivityIndicator color={"blue"} /> : <Text className=" text-white">Login</Text>}
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => { SignUp() }} activeOpacity={0.4} className=" bg-orange-400 w-full p-2 flex items-center justify-center" color={"orange"} title='SignIn'>
                        {loading ? <ActivityIndicator color={"blue"} /> : <Text className=" text-white">Signup</Text>}
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    )
}

export default Login


/*
 
    /*
        const SignIn = async () => {
            setLoading(true)
            try {
                const login = await signInWithEmailAndPassword(auth, email, password)
                alert("done check your email");
            } catch (error) {
                alert(`you got an error ${error.message}`);
            } finally {
                setLoading(false)
            }
        }
        const SignUp = async () => {
            setLoading(true)
            try {
                const login = await createUserWithEmailAndPassword(auth, email, password)
                alert("done check your email");
            } catch (error) {
                alert(`you got an error ${error.message}`);
            } finally {
                setLoading(false)
            }
        }
    */


/*
 
const Login = () => {
const auth = "fg"
const [loading, setLoading] = useState(false)
const [email, setEmail] = useState("")
const [password, setPassword] = useState("")

return (
<View className="flex-1 white  h-full flex items-center justify-center">
<StatusBar barStyle={"dark-content"} backgroundColor={"white"} />
<View className=" h-auto w-60 flex items-center  py-6 justify-center rounded-md shadow-2xl bg-slate-200 px-4">
    <View className=" w-full gap-y-2 py-2 ">
        <Text>Email</Text>
        <TextInput value={email} onChange={(e) => { setEmail(e.target.value) }} className=" bg-white p-2" placeholder='Email adress' />
    </View>
    <View className=" w-full gap-y-2  py-2  ">
        <Text>Password</Text>
        <TextInput value={password} onChange={(e) => { setPassword(e.target.value) }} secureTextEntry={true} className=" bg-white p-2" placeholder='Password' />
    </View>
    <View className=" w-full gap-2  py-2 ">
        <TouchableOpacity onPress={() => { SignIn() }} activeOpacity={0.4} className=" bg-orange-400 w-full p-2 flex items-center justify-center" color={"orange"} title='SignIn'>
            {loading ? <ActivityIndicator color={"blue"} /> : <Text className=" text-white">Login</Text>}
        </TouchableOpacity>
        <TouchableOpacity onPress={() => { SignUp() }} activeOpacity={0.4} className=" bg-orange-400 w-full p-2 flex items-center justify-center" color={"orange"} title='SignIn'>
            {loading ? <ActivityIndicator color={"blue"} /> : <Text className=" text-white">Signup</Text>}
        </TouchableOpacity>
    </View>
</View>
</View>
)
}

export default Login

 
*/