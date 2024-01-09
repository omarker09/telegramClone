import { View, Text } from 'react-native'
import React from 'react'

const userStack = () => {
    return (
        <>
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
    )
}

export default userStack