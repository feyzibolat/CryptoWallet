import { StatusBar } from 'expo-status-bar';
{/* <StatusBar style="auto" /> */}
import React from 'react';
import { StyleSheet, Text, View, LogBox } from 'react-native';


import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from '@react-navigation/native';

import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import thunk from 'redux-thunk'
import rootReducer from './stores/rootReducer'

import Tabs from "./navigation/tabs";

const Stack = createStackNavigator();

const store = createStore(
    rootReducer,
    applyMiddleware(thunk)
)
export default function App() {
    LogBox.ignoreAllLogs(true)
    return (
    <Provider store={store}>
        <NavigationContainer>
        {/* <StatusBar style="auto" hidden={false} /> */}
        <Stack.Navigator
            screenOptions={{
                headerShown: false
            }}
            initialRouteName={'MainLayout'}
        >
            <Stack.Screen
                name="MainLayout"
                component={Tabs}
            />
        </Stack.Navigator>
    </NavigationContainer>
    </Provider>
  );
}