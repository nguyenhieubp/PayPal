import {View, Text, TouchableOpacity} from 'react-native';
import React, {useState} from 'react';
import styles from './home';
import ListWallet from '../../components/listWallet/ListWallet';
import Icon from 'react-native-vector-icons/AntDesign';
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';
const Home = () => {
  const [token, setToken] = useState('');
  const [nameCurrent, setNameCurrent] = useState('');
  const getData = async () => {
    try {
      const value = await AsyncStorage.getItem('Token');
      if (value !== null) {
        setToken(value);
      }
    } catch (e) {
      console.log('err'); // error reading value
    }
  };
  getData();

  const getNameCurrent = async () => {
    try {
      const response = await axios.post(
        'http://192.168.66.102:4000/api/v1/auth/userCurrent',
        {},
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        },
      );
      setNameCurrent(response.data.data.user);
    } catch (error) {
      console.log(error.response.data.name);
    }
  };
  getNameCurrent();

  const handleAddCard = async () => {
    try {
      await axios.post(
        'http://192.168.66.102:4000/api/v1/wallet/create/wallet',
        {},
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        },
      );
    } catch (error) {}
  };

  return (
    <View style={styles.container}>
      <Text style={styles.textHello}>HI, {nameCurrent}</Text>
      <ListWallet></ListWallet>
      <View style={styles.createCard}>
        <Text style={styles.textCreateCard}>Create Card Banking</Text>
      </View>
      <TouchableOpacity onPress={handleAddCard} style={styles.boxAdd}>
        <Icon name="pluscircleo" size={30} color="blue" />
        <Text style={styles.textAdd}>Add Card</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Home;
