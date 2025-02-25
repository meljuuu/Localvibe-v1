import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  ActivityIndicator,
  Alert,
} from 'react-native';
import axios from 'axios';
import { URI } from '../../redux/URI';

const ForgotPasswordScreen = ({ navigation }) => {
  const [code, setCode] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleResetPassword = async () => {
    if (code.length !== 6) {
      Alert.alert('Invalid Code', 'Please enter a 6-digit verification code.');
      return;
    }
    if (newPassword.length < 6) {
      Alert.alert('Error', 'Password must be at least 6 characters long.');
      return;
    }
    if (newPassword !== confirmPassword) {
      Alert.alert('Error', 'Passwords do not match.');
      return;
    }
    setLoading(true);
    setError('');

    try {
      const response = await axios.post(`${URI}/reset-password`, {
        code,
        newPassword,
      });
      Alert.alert('Success', response.data.message);
      navigation.navigate('Login');
    } catch (err) {
      setError(err.response?.data?.message || 'Failed to reset password');
    }
    setLoading(false);
  };

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', padding: 20 }}>
      <Text style={{ fontSize: 22, fontWeight: 'bold', marginBottom: 20 }}>
        Reset Your Password
      </Text>
      <Text style={{ color: 'gray', marginBottom: 10 }}>
        Enter the OTP sent to your email and your new password.
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
        placeholder="OTP Code"
        value={code}
        onChangeText={setCode}
      />

      <TextInput
        style={{
          width: '80%',
          height: 50,
          borderWidth: 1,
          borderColor: '#ccc',
          textAlign: 'center',
          fontSize: 18,
          borderRadius: 5,
          marginBottom: 10,
        }}
        secureTextEntry
        placeholder="New Password"
        value={newPassword}
        onChangeText={setNewPassword}
      />
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
        }}
        secureTextEntry
        placeholder="Confirm Password"
        value={confirmPassword}
        onChangeText={setConfirmPassword}
      />

      {error ? <Text style={{ color: 'red', marginBottom: 10 }}>{error}</Text> : null}

      <TouchableOpacity
        onPress={handleResetPassword}
        style={{ backgroundColor: '#007BFF', padding: 12, borderRadius: 5, width: '80%', alignItems: 'center' }}
        disabled={loading}>
        {loading ? <ActivityIndicator color="#fff" /> : <Text style={{ color: '#fff', fontSize: 16 }}>Reset Password</Text>}
      </TouchableOpacity>
    </View>
  );
};

export default ForgotPasswordScreen;
