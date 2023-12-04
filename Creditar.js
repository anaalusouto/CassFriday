import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';
import Calcular from './components/calcular';

export default function Creditar({ navigation }) {
  const [valor, setValor] = useState(0);
  const [mensagem, setMensagem] = useState("");
  const [novosaldo, setNovosaldo] = useState(0);

  function adicionarCredito() {const x = new Calcular(saldo, data, porcentagem);
    x.adicionarCredito(valor);

    const novaMensagem = `Crédito adicionado de ${x.credito} na data de: ${x.data}`;
    setMensagemerro("");
    setMensagem(novaMensagem);
    setExtrato((AntesExtrato) => `${AntesExtrato}\n${novaMensagem}`);
    setNovosaldo(x.saldo);
    setSaldo(x.saldo);
    setPoupanca(x.poupanca);
    
  function Extrato() {
    setMostrarExtrato(true);
  }

  }

  return (
    <View style={styles.container}>
      <Text>Insira o saldo</Text>
      <TextInput
        style={entrada.entrada}
        onChangeText={(value) => setValor(value)}
      />
      <Button title='CREDITAR' onPress={adicionarCredito} />
      <Text>{mensagem}</Text>
    </View>
  );
}

const entrada = StyleSheet.create({
  entrada: {
    borderWidth: 1,
    borderColor: '#1E90FF',
    padding: 10,
    marginVertical: 10,
    width: 300,
  },
});

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    flex: 1,
    justifyContent: 'center',
    padding: 20,
  },
});
