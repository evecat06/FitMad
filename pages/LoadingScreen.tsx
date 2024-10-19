import React, { useEffect } from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
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


type Props = StackScreenProps<RootStackParamList, 'LoadingScreen'>;

const LoadingScreen: React.FC<Props> = ({ navigation }) => {

  const handleLogin = () => {
    console.log(navigation);
    navigation.navigate('LoginScreen');
  };
  const handleSignUp = () => {
    console.log(navigation);
    navigation.navigate('SignUpScreen');
  };

  return (
    <View style={CommonStyles.container}>
      <LinearGradient colors={['#000000', '#a31018']} style={CommonStyles.background} />
      <Image source={require('../assets/icons/fitmadwhite.png')} style={CommonStyles.LogoIcon} />

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
