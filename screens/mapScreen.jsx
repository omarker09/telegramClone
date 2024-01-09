import { View, Text, StatusBar } from 'react-native'
import React, { useState, useEffect } from 'react'
import MapView from 'react-native-maps';
import MapViewDirections from 'react-native-maps-directions';


const MapScreen = () => {
  const [cordinates, setcordinates] = useState({
    origin: {
      latitude: 37.78825,
      longitude: -122.4324
    },
    destination: {
      latitude: 37.771707,
      longitude: -122.4053769
    }
  })
  const API_KEY = "AIzaSyAMsj3XciOoq3FqRTJF1eNlNn-7hkJxSis"

  return (
    <View className=" flex-1">
      < StatusBar backgroundColor="white" barStyle="dark-content" translucent={true} />
      <MapView style={{ flex: 1 }}
        initialRegion={{
          latitude: 37.78825,
          longitude: -122.4324,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}/>

  
      <View className=" h-96">
        <Text>
          fghfgh
        </Text>
      </View>
    </View>
  )
}

export default MapScreen