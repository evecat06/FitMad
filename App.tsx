import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
// import LoginScreen from './pages/LoginScreen'; 
import SignUpScreen from './pages/SignUpScreen';

// Define the types for navigation routes
export type RootStackParamList = {
  LoginScreen: undefined;
  SignUpScreen: undefined;
};

const Stack = createStackNavigator<RootStackParamList>();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="SignUpScreen">
        <Stack.Screen
          name="SignUpScreen"
          component={SignUpScreen}
          options={{ headerShown: false }} // Remove header for LoginScreen
        />
        
      </Stack.Navigator>
      
    </NavigationContainer>
  );
}