import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  ActivityIndicator,
  Alert,
} from 'react-native';
import axios from 'axios';
import {URI} from '../../redux/URI'; // Your API base URL
import { useSelector } from 'react-redux'; // Import useSelector
import AsyncStorage from '@react-native-async-storage/async-storage'; // Import AsyncStorage

const VerificationScreen = ({navigation}) => {
  const [code, setCode] = useState(''); // Stores the OTP
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const { user, token, users } = useSelector((state: any) => state.user);




  // Handle OTP Submission
  const handleVerify = async () => {
    if (code.length !== 6) {
      Alert.alert('Invalid Code', 'Please enter a 6-digit verification code.');
      return;
    }

    setLoading(true);
    setError('');

    try {
      const response = await axios.post(`${URI}/verify-email`, {code});
      Alert.alert('Success', response.data.message);
      
      // Store success flag in AsyncStorage
      await AsyncStorage.setItem('isEmailVerified', 'true');
      
      navigation.navigate('Home'); // Navigate to home after success
    } catch (err) {
      setError(err.response?.data?.message || 'Something went wrong');
    }

    setLoading(false);
  };

  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20,
      }}>
      <Text style={{fontSize: 22, fontWeight: 'bold', marginBottom: 20}}>
        Enter Verification Code
      </Text>
      <Text style={{color: 'gray', marginBottom: 10}}>
        We've sent a 6-digit code to your email.
      </Text>

      <TextInput
        style={{
          width: '80%',
          height: 50,
          borderWidth: 1,
          borderColor: '#ccc',
          textAlign: 'center',
          fontSize: 18,
          borderRadius: 5,
          marginBottom: 20,
          letterSpacing: 10,
        }}
        maxLength={6}
        keyboardType="numeric"
        value={code}
        onChangeText={setCode}
      />

      {/* Error Message */}
      {error ? (
        <Text style={{color: 'red', marginBottom: 10}}>{error}</Text>
      ) : null}

      {/* Submit Button */}
      <TouchableOpacity
        onPress={handleVerify}
        style={{
          backgroundColor: '#007BFF',
          padding: 12,
          borderRadius: 5,
          width: '80%',
          alignItems: 'center',
        }}
        disabled={loading}>
        {loading ? (
          <ActivityIndicator color="#fff" />
        ) : (
          <Text style={{color: '#fff', fontSize: 16}}>Verify</Text>
        )}
      </TouchableOpacity>
    </View>
  );
};

export default VerificationScreen;
