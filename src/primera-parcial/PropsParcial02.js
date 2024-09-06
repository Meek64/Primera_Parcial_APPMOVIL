// src/primera-parcial/PropsParcial02.js
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const PropsParcial02 = ({ route }) => {
  const { nombre } = route.params;
  const semestre = 8;

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Mi nombre es: <Text style={styles.highlight}>{nombre}</Text></Text>
      <Text style={styles.text}>Actualmente curso el <Text style={styles.highlight}>{semestre}</Text> semestre.</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f0f4f7',
  },
  text: {
    fontSize: 20,
    color: '#333',
    marginBottom: 10,
  },
  highlight: {
    color: '#007bff',
    fontWeight: 'bold',
  },
});

export default PropsParcial02;