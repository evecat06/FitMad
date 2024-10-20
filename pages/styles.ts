import { StyleSheet } from 'react-native';
import {LinearGradient} from 'expo-linear-gradient';

const CommonStyles = StyleSheet.create({
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
    height: '120%',
    zIndex: -1, 
  },
  content: {
    padding: 20,
    zIndex: 1,  // Bring content in front of the background
  },  
  title: {
    fontSize: 36,
    fontWeight: 'bold',
    fontFamily: 'serif',
    color: '#fff',
    textAlign: 'left',
    marginLeft: 15,
    marginBottom: 10,
  },
  lstitle: {
    fontSize: 36,
    fontWeight: 'bold',
    fontFamily: 'serif',
    color: '#fff',
    textAlign: 'left',
    marginLeft: 15,
    marginBottom: 10,
  },
  subtitle: {
    textAlign: 'right',
    color: '#fff',
    marginBottom: 20,
    fontStyle: 'italic',
    marginRight: 25,
  },
  highlightedText: {
    color: '#0EBFFF',
    textDecorationLine: 'underline',
  },
  input: {
    width: '100%',
    height: 50,
    backgroundColor: 'transparent',
    borderColor: '#A31018',
    borderWidth: 1,
    color: '#fff',
    paddingHorizontal: 10,
    borderRadius: 5,
    marginVertical: 10,
    fontSize: 16,
    textAlign: 'center',
  },
  halfInput: {
    width: '48%',
    height: 50,
    backgroundColor: 'transparent',
    color: '#fff',
    paddingHorizontal: 5,
    borderRadius: 5,
    marginVertical: 10,
    fontSize: 16,
    justifyContent: 'center',
    alignItems: 'center',
  },
  forgotPasswordText: {
    color: '#0EBFFF',
    textAlign: 'right',
    textDecorationLine: 'underline',
    marginVertical: 5,
  },
  Button: {
    height: 50,
    backgroundColor: '#f5f5f5',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
    marginVertical: 20,
  },
  ButtonText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#000',
  },
  LoadScButton: {
    height: 50,
    backgroundColor: '#f5f5f5',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
    marginVertical: 10,
  },
  LoadScButText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#000',
  },
  signupButton: {
    height: 50,
    backgroundColor: '#f5f5f5',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
    marginVertical: 20,
  },
  signupButtonText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#000',
    marginVertical: 5,
  },
  orText: {
    textAlign: 'center',
    color: '#fff',
    marginVertical: 10,
    fontStyle: 'italic',
  },
  socialContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 10,
  },
  socialButton: {
    width: 50,
    height: 50,
    backgroundColor: '#2C2C2C',
    borderRadius: 25,
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 10,
  },
  socialIcon: {
    width: 30,
    height: 30,
  },
  imageWrapper: {
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',  // Makes sure the wrapper spans full width
  },
  LogoContainer: {
    alignItems: 'center',
  },
  LogoIcon: {
    width: 200,
    height: 200,
    alignContent: 'center',
    alignSelf: 'center',
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 2,
  },  
  scrollContainer: {
    padding: 20,
    flexGrow: 1,  
    justifyContent: 'center',  
  },
});

export default CommonStyles;
