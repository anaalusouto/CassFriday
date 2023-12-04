import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';
import Calcular from './components/calcular';

export default function Debitar({ navigation }) {
  const [valor, setValor] = useState(0);
  const [mensagem, setMensagem] = useState("");
  const [novosaldo, setNovosaldo] = useState(0);

  function debitar() { function debitar() {
    const x = new Calcular(novosaldo, 0, 0);
    x.debitar(valor);

    if (x.saldo < -2640) {
      const novaMensagem = "Você está tentando sacar mais do que o cheque especial permite";
      setMensagemerro(novaMensagem);
    } else {
      const novaMensagem = `Foi debitado da sua conta o valor de ${x.debito} na data de: ${x.data}`;
      setMensagemerro("");
      setMensagem(novaMensagem);
      setExtrato(AntesExtrato => `${AntesExtrato}\n${novaMensagem}`);
      setNovosaldo(x.saldo);
      setChequeEspecial(x.chequeespecial);
    }
  }

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
      <Button title='DEBITAR' onPress={debitar} />
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


