import React, {useContext} from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import { Animated } from 'react-native'
import { ProfileContext } from '../context/context'

import SignUp_Container from '../components/SignUp/SignUp_Container'
import SignIn_Container from '../components/SignIn/SignIn_Container'
import Profile_Container from '../components/Profile/Profile_Container'

const forFade = ({ current, next }) => {
    const opacity = Animated.add(
        current.progress,
        next ? next.progress : 0
    ).interpolate({
        inputRange: [0, 1, 2],
        outputRange: [0, 1, 0],
    });

    return {
        leftButtonStyle: {opacity},
        rightButtonStyle: {opacity},
        titleStyle: {opacity},
        backgroundStyle: {opacity},
    };
};

const Stack = createStackNavigator();

const AppNavigator = () => {

    return (
        <Stack.Navigator
            initialRouteName="📱SignUp📱"
            headerMode="screen"
            screenOptions={{
                headerTintColor: '#E28240',
                headerStyle: {backgroundColor: '#16202A'},
            }}
        >
            <Stack.Screen
                name="📱SignUp📱"
                component={SignUp_Container}
                options={{
                    headerStyleInterpolator: forFade
                }}
            />

            <Stack.Screen
                name="📱SignIn📱"
                component={SignIn_Container}
                options={{
                    headerStyleInterpolator: forFade
                }}
            />

            <Stack.Screen
                name="Profile"
                component={Profile_Container}
                options={{
                    headerStyleInterpolator: forFade
                }}
            />
        </Stack.Navigator>
    )
};

export default AppNavigator