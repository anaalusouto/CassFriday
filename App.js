 import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import TelaPrincipal from './TelaPrincipal';
import ExtratoTela from './ExtratoTela';
import ExtratoEspecial from './ExtratoEspecial';
import ChequeEspecial from './ChequeEspecial';
import Poupanca from './Poupanca';
import Creditar from './Creditar';
import Debitar from './Debitar';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="TelaPrincipal">
        <Stack.Screen name="TelaPrincipal" component={TelaPrincipal} />
        <Stack.Screen name="Extrato" component={ExtratoTela} />
        <Stack.Screen name="ExtratoEspecial" component={ExtratoEspecial} />
        <Stack.Screen name="ChequeEspecial" component={ChequeEspecial} />
        <Stack.Screen name="Poupanca" component={Poupanca} />
        <Stack.Screen name="Creditar" component={Creditar} />
        <Stack.Screen name="Debitar" component={Debitar} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
