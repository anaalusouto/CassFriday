import React, { useState } from 'react';
import { StatusBar, View, Text, Button, TextInput, Image, StyleSheet } from 'react-native';
import Calcular from './components/calcular';

export default function TelaPrincipal({ navigation }) {
  const [saldo, setSaldo] = useState(0);
  const [data, setData] = useState(0);
  const [novosaldo, setNovosaldo] = useState(0);
  const [mensagem, setMensagem] = useState("");
  const [valor, setValor] = useState(0);
  const [extrato, setExtrato] = useState("");
  const [mostrarExtrato, setMostrarExtrato] = useState(false);
  const [chequeEspecial, setChequeEspecial] = useState(0);
  const [mostrarcheque, setMostrarcheque] = useState(false);
  const [porcentagem, setPorcentagem] = useState(0);
  const [poupanca, setPoupanca] = useState(0);
  const [mostrarpoupanca, setMostrarpoupanca] = useState(false);
  const [mensagemerro, setMensagemerro] = useState("");

  function adicionarCredito() {
    const x = new Calcular(saldo, data, porcentagem);
    x.adicionarCredito(valor);

    const novaMensagem = `Crédito adicionado de ${x.credito} na data de: ${x.data}`;
    setMensagemerro("");
    setMensagem(novaMensagem);
    setExtrato((AntesExtrato) => `${AntesExtrato}\n${novaMensagem}`);
    setNovosaldo(x.saldo);
    setSaldo(x.saldo);
    setPoupanca(x.poupanca);
  }

  function debitar() {
    const x = new Calcular(saldo, data, porcentagem);
    x.debitar(valor);
    if (x.saldo < -2640) {
      const novaMensagem = "Você está tentando sacar mais do que o cheque especial permite";
      setMensagemerro(novaMensagem);
    } else {
      const novaMensagem = `Foi debitado da sua conta o valor de ${x.debito} na data de: ${x.data}`;
      setMensagemerro("");
      setMensagem(novaMensagem);
      setExtrato((AntesExtrato) => `${AntesExtrato}\n${novaMensagem}`);
      setNovosaldo(x.saldo);
      setSaldo(x.saldo);
      setChequeEspecial(x.chequeespecial);
    }
  }

  function Extrato() {
    setMostrarExtrato(true);
  }

  function extratoEspecial() {
    navigation.navigate('ExtratoEspecial');
  }

  function ChequeEspecial() {
    navigation.navigate('ChequeEspecial', {chequeEspecial});
  }

  function Poupanca() {
    navigation.navigate('Poupanca');
  }

  return (
    <View style={styles.container}>
      <Text>Saldo atual: {novosaldo}</Text>
      <Text>Insira o saldo</Text>
      <TextInput
        style={entrada.entrada}
        onChangeText={(value) => setValor(value)}
      />
      <Text>Insira a data de hoje:</Text>
      <TextInput
        style={entrada.entrada}
        onChangeText={(value) => setData(value)}
      />

      <Button title='CREDITAR' onPress={adicionarCredito} />
      <Button title='DEBITAR' onPress={debitar} />
      <Text>{mensagemerro}</Text>
      <Button title='EXTRATO' onPress={Extrato} />
      <Button title='EXTRATO ESPECIAL' onPress={extratoEspecial} />
      <Button title='CHEQUE ESPECIAL' onPress={ChequeEspecial} />
      <Button title='MOSTRAR VALOR NA POUPANÇA' onPress={Poupanca} />
      {mostrarExtrato && <Text>{extrato}</Text>}
      {mostrarcheque && (
        <Text>Valor do cheque especial atual: {chequeEspecial}</Text>
      )}
      {mostrarpoupanca && <Text>Valor atual da poupança: {poupanca}</Text>}
      <StatusBar style='auto' />
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
  logoContainer: {
    alignItems: 'center',
  },
  
});
