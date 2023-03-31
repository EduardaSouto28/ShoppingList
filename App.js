import { StyleSheet, Text, View, Button, TextInput, FlatList } from 'react-native';
import React from 'react';
import Counter from "./src/Pages/Counter";

export default function App() {
  const [name, onChangeText] = React.useState('');

  return (
    <>
    <View style={styles.container}>

      <TextInput
        style={styles.input}
        onChangeText={onChangeText}
        value={name}
        placeholder="Nome do ítem"
      />      

      <Button
        style={styles.button}
        title="Adicionar"
      />
      
    </View>
    <Counter></Counter>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    marginTop: '20%'
  },
  input: {
    borderWidth: 1,
    padding: 10,
    width: 200,
    marginRight: 10
  },
  button: {
    margin: 20,
    height: 200
  },
});