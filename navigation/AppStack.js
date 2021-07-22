import React, { useContext, useEffect } from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';


import LoadingScreen from '../components/LoadingScreen';
import Login from '../components/Login';
import HomeScreen from '../components/HomeScreen';
import { LoginContext } from '../utils/LoginProvider';

const Stack = createStackNavigator();
const AppStack = () => {

    const {user, isLoading} = useContext(LoginContext);

    return (
        <NavigationContainer>
            <Stack.Navigator  headerMode='none'>
                {isLoading ? (
                    <Stack.Screen name='loading' component={LoadingScreen} />
                ) : user ? (
                    <Stack.Screen name='Home' component={HomeScreen} />
                ) : (<Stack.Screen name='SignIn' component={Login}/>)}
            </Stack.Navigator>
        </NavigationContainer>
    );
}

export default AppStack;