import React, { useEffect } from 'react';
import { View, Text, SafeAreaView, StatusBar } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { NavigationContainer } from '@react-navigation/native';
import { SelectCheckAuth } from './redux-toolkit/slices/navslice';
import { createStackNavigator, CardStyleInterpolators, TransitionSpecs, TransitionPresets } from '@react-navigation/stack';
import 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';
import HomeScreen from './screens/home';
import { store } from './redux-toolkit/store'
import { Provider } from 'react-redux'
import MapScreen from './screens/mapScreen';
import { PaperProvider } from 'react-native-paper';
import Chatscreen from './screens/chatscreen';
import Login from './screens/login';
import ScreensParent from './screens/screensParent';
import { AuthProvider } from './screens/aythContex';
const Stack = createStackNavigator();

export default function App() {
  let [uid, setUid] = React.useState("")

  const _retrieveData = async () => {
    try {
      const value = await AsyncStorage.getItem("uid");
      if (value !== null) {

        console.log(value);
        setUid(value)
      }
      return value
    } catch (error) {
      return false
    } finally {
      return true
    }
  };
  _retrieveData()
  useEffect(() => {

    console.log(uid);

  }, [])

  return (
    <AuthProvider>
      <NavigationContainer>
        <Provider store={store}>
          <PaperProvider>
            <ScreensParent />
          </PaperProvider>
        </Provider>
      </NavigationContainer>
    </AuthProvider>
  )
}
