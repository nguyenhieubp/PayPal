import {View, Text, TouchableOpacity, TextInput, Button} from 'react-native';
import React, {useState} from 'react';
import styles from './wallet';
import Icon from 'react-native-vector-icons/AntDesign';
import {useNavigation} from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';
const Wallet = ({route}) => {
  const navigation = useNavigation();
  const {wallet} = route.params;
  const [isDelete, setIsDelete] = useState(false);
  const [token, setToken] = useState('');
  const [valueInputPassword, setValueInputPassword] = useState('');
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

  const handleDelete = async () => {
    setIsDelete(true);
  };

  const handleInputDelete = async () => {
    try {
      await axios.post(
        'http://192.168.66.102:4000/api/v1/wallet/deleteWallet/',
        {idWallet: wallet._id, password: valueInputPassword},
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        },
      );
    } catch (error) {
      setValidation(error.response.data.message);
    }
  };
  return (
    <View>
      {isDelete && (
        <View style={styles.containerAlert}>
          <View style={styles.alertDelete}>
            <Text>You can input</Text>
            <Text style={styles.validation}>{validation}</Text>
            <View style={styles.wrapInputPass}>
              <Icon
                onPress={() => setIsDelete(false)}
                style={styles.iconTimes}
                size={25}
                name="delete"></Icon>
              <TextInput
                style={styles.inputPassword}
                onChangeText={e => setValueInputPassword(e)}></TextInput>
            </View>
            <Button
              onPress={handleInputDelete}
              title="Submit"
              color={'red'}></Button>
          </View>
        </View>
      )}
      <View style={styles.container}>
        <TouchableOpacity
          onPress={() => navigation.goBack()}
          style={styles.back}>
          <Icon name="arrowleft" size={24}></Icon>
        </TouchableOpacity>
        <View style={styles.wallet}>
          <Icon name="creditcard" color="black" size={100}></Icon>
          <View>
            <View style={styles.contentWallet}>
              <Text style={styles.idWallet}>ID: {wallet._id}</Text>
              <Text style={styles.money}>Money: ${wallet.money}</Text>
            </View>
            <View style={styles.containerButton}>
              <TouchableOpacity
                onPress={() =>
                  navigation.navigate('SendMoney', {wallet: wallet})
                }
                style={styles.buttonSend}>
                <Text style={styles.textButton}>SEND</Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={handleDelete}
                style={styles.buttonDelete}>
                <Text style={styles.textButton}>DELETE</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
};

export default Wallet;
