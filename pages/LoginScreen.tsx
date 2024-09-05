import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Image } from 'react-native';
import {LinearGradient} from 'expo-linear-gradient';
import { useNavigation } from '@react-navigation/native';
import CommonStyles from '../pages/styles'; // Import the common styles


const LoginScreen = () => {
  const [username, setUsername] = useState<string>('');
  const [password, setPassword] = useState<string>('');

  const navigation = useNavigation();

  const handleLogin = () => {
    console.log('Logging in...');
  };

  return (
    <View style={CommonStyles.container}>
      <LinearGradient colors={['#000000', '#a31018']} style={CommonStyles.background} />
      <Text style={CommonStyles.title}>Log In</Text>
      <Text style={CommonStyles.subtitle}>
        Don’t have an account?   {''}
        <TouchableOpacity><Text style={CommonStyles.highlightedText}>
          Sign Up
      </Text></TouchableOpacity>
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
        secureTextEntry={true}
        value={password}
        onChangeText={setPassword}
      />

      <TouchableOpacity>
        <Text style={CommonStyles.forgotPasswordText}>forgot password?</Text>
      </TouchableOpacity>

      <TouchableOpacity style={CommonStyles.Button} onPress={handleLogin}>
        <Text style={CommonStyles.ButtonText}>Log In</Text>
      </TouchableOpacity>

      <Text>{' '}</Text>
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
