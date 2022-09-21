import {View, Text, Image, TextInput, TouchableOpacity} from 'react-native';
import React, {useState} from 'react';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import LoginCpn from '../../components/loginCpn/LoginCpn';
import RegisterCpn from '../../components/registerCpn/RegisterCpn';
import {IMAGE} from './login';
import styles from './login';
const Login = ({navigation}) => {
  const [typeForm, setTypeForm] = useState('Login');
  return (
    <View style={styles.container}>
      {typeForm === 'Login' && (
        <View style={styles.wrapImage}>
          <Image
            resizeMode="contain"
            style={styles.imageBank}
            source={{uri: IMAGE}}></Image>
        </View>
      )}
      <View style={typeForm === 'Register' && {marginTop: '30%'}}>
        <Text style={styles.titleLogin}>{typeForm} Now</Text>
        <Text style={[styles.description]}>
          Please enter the detail below to continue
        </Text>
      </View>
      {typeForm === 'Login' && <LoginCpn></LoginCpn>}
      {typeForm === 'Register' && <RegisterCpn></RegisterCpn>}
      <View style={styles.textRegister}>
        {typeForm === 'Login' && (
          <>
            <Text>Don't have an account</Text>
            <TouchableOpacity onPress={() => setTypeForm('Register')}>
              <Text style={{color: 'red'}}> Register</Text>
            </TouchableOpacity>
          </>
        )}
        {typeForm === 'Register' && (
          <>
            <TouchableOpacity onPress={() => setTypeForm('Login')}>
              <Text style={{color: 'red'}}> Login</Text>
            </TouchableOpacity>
          </>
        )}
      </View>
    </View>
  );
};

export default Login;
