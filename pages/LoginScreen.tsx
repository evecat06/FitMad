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
};


// Define props using StackScreenProps for navigation
type Props = StackScreenProps<RootStackParamList, 'LoginScreen'>;

const LoginScreen: React.FC<Props> = ({ navigation }) => {
  
  const [username, setUsername] = useState<string>('');
  const [password, setPassword] = useState<string>('');

  const handleLogin = () => {
    navigation.navigate('HomeScreen');
  };
  const handleSignUp = () => {
    console.log(navigation);
    navigation.navigate('SignUpScreen');
  };

  return (
    <View style={CommonStyles.container}>
      <LinearGradient colors={['#000000', '#a31018']} style={CommonStyles.background} />
      <Text style={CommonStyles.title}>Log In</Text>
      <Text style={CommonStyles.subtitle}>
        Don’t have an account?   
        <TouchableOpacity onPress={() => navigation.navigate('SignUpScreen')}>
          <Text style={CommonStyles.highlightedText}> Sign Up</Text>
        </TouchableOpacity>
      </Text>

      <TextInput
        style={CommonStyles.input}
        placeholder="Username"
        placeholderTextColor="#fff"
        value={username}
        onChangeText={setUsername}
      />
      <TextInput
        style={CommonStyles.input}
        placeholder="Password"
        placeholderTextColor="#fff"
        secureTextEntry
        value={password}
        onChangeText={setPassword}
      />

      <TouchableOpacity>
        <Text style={CommonStyles.forgotPasswordText}>Forgot password?</Text>
      </TouchableOpacity>

      <TouchableOpacity style={CommonStyles.Button} onPress={handleLogin}>
        <Text style={CommonStyles.ButtonText}>Log In</Text>
      </TouchableOpacity>

      <Text style={CommonStyles.orText}>Or Log In with</Text>
      <View style={CommonStyles.socialContainer}>
        <TouchableOpacity style={CommonStyles.socialButton}>
          <Image source={require('../assets/icons/google.png')} style={CommonStyles.socialIcon} />
        </TouchableOpacity>
        <TouchableOpacity style={CommonStyles.socialButton}>
          <Image source={require('../assets/icons/fbwhite.png')} style={CommonStyles.socialIcon} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default LoginScreen;
