import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, TouchableOpacity, Image, ScrollView } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { StackScreenProps } from '@react-navigation/stack';
import { RootStackParamList } from '../App';
import CommonStyles from '../pages/styles';

// Define props using StackScreenProps for navigation
type Props = StackScreenProps<RootStackParamList, 'SignUpScreen'>;

const SignupScreen: React.FC<Props> = ({ navigation }) => {
  const [firstName, setFirstName] = useState<string>('');
  const [lastName, setLastName] = useState<string>('');
  const [username, setUsername] = useState<string>('');
  const [contact, setContact] = useState<string>('');
  const [birthday, setBirthday] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [confirmPassword, setConfirmPassword] = useState<string>('');

  const handleSignUp = () => {
    navigation.navigate('LoginScreen');
  };

  return (
    <ScrollView contentContainerStyle={CommonStyles.scrollContainer}>
      <LinearGradient colors={['#000000', '#a31018']} style={CommonStyles.background} />
      <Text style={CommonStyles.title}>Sign Up</Text>
      <Text style={CommonStyles.subtitle}>
        Already have an account?{' '}
        <TouchableOpacity onPress={() => navigation.navigate('LoginScreen')}>
          <Text style={CommonStyles.highlightedText}>Log In</Text>
        </TouchableOpacity>
      </Text>

      {/* First Name and Last Name Input */}
      <View style={CommonStyles.row}>
        <TextInput
          style={[CommonStyles.input, CommonStyles.halfInput]}
          placeholder="First Name"
          placeholderTextColor="#fff"
          value={firstName}
          onChangeText={setFirstName}
        />
        <TextInput
          style={[CommonStyles.input, CommonStyles.halfInput]}
          placeholder="Last Name"
          placeholderTextColor="#fff"
          value={lastName}
          onChangeText={setLastName}
        />
      </View>

      {/* Username and Contact No. Input */}
      <View style={CommonStyles.row}>
        <TextInput
          style={[CommonStyles.input, CommonStyles.halfInput]}
          placeholder="Username"
          placeholderTextColor="#fff"
          value={username}
          onChangeText={setUsername}
        />
        <TextInput
          style={[CommonStyles.input, CommonStyles.halfInput]}
          placeholder="Contact No."
          placeholderTextColor="#fff"
          value={contact}
          onChangeText={setContact}
        />
      </View>

      <TextInput
        style={CommonStyles.input}
        placeholder="Birthday MM/DD/YYYY"
        placeholderTextColor="#fff"
        value={birthday}
        onChangeText={setBirthday}
      />
      <TextInput
        style={CommonStyles.input}
        placeholder="Email Address"
        placeholderTextColor="#fff"
        value={email}
        onChangeText={setEmail}
      />
      <TextInput
        style={CommonStyles.input}
        placeholder="Password"
        placeholderTextColor="#fff"
        secureTextEntry
        value={password}
        onChangeText={setPassword}
      />
      <TextInput
        style={CommonStyles.input}
        placeholder="Confirm Password"
        placeholderTextColor="#fff"
        secureTextEntry
        value={confirmPassword}
        onChangeText={setConfirmPassword}
      />

      <TouchableOpacity style={CommonStyles.Button} onPress={handleSignUp}>
        <Text style={CommonStyles.ButtonText}>Sign Up</Text>
      </TouchableOpacity>

      <Text style={CommonStyles.orText}>Or Sign Up with</Text>
      <View style={CommonStyles.socialContainer}>
        <TouchableOpacity style={CommonStyles.socialButton}>
          <Image source={require('../assets/icons/google.png')} style={CommonStyles.socialIcon} />
        </TouchableOpacity>
        <TouchableOpacity style={CommonStyles.socialButton}>
          <Image source={require('../assets/icons/fbwhite.png')} style={CommonStyles.socialIcon} />
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

export default SignupScreen;
