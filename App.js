import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, View, Button, TextInput } from 'react-native';
import Calcular from './components/Calcular';

//tentado explicar ao máximo essa monstruosidade
export default function App() {
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
    const x = new Calcular(saldo, data, porcentagem);//objeto

    x.adicionarCredito(valor);//executa a função com o valor informado como argumento

    const novaMensagem = `Crédito adicionado de ${x.credito} na data de: ${x.data}`;// mensagem de transação

    setMensagemerro("")// isso aqui so vai aparecer se der errado

    setMensagem(novaMensagem);//isso aqui tem que mandar o programa mostrar na tela dele como uma forma de "confirmar", so botar um <Text>{mensagem}</Text>

    setExtrato(AntesExtrato => `${AntesExtrato}\n${novaMensagem}`); //esse aqui é o que acumula as transações e junta tudo no extrato

    setNovosaldo(x.saldo);//esse aqui atualiza o saldo visivel pro parcero, so pode aparecer na tela principal

    setSaldo(x.saldo);// esse aqui atualiza o saldo do construtor, assim consegue acumular, era esse problema que estava dando anteriormente

    setPoupanca(x.poupanca)//esse aqui como o próprio nome sugere, pega o valor da poupança
  }

  function debitar() {
    const x = new Calcular(saldo, data, porcentagem);
    x.debitar(valor);
    if (x.saldo < -2640) {
      const novaMensagem = "você está tentando sacar mais até do que o cheque especial"//isso aqui é caso o cara queira sacar até mais que o valor do cheque
      setMensagemerro(novaMensagem);//mensagem de erro aqui
    }else{
      //o resto é a mesma coisa do adicionar, com exceção do chequeespecial
    const novaMensagem = `Foi debitado da sua conta o valor de ${x.debito} na data de: ${x.data}`;
    setMensagemerro("")
    setMensagem(novaMensagem);
    setExtrato(AntesExtrato => `${AntesExtrato}\n${novaMensagem}`);
    setNovosaldo(x.saldo);
    setSaldo(x.saldo);
    setChequeEspecial(x.chequeespecial)//armazena o valor do cheque especial atualizado
    }
}

  function Extrato() {
    setMostrarExtrato(true);// se o extrato estiver true, ele vai aparecer, por isso ele so aparece se apertar o botão
 }

 function extratoEspecial(params) {// NAO SEI COMO FAZER
  
 }

 function ChequeEspecial() {
   setMostrarcheque(true);// mesma coisa do extrato
    
 }

 function Poupanca() {
  setMostrarpoupanca(true);// mesma coisa dos anteriores, vai mostrar o valor atual da poupança
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
      <Text>insira a % da polpança</Text>
      <TextInput
        style={entrada.entrada}
        onChangeText={(value) => setPorcentagem(value)}
      />
      <Button title='CREDITAR' onPress={adicionarCredito} />
      <Button title='DEBITAR' onPress={debitar} />
      <Text>{mensagemerro}</Text>
      <Button title='EXTRATO' onPress={Extrato} />
      <Button title='EXTRATO ESPECIAL' onPress={extratoEspecial} />
      <Button title='CHEQUE ESPECIAL' onPress={ChequeEspecial} />
      <Button title='MOSTRAR VALOR NA POUPANÇA' onPress={Poupanca}/>
      {mostrarExtrato && <Text>{extrato}</Text>}
      {mostrarcheque && <Text>valor do cheque especial atual: {chequeEspecial}</Text>}
      {mostrarpoupanca && <Text>valor atual da poupanca: {poupanca}</Text>}



      




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
});

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
