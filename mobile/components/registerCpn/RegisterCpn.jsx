import {View, Text, TextInput, TouchableOpacity} from 'react-native';
import React, {useState} from 'react';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import {useNavigation} from '@react-navigation/native';
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';
import styles from './register';
const RegisterCpn = () => {
  const navigation = useNavigation();
  const [valueName, setValueName] = useState('');
  const [valueEmail, setValueEmail] = useState('');
  const [valuePass, setValuePass] = useState('');
  const [validation, setValidation] = useState('');
  const handleSubmit = async () => {
    try {
      const response = await axios.post(
        'http://192.168.66.102:4000/api/v1/auth/register',
        {
          name: valueName,
          email: valueEmail,
          password: valuePass,
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
      console.log(error);
      setValidation(error.response.data);
    }
  };

  return (
    <View>
      <KeyboardAwareScrollView
        keyboardShouldPersistTaps="always"
        style={styles.wrapFormInput}>
        <Text style={styles.validation}>{validation} </Text>

        <View style={styles.inputPassword}>
          <TextInput
            onChangeText={e => setValueName(e)}
            placeholder="Name"
            style={styles.input}></TextInput>
        </View>
        <TextInput
          onChangeText={e => setValueEmail(e)}
          placeholder="Email"
          style={styles.input}></TextInput>
        <View style={styles.inputPassword}>
          <TextInput
            onChangeText={e => setValuePass(e)}
            placeholder="Password"
            style={styles.input}></TextInput>
        </View>
        <TouchableOpacity onPress={handleSubmit} style={styles.buttonSubmit}>
          <Text style={styles.textButton}>Register</Text>
        </TouchableOpacity>
      </KeyboardAwareScrollView>
    </View>
  );
};

export default RegisterCpn;
