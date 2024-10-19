import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';

import LoadingScreen from '../pages/LoadingScreen';
import HomeScreen from '../pages/HomeScreen';
import LoginScreen from '../pages/LoginScreen';
import SignUpScreen from '../pages/SignUpScreen'; 

// Define RootStackParamList to type-check screen names and navigation params
export type RootStackParamList = {
  LoadingScreen: undefined;
  LoginScreen: undefined;
  SignUpScreen: undefined;
  HomeScreen: undefined;
};

// Pass RootStackParamList as the generic parameter to createStackNavigator
const Stack = createStackNavigator<RootStackParamList>();

const Routes: React.FC = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="LoadingScreen" screenOptions={{ headerShown: false }}>
        <Stack.Screen name="LoadingScreen" component={LoadingScreen} />
        <Stack.Screen name="LoginScreen" component={LoginScreen} />
        <Stack.Screen name="SignUpScreen" component={SignUpScreen} />
        <Stack.Screen name="HomeScreen" component={HomeScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Routes;
