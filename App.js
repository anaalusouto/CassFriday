import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, View, Button, TextInput } from 'react-native';
import Calcular from './components/Calcular';

export default function App() {
  const[saldo, setSaldo] = useState(0)
  const[data, setData] = useState(0)
  const[novosaldo, setNovosaldo] = useState(0)
  const [mensagem, setMensagem] = useState("")

    const x = new Calcular(saldo, data)
      let a = ""
      let b = 0

  function adicionarCredito(params) {
      

      a = x.adicionar_credito(saldo)
      b = x.credito
      setMensagem(a)
      setNovosaldo(b)
  }
  return (
    <View style={styles.container}>
      
      <Text>saldo atual: {novosaldo}</Text>
      <Text>Insira o saldo para adicionar</Text>
      <TextInput
      style = {entrada.entrada}
      onChangeText={((value) => setSaldo(value))}
      ></TextInput>

      <Text>insira a data de hoje:</Text>
      <TextInput
      style = {entrada.entrada}
      onChangeText={((value) => setData(value))}
      ></TextInput>

      <Button title='adicionar' onPress={adicionarCredito}/>
      <Text>{mensagem}</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const entrada = StyleSheet.create({
  entrada: {
   borderWidth: 1,
   borderColor: 'gray',
   padding: 10,
   width: 300,
 },
})

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
