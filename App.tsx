import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import LoginScreen from './pages/LoginScreen'; // Adjust path if needed


// Define the types for navigation routes
export type RootStackParamList = {
  LoginScreen: undefined;
  SignUpScreen: undefined;
};

const Stack = createStackNavigator<RootStackParamList>();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="LoginScreen">
        <Stack.Screen
          name="LoginScreen"
          component={LoginScreen}
          options={{ headerShown: false }} // Remove header for LoginScreen
        />
        
      </Stack.Navigator>
      
    </NavigationContainer>
  );
}