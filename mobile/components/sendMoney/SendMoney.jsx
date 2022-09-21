import {View, Text, TouchableOpacity, TextInput, Button} from 'react-native';
import React, {useState} from 'react';
import Icon from 'react-native-vector-icons/AntDesign';
import {useNavigation} from '@react-navigation/native';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';
import styles from './sendMoney';
const SendMoney = ({route}) => {
  const {wallet} = route.params;
  const id = wallet._id;
  const navigation = useNavigation();
  const [valueIdTake, setValueIdTake] = useState('');
  const [moneySend, setMoneySend] = useState('');
  const [token, setToken] = useState('');
  const [validation, setValidation] = useState('');

  const getToken = async () => {
    try {
      const value = await AsyncStorage.getItem('Token');
      if (value !== null) {
        setToken(value);
      }
    } catch (e) {
      console.log(e);
    }
  };
  getToken();

  const handleSubmit = async () => {
    try {
      const response = await axios.post(
        `http://192.168.66.102:4000/api/v1/wallet/sendMoney?send=${id}&take=${valueIdTake}`,
        {
          numberMoneySend: Number(moneySend),
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        },
      );
      navigation.navigate('Login');
    } catch (error) {
      setValidation(error.response.data.message);
    }
    navigation.navigate('Login');
  };
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => navigation.goBack()} style={styles.back}>
        <Icon name="arrowleft" size={24}></Icon>
      </TouchableOpacity>
      <View style={styles.valueUser}>
        <Text>ID: {wallet._id}</Text>
        <Text>Money: ${wallet.money}</Text>
      </View>
      <KeyboardAwareScrollView keyboardShouldPersistTaps="always">
        <View style={styles.wrapSend}>
          <Text style={styles.titleForm}>Send Money</Text>
          <Text style={styles.validation}>{validation}</Text>
          <Text>ID Take</Text>
          <TextInput
            value={valueIdTake}
            onChangeText={e => setValueIdTake(e)}
            style={styles.input}></TextInput>
          <Text>Money Send</Text>
          <TextInput
            value={moneySend}
            onChangeText={e => setMoneySend(e)}
            style={styles.input}></TextInput>
          <Button onPress={handleSubmit} title="Submit"></Button>
        </View>
      </KeyboardAwareScrollView>
    </View>
  );
};

export default SendMoney;
