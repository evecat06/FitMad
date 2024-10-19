import React from 'react';
import { View, Image } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import CommonStyles from '../pages/styles';

const HomeScreen = () => {
  return (
    <View style={CommonStyles.container}>
      <LinearGradient colors={['#000000', '#a31018']} style={CommonStyles.background} />
      <Image source={require('../assets/icons/fitmadwhite.png')} style={CommonStyles.LogoIcon} />
    </View>
  );
};

export default HomeScreen;
