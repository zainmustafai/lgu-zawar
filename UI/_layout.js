import { View, Text } from 'react-native'
import React from 'react'
import { Stack } from 'expo-router'
import * as SplashScreen from 'expo-splash-screen';

SplashScreen.preventAutoHideAsync();

const Layout = () => {
    return (
        <Stack initialRouteName='home' >
            <Stack.Screen name='home' />
        </Stack>
    )
}

export default Layout