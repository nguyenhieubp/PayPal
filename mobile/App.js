import * as React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
//COMPONENT
import Login from './screen/login/Login';
import Home from './screen/home/Home';
import Wallet from './components/wallet/Wallet';
import SendMoney from './components/sendMoney/SendMoney';
const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Wallet" component={Wallet} />
        <Stack.Screen name="SendMoney" component={SendMoney} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
