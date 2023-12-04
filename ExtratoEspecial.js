import React, { useState } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

export default function ExtratoEspecial({ navigation }) {
  const [extrato, setExtrato] = useState("");

  function mostrarExtratoEspecial() {
  }

  return (
    <View style={styles.container}>
      <Button title='EXTRATO ESPECIAL' onPress={mostrarExtratoEspecial} />
      <Text>{extrato}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    flex: 1,
    justifyContent: 'center',
    padding: 20,
  },
});
