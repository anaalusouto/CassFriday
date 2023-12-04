import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function ChequeEspecialScreen({ route }) {
  const { chequeEspecial } = route.params;

  return (
    <View style={styles.container}>
      <Text style={styles.text}>
        Valor do cheque especial atual: {chequeEspecial}
      </Text>
    </View>
  );
}

const entrada = StyleSheet.create({
    entradaContainer: {
      alignItems: 'center',
      marginBottom: 20, 
    },
    entrada: {
      borderWidth: 1,
      borderColor: '#1E90FF',
      padding: 10,
      width: 300,
      marginLeft: 'auto',
      marginRight: 'auto',
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
  