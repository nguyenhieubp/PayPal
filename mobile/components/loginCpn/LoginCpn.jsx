import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  KeyboardAvoidingView,
} from 'react-native';
import React, {useState} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {useNavigation} from '@react-navigation/native';
import styles from './loginCpn';
import axios from 'axios';
const LoginCpn = () => {
  const navigation = useNavigation();
  const [valueEmail, setValueEmail] = useState('');
  const [valuePassword, setValuePassword] = useState('');
  const [validation, setValidation] = useState('');
  const handleSubmit = async () => {
    try {
      const response = await axios.post(
        'http://192.168.66.102:4000/api/v1/auth/login',
        {
          email: valueEmail,
          password: valuePassword,
        },
      );
      const {token} = response.data;
      const storeData = async value => {
        try {
          await AsyncStorage.setItem('Token', value);
          navigation.navigate('Home');
        } catch (e) {
          console.log('error store');
        }
      };
      storeData(token);
    } catch (error) {
      setValidation(error.response.data.message);
    }
  };

  return (
    <KeyboardAvoidingView
      style={styles.wrapFormInput}
      extraHeight={50}
      keyboardShouldPersistTaps="always">
      <Text style={styles.validation}>{validation}</Text>
      <TextInput
        onChangeText={e => setValueEmail(e)}
        placeholder="Email"
        style={styles.input}></TextInput>
      <View style={styles.inputPassword}>
        <TextInput
          onChangeText={e => setValuePassword(e)}
          placeholder="Password"
          style={styles.input}></TextInput>
      </View>
      <TouchableOpacity onPress={handleSubmit} style={styles.buttonSubmit}>
        <Text style={styles.textButton}>Login</Text>
      </TouchableOpacity>
    </KeyboardAvoidingView>
  );
};

export default LoginCpn;
