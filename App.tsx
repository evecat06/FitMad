import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
// import LoginScreen from './pages/LoginScreen'; 
//import SignUpScreen from './pages/SignUpScreen';
//import LoadingScreen from './pages/LoadingScreen';
import HomeScreen from './pages/HomeScreen';

// Define the types for navigation routes
export type RootStackParamList = {
  LoadingScreen: undefined;
  LoginScreen: undefined;
  SignUpScreen: undefined;
  HomeScreen: undefined;
};

const Stack = createStackNavigator<RootStackParamList>();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="HomeScreen">
        <Stack.Screen
          name="HomeScreen"
          component={HomeScreen}
          options={{ headerShown: false }} // Remove header for LoginScreen
        />
        
      </Stack.Navigator>
      
    </NavigationContainer>
  );
}