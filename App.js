import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import Header from './src/componentes/Header'; // Cabezera con el nombre de la aplicacion
import ListaMascotas from './src/componentes/ListaMascotas'; // lista de mascotas 



// Aplicacion
export default function App() {
  return (
    <View style={styles.container}>
      <Header titulo={'Tienda de Mascotas'}/>
      <ListaMascotas />
      <StatusBar style="auto" />
    </View>
  );
}


//estilos css de App
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#C85707'
  },
});
