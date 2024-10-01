import {
  Alert,
  Image,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  StyleSheet,
} from 'react-native';
import React, {useState} from 'react';

type Props = {
  navigation: any;
};

const SignupScreen = ({navigation}: Props) => {
  const backgroundImage = require('../assets/background.png');
  const logo = require('../assets/logo.png');

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  // Regular expression for email validation
  const validateEmail = (email: string) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  // Regular expression for password validation (at least 8 characters, 1 letter, 1 number)
  const validatePassword = (password: string) => {
    const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
    return passwordRegex.test(password);
  };

  const handleSignUpPress = () => {
    if (!validateEmail(email)) {
      Alert.alert('Invalid email format');
      return;
    }

    if (!validatePassword(password)) {
      Alert.alert(
        'Password must be at least 8 characters long and contain at least 1 letter and 1 number',
      );
      return;
    }

    if (password !== confirmPassword) {
      Alert.alert('Passwords do not match');
      return;
    }

    const valuesToPass = {
      email,
      password,
    };
    navigation.navigate('Signinfo', valuesToPass);
  };

  return (
    <View style={styles.container}>
      <Image style={styles.backgroundImage} source={backgroundImage} />
      <View style={styles.body}>
        <View style={styles.logoContainer}>
          <Image style={styles.logo} source={logo} />
        </View>
        <View style={styles.gettingStarterBlock}>
          <View style={styles.forms}>
            <View style={styles.loginBlock}>
              <View style={styles.gettingStarted}>
                <Text style={styles.gettingStartedText}>Join LocalVibe</Text>
                <Text style={styles.joinToExploreText}>Join to explore!</Text>
              </View>
              <View style={styles.loginPass}>
                <View style={styles.inputContainer}>
                  <Text style={styles.inputLabel}>Email or Phone Number</Text>
                  <TextInput
                    placeholder="Email or Phone Number"
                    value={email}
                    onChangeText={text => setEmail(text)}
                    style={styles.input}
                  />
                </View>
                <View style={styles.inputContainer}>
                  <Text style={styles.inputLabel}>Password</Text>
                  <TextInput
                    placeholder="Password"
                    value={password}
                    onChangeText={text => setPassword(text)}
                    style={styles.input}
                    secureTextEntry={true}
                  />
                </View>
                <View style={styles.inputContainer}>
                  <Text style={styles.inputLabel}>Confirm Password</Text>
                  <TextInput
                    placeholder="Confirm Password"
                    value={confirmPassword}
                    onChangeText={text => setConfirmPassword(text)}
                    style={styles.input}
                    secureTextEntry={true}
                  />
                </View>
              </View>
            </View>
          </View>
          <View style={styles.signInSignup}>
            <TouchableOpacity onPress={handleSignUpPress}>
              <View style={styles.signUpButton}>
                <Text style={styles.signUpText}>Sign Up</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate('Login')}>
              <View style={styles.signInButton}>
                <Text style={styles.signInText}>Sign In</Text>
              </View>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F1FFF8',
  },
  backgroundImage: {
    position: 'absolute',
    top: 0,
    width: '100%',
    height: '76%',
  },
  body: {
    flexDirection: 'column',
  },
  logoContainer: {
    marginTop: '9%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  frame13: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  logo: {
    width: 163.77,
    height: 163.77,
  },
  gettingStarterBlock: {
    marginTop: '23%',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
  },
  forms: {
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    marginBottom: 10,
  },
  loginBlock: {
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    marginHorizontal: '8%',
  },
  gettingStarted: {
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    marginBottom: '15%',
  },
  gettingStartedText: {
    width: 148,
    color: 'black',
    fontSize: 20,
    fontWeight: 'bold',
    fontFamily: 'Roboto',
  },
  joinToExploreText: {
    width: 148,
    color: 'black',
    fontSize: 12,
    fontFamily: 'Roboto',
    fontWeight: '300',
  },
  loginPass: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'flex-start',
    marginBottom: 10,
  },
  inputContainer: {
    height: 60,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'flex-start',
    marginBottom: 22,
  },
  inputLabel: {
    width: '100%',
    color: 'black',
    fontSize: 14,
    fontWeight: 'bold',
    fontFamily: 'Roboto',
    marginBottom: 10,
  },
  input: {
    width: 341,
    height: 39,
    backgroundColor: 'white',
    borderRadius: 10,
    borderColor: '#9e9e9e',
    borderWidth: 0,
    paddingHorizontal: 10,
    elevation: 5,
  },
  signInSignup: {
    marginHorizontal: '8%',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'flex-start',
    marginBottom: 13,
  },
  signUpButton: {
    width: 341,
    height: 39,
    backgroundColor: '#2f855a',
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 13,
  },
  signUpText: {
    color: 'white',
    fontWeight: 'bold',
    fontFamily: 'Roboto',
  },
  signInButton: {
    width: 341,
    height: 39,
    backgroundColor: 'white',
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  signInText: {
    color: '#2f855a',
    fontWeight: 'bold',
    fontSize: 14,
    fontFamily: 'Roboto',
  },
});

export default SignupScreen;
