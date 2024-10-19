import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import HomeScreen from './pages/HomeScreen';
import LoginScreen from './pages/LoginScreen';
import LoadingScreen from './pages/LoadingScreen';
import SignUpScreen from './pages/SignUpScreen';

export type RootStackParamList = {
  LoadingScreen: undefined;
  LoginScreen: undefined;
  SignUpScreen: undefined;
  HomeScreen: undefined;
};
const Stack = createStackNavigator<RootStackParamList>();

const App: React.FC = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="LoadingScreen">
        <Stack.Screen 
          name="LoadingScreen" 
          component={LoadingScreen} 
          options={{ headerShown: false }} 
        />
        <Stack.Screen 
          name="LoginScreen" 
          component={LoginScreen} 
          options={{ title: 'Login', headerShown: false }} 
        />
        <Stack.Screen 
          name="SignUpScreen" 
          component={SignUpScreen} 
          options={{ title: 'Sign Up', headerShown: false}} 
        />
        <Stack.Screen 
          name="HomeScreen" 
          component={HomeScreen} 
          options={{ title: 'Home', headerShown: false }} 
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;