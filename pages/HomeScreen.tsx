import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Image } from 'react-native';
import {LinearGradient} from 'expo-linear-gradient';
import { useNavigation } from '@react-navigation/native';
import CommonStyles from '../pages/styles'; // Import the common styles


const HomeScreen = () => {
  const navigation = useNavigation();
  return (
    <View style={CommonStyles.container}>
        <LinearGradient colors={['#000000', '#a31018']} style={CommonStyles.background} />
      <Image source={require('../assets/icons/fitmadwhite.png')} style={CommonStyles.LogoIcon} />
    </View>
  );
};

export default HomeScreen;
