// src/primera-parcial/AsyncStorageParcial04.js
import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, Button, FlatList, TouchableOpacity, StyleSheet } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const AsyncStorageParcial04 = () => {
  const [codigo, setCodigo] = useState('');
  const [carrera, setCarrera] = useState('');
  const [facultad, setFacultad] = useState('');
  const [data, setData] = useState([]);

  useEffect(() => {
    loadData();
  }, []);

  const saveData = async () => {
    const newItem = { codigo, carrera, facultad };
    const storedData = await AsyncStorage.getItem('data');
    const parsedData = storedData ? JSON.parse(storedData) : [];
    parsedData.push(newItem);
    await AsyncStorage.setItem('data', JSON.stringify(parsedData));
    loadData();
  };

  const loadData = async () => {
    const storedData = await AsyncStorage.getItem('data');
    if (storedData) {
      setData(JSON.parse(storedData));
    }
  };

  const deleteItem = async (codigo) => {
    const storedData = await AsyncStorage.getItem('data');
    const parsedData = JSON.parse(storedData).filter(item => item.codigo !== codigo);
    await AsyncStorage.setItem('data', JSON.stringify(parsedData));
    loadData();
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Código"
        placeholderTextColor="#888"
        value={codigo}
        onChangeText={setCodigo}
      />
      <TextInput
        style={styles.input}
        placeholder="Carrera"
        placeholderTextColor="#888"
        value={carrera}
        onChangeText={setCarrera}
      />
      <TextInput
        style={styles.input}
        placeholder="Facultad"
         placeholderTextColor="#888"
        value={facultad}
        onChangeText={setFacultad}
      />
      <Button title="Almacenar" onPress={saveData} />
      <FlatList
        data={data}
        keyExtractor={(item) => item.codigo}
        renderItem={({ item }) => (
          <View style={styles.listItem}>
            <Text style={styles.itemText}>Código: {item.codigo}</Text>
            <Text style={styles.itemText}>Carrera: {item.carrera}</Text>
            <Text style={styles.itemText}>Facultad: {item.facultad}</Text>
            <TouchableOpacity onPress={() => deleteItem(item.codigo)}>
              <Text style={styles.deleteText}>Eliminar</Text>
            </TouchableOpacity>
          </View>
        )}
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
  input: {
    borderWidth: 1,
    borderColor: '#aaa',
    padding: 10,
    borderRadius: 8,
    backgroundColor: '#fff',
    marginBottom: 10,
    color: '#333',
  },
  listItem: {
    backgroundColor: '#e0e7ef',
    padding: 15,
    borderRadius: 8,
    marginBottom: 10,
  },
  itemText: {
    color: '#333',
    marginBottom: 5,
  },
  deleteText: {
    color: '#ff4d4d',
    marginTop: 10,
    fontWeight: 'bold',
  },
});

export default AsyncStorageParcial04;
