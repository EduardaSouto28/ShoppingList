import { StyleSheet, Text, View, Button, TextInput, FlatList } from 'react-native';
import React from 'react';
import Counter from "./src/Pages/Counter";
import { create } from 'zustand'

export default function App() {

  const useStore = create(set => ({
    list: [
      {
        title: 'First',
        value: 0,
      },
    ],
    inc: (name) => set((state) => {
      
      const item = state.list = [
        ...state.list,
        {
        title: name, 
        value: 0
        }
      ]
      
      return { item }

    }),
    
  }))
  
  function Controls() {
    const inc = useStore(state => state.inc)
    const list = useStore(state => state.list)
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
            onPress={() => {inc(name)}}
          />     
        </View>
        <FlatList
          data={list}
          renderItem={({item, value}) => <Item title={item.title} value={item.value} />}
          keyExtractor={item => item.title}
        />     
    </>  
    )
  }
  
  const Item = ({title, value}) => {
    return (
      <View style={styles.buttons}>

        <Text> {title} = { value } </Text>

        <Button 
          title="-">
        </Button>

        <Button 
          title="Limpar">
        </Button>

        <Button 
          title="+">
        </Button>
        
      </View>
    )
  };

  return ( 
    <Controls></Controls>
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
  buttons: {
    display: 'flex',
    flexDirection: 'row',
    gap: 10,
    margin: 20
  }
});