import { StyleSheet, Text, View, Button, TextInput, FlatList } from 'react-native';
import React from 'react';
import Counter from "./src/Pages/Counter";

export default function App() {
  const [name, onChangeText] = React.useState('');
  // const [list, onChangeLits] = React.useState([])

  const DATA = [
    {
      id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
      title: 'First Item',
    },
    {
      id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
      title: 'Second Item',
    },
    {
      id: '58694a0f-3da1-471f-bd96-145571e29d72',
      title: 'Third Item',
    },
  ];

  function addList() {
    DATA.push({
      id: 'djcsbsjdhc',
      title: 'Maria'
    })
  }

  const Item = ({title}) => (
    <View style={styles.item}>
      <Text style={styles.title}>{title}</Text>
    </View>
  );

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
        onPress={addList}
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