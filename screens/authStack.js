import { View, Text } from 'react-native'
import React from 'react'

const authStack = () => {
    return (
        <Stack.Screen
            name="Login"
            options={{ headerShown: false }}
            component={Login}
        />
    )
}

export default authStack