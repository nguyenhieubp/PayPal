import {View, Text, FlatList, TouchableOpacity} from 'react-native';
import React, {useEffect, useState} from 'react';
import styles from './listWallet';
import Icon from 'react-native-vector-icons/AntDesign';
import {useNavigation} from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';
const ListWallet = () => {
  const navigation = useNavigation();
  const [valueWallet, setValueWallet] = useState([]);
  const [token, setToken] = useState('');
  const getToken = async () => {
    try {
      const value = await AsyncStorage.getItem('Token');
      if (value !== null) {
        setToken(value);
      }
    } catch (e) {
      console.log(e);
      console.log('err'); // error reading value
    }
  };
  getToken();

  useEffect(() => {
    // console.log(token);
    const fetchWallet = async () => {
      const response = await axios.post(
        'http://192.168.66.102:4000/api/v1/wallet/getWallet/',
        {},
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        },
      );
      setValueWallet(...[response.data]);
    };
    fetchWallet();
  }, [token]);
  return (
    <FlatList
      showsHorizontalScrollIndicator={false}
      horizontal={true}
      data={valueWallet}
      renderItem={({item}) => (
        <TouchableOpacity
          onPress={() =>
            navigation.navigate('Wallet', {
              wallet: item,
            })
          }
          style={styles.wrapCard}>
          <Icon name="creditcard" size={100} color="black" />
          <View style={styles.contentCard}>
            <Text style={styles.titleCard}>ID: {item._id}</Text>
            <Text style={styles.titleCard}>Money: ${item.money}</Text>
          </View>
        </TouchableOpacity>
      )}
      keyExtractor={item => item._id.toString()}></FlatList>
  );
};

export default ListWallet;
