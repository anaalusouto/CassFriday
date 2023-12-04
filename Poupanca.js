import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';

export default function Poupanca() {
  const [mostrarpoupanca, setMostrarpoupanca] = useState(false);
  const [porcentagem, setPorcentagem] = useState(0);

  const mostrarPoupanca = () => {
    setMostrarpoupanca(true);
  }

  return (
    <View style={styles.container}>
      {!mostrarpoupanca && (
        <>
          <Text>Insira a % da poupança</Text>
          <TextInput
            style={styles.entrada}
            onChangeText={(value) => setPorcentagem(value)}
          />
          <Button title='MOSTRAR VALOR NA POUPANÇA' onPress={mostrarPoupanca} />
        </>
      )}
      {mostrarpoupanca && (
        <Text>Valor atual da poupança: {porcentagem}</Text>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 20,
  },
  entrada: {
    borderWidth: 1,
    borderColor: '#1E90FF',
    padding: 10,
    marginVertical: 10,
    width: 300,
  },
});
