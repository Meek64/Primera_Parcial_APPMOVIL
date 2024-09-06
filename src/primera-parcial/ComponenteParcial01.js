// src/primera-parcial/ComponenteParcial01.js
import React, { useState } from 'react';
import { View, Text, Image, TextInput, FlatList, TouchableOpacity, StyleSheet } from 'react-native';

const ComponenteParcial01 = ({ navigation }) => {
  const [nombre, setNombre] = useState('');
  const imageUri = 'https://example.com/tu-imagen.png'; // Cambia esta URI por la que necesites

  const componentsList = [
    { key: '1', title: 'PropsParcial02', navigateTo: 'PropsParcial02' },
    { key: '2', title: 'AxiosParcial03', navigateTo: 'AxiosParcial03' },
    { key: '3', title: 'AsyncStorageParcial04', navigateTo: 'AsyncStorageParcial04' },
  ];

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Examen Primera Parcial</Text>

      {/* Cargar la imagen desde la URI */}
      <Image source={{ uri: 'https://reactnative.dev/img/tiny_logo.png' }} style={styles.image} />

      <TextInput
        style={styles.input}
        placeholder="Ingresar nombre"
        placeholderTextColor="#888"
        value={nombre}
        onChangeText={setNombre}
      />

      <FlatList
        data={componentsList}
        renderItem={({ item }) => (
          <TouchableOpacity onPress={() => navigation.navigate(item.navigateTo, { nombre })}>
            <Text style={styles.listItem}>{item.title}</Text>
          </TouchableOpacity>
        )}
        keyExtractor={(item) => item.key}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f0f4f7',
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
    textAlign: 'center',
    marginBottom: 20,
  },
  image: {
    width: 150,
    height: 150,
    alignSelf: 'center',
    marginBottom: 20,
    borderRadius: 75, // Esto añade un efecto circular si la imagen es cuadrada
  },
  input: {
    borderWidth: 1,
    borderColor: '#aaa',
    padding: 10,
    borderRadius: 8,
    backgroundColor: '#fff',
    marginBottom: 20,
    color: '#333',
  },
  listItem: {
    fontSize: 18,
    color: '#007bff',
    padding: 10,
    textAlign: 'center',
    backgroundColor: '#e0e7ef',
    marginBottom: 10,
    borderRadius: 8,
  },
});

export default ComponenteParcial01;
