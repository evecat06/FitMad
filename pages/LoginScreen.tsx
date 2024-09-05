import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

const LoginScreen = () => {
  const [username, setUsername] = useState<string>('');
  const [password, setPassword] = useState<string>('');

  const handleLogin = () => {
    // Implement login logic here
    console.log('Logging in...');
  };

  return (
    <View style={styles.container}>
      <LinearGradient colors={['#000000', '#FF0000']} style={styles.background} />
      <Text style={styles.title}>Log In</Text>
      <Text style={styles.subtitle}>
        Don’t have an account? <Text style={styles.signUpText}>Sign Up</Text>
      </Text>

      {/* Input Fields */}
      <TextInput
        style={styles.input}
        placeholder="Username"
        placeholderTextColor="#fff"
        value={username}
        onChangeText={setUsername}
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        placeholderTextColor="#fff"
        secureTextEntry={true}
        value={password}
        onChangeText={setPassword}
      />

      {/* Forgot Password */}
      <TouchableOpacity>
        <Text style={styles.forgotPasswordText}>forgot password?</Text>
      </TouchableOpacity>

      {/* Log In Button */}
      <TouchableOpacity style={styles.loginButton} onPress={handleLogin}>
        <Text style={styles.loginButtonText}>Log In</Text>
      </TouchableOpacity>

      {/* Social Log In */}
      <Text style={styles.orText}>Or Log In with</Text>
      <View style={styles.socialContainer}>
        <TouchableOpacity style={styles.socialButton}>
          <Image source={require('./assets/icons/google.png')} style={styles.socialIcon} />
        </TouchableOpacity>
        <TouchableOpacity style={styles.socialButton}>
          <Image source={require('./assets/infbxclear.png')} style={styles.socialIcon} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 20,
    backgroundColor: '#000',
  },
  background: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    height: '100%',
  },
  title: {
    fontSize: 36,
    fontWeight: 'bold',
    color: '#fff',
    textAlign: 'center',
    marginBottom: 10,
  },
  subtitle: {
    textAlign: 'center',
    color: '#fff',
    marginBottom: 20,
  },
  signUpText: {
    color: '#00f',
    textDecorationLine: 'underline',
  },
  input: {
    width: '100%',
    height: 50,
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
    color: '#fff',
    paddingHorizontal: 10,
    borderRadius: 5,
    marginVertical: 10,
    fontSize: 16,
  },
  forgotPasswordText: {
    color: '#fff',
    textAlign: 'right',
    textDecorationLine: 'underline',
    marginVertical: 5,
  },
  loginButton: {
    height: 50,
    backgroundColor: '#f5f5f5',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
    marginVertical: 20,
  },
  loginButtonText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#000',
  },
  orText: {
    textAlign: 'center',
    color: '#fff',
    marginVertical: 10,
  },
  socialContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 10,
  },
  socialButton: {
    width: 50,
    height: 50,
    backgroundColor: '#fff',
    borderRadius: 25,
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 10,
  },
  socialIcon: {
    width: 30,
    height: 30,
  },
});

export default LoginScreen;