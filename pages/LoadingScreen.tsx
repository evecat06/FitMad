import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Image } from 'react-native';
import {LinearGradient} from 'expo-linear-gradient';
import { useNavigation } from '@react-navigation/native';
import CommonStyles from '../pages/styles'; // Import the common styles


const LoadingScreen = () => {
  const navigation = useNavigation();

  const handleLogin = () => {
    console.log('Logging in...');
  };
  const handleSignUp = () => {
    console.log('Signing up...');
  };

  return (
    <View style={CommonStyles.container}>
      <LinearGradient colors={['#000000', '#a31018']} style={CommonStyles.background} />
      
      <Image source={require('../assets/icons/fitmadwhite.png')} style={CommonStyles.LogoIcon} />
    <Text>{' '}</Text>
      <TouchableOpacity style={CommonStyles.LoadScButton} onPress={handleLogin}>
        <Text style={CommonStyles.LoadScButText}>Log In</Text>
      </TouchableOpacity>
      <TouchableOpacity style={CommonStyles.LoadScButton} onPress={handleSignUp}>
        <Text style={CommonStyles.LoadScButText}>Sign Up</Text>
      </TouchableOpacity>

      
    </View>
  );
};

export default LoadingScreen;
