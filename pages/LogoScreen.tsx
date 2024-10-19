
//WIP

import React, { useState, useEffect } from 'react';

import { View, Text, TextInput, TouchableOpacity, Image } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { StackScreenProps } from '@react-navigation/stack';
import CommonStyles from '../pages/styles';

export type RootStackParamList = {
  LoadingScreen: undefined;
  LoginScreen: undefined;
  SignUpScreen: undefined;
  HomeScreen: undefined;
  LogoScreen: undefined;
};


// Define props using StackScreenProps for navigation
type Props = StackScreenProps<RootStackParamList, 'LogoScreen'>;

const LogoScreen: React.FC<Props> = ({ navigation }) => {
  useEffect(() => {
        setTimeout(() => {
          navigation.replace('LoginScreen');
        }, 2000);
      }, [navigation]);
  return (
    
      <View style={CommonStyles.container}>
      <LinearGradient colors={['#000000', '#a31018']} style={CommonStyles.background} />
      <Image source={require('../assets/icons/fitmadwhite.png')} style={CommonStyles.LogoIcon} />
    </View>
  );
};

export default LogoScreen;
