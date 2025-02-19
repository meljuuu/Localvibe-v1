import {useState, useEffect} from 'react';
import {
  Alert,
  Image,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  StyleSheet,
} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
// import {verifyEmail} from '../../redux/actions/userAction';

type Props = {
  navigation: any;
  route: any;
};

const EmailVerificationScreen = ({navigation, route}: Props) => {
  const backgroundImage = require('../assets/2ndbackground.png');
  const logo = require('../assets/logo.png');
  const dispatch = useDispatch();
  const {error, isAuthenticated} = useSelector((state: any) => state.user);

  const [otp, setOtp] = useState('');
  const {email} = route.params;

  const submitHandler = async () => {
    // if (otp.length !== 6) {
    //   Alert.alert('Error', 'Please enter a 6-digit OTP');
    //   return;
    // }

    // try {
    //   await verifyEmail(email, otp)(dispatch);
    // } catch (error) {
    //   console.error('An error occurred:', error);
    //   Alert.alert(
    //     'Error',
    //     'An unexpected error occurred while verifying your email.',
    //   );
    // }
  };

  useEffect(() => {
    if (error) {
      Alert.alert('Error', error);
    }
    if (isAuthenticated) {
      Alert.alert('Success', 'Email verified successfully');
      navigation.navigate('Home');
    }
  }, [error, isAuthenticated, navigation]);

  return (
    <View style={styles.container}>
      <Image style={styles.backgroundImage} source={backgroundImage} />
      <View style={styles.logoContainer}>
        <Image style={styles.logo} source={logo} />
      </View>
      <View style={styles.contentContainer}>
        <View style={styles.formContainer}>
          <View style={styles.headerContainer}>
            <Text style={styles.heading}>Email Verification</Text>
            <Text style={styles.subheading}>
              Enter the 6-digit OTP sent to your email
            </Text>
          </View>

          <View style={styles.inputContainer}>
            <View style={styles.inputWrapper}>
              <Text style={styles.inputLabel}>6-Digit OTP</Text>
              <TextInput
                placeholder="Enter OTP"
                value={otp}
                onChangeText={text => setOtp(text)}
                style={styles.input}
                keyboardType="number-pad"
                maxLength={6}
              />
            </View>
          </View>

          <TouchableOpacity onPress={submitHandler} style={styles.submitButton}>
            <Text style={styles.submitButtonText}>Verify Email</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  backgroundImage: {
    position: 'absolute',
    width: '100%',
    height: '100%',
  },
  logoContainer: {
    alignItems: 'center',
    marginTop: 50,
  },
  logo: {
    width: 100,
    height: 100,
    resizeMode: 'contain',
  },
  contentContainer: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 20,
  },
  formContainer: {
    backgroundColor: 'rgba(255, 255, 255, 0.8)',
    borderRadius: 10,
    padding: 20,
  },
  headerContainer: {
    alignItems: 'center',
    marginBottom: 20,
  },
  heading: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  subheading: {
    fontSize: 16,
    color: '#666',
    textAlign: 'center',
  },
  inputContainer: {
    marginBottom: 20,
  },
  inputWrapper: {
    marginBottom: 15,
  },
  inputLabel: {
    fontSize: 16,
    marginBottom: 5,
  },
  input: {
    backgroundColor: '#fff',
    borderRadius: 5,
    padding: 10,
    fontSize: 16,
  },
  submitButton: {
    backgroundColor: '#007AFF',
    borderRadius: 5,
    padding: 15,
    alignItems: 'center',
  },
  submitButtonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default EmailVerificationScreen;
