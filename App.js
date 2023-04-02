import { StyleSheet, Text, View, Button, TextInput, FlatList, PermissionsAndroid } from 'react-native';
import React from 'react';
import { create } from 'zustand'

export default function App() {

  function getIndex(list, name) {
    const index = list.indexOf(list.filter(function (obj) {
      return obj.title == name
    })[0])

    return index
  }

  const useStore = create(set => ({
    list: [
      {
        title: 'maria',
        value: 0,
      }
    ],
    addNewItem: (name) => set((state) => {
      try {
        state.list.filter(function (obj) {
          if (obj.title == name) {
            throw new Error();
          }
        })

        const item = state.list = [
          ...state.list,
          {
            title: name,
            value: 0
          }
        ]

        return { item }
      } catch (error) {
        return state.list
      }
    }),
    sum: (title) => set((state) => {
      state.list[getIndex(state.list, title)].value += 1

      const item = state.list = [
        ...state.list,
      ]

      return { item }
    }),
    subtract: (title) => set((state) => {
      state.list[getIndex(state.list, title)].value += -1

      const item = state.list = [
        ...state.list,
      ]

      return { item }
    }),
    clean: (title) => set((state) => {
      state.list[getIndex(state.list, title)].value = 0

      const item = state.list = [
        ...state.list,
      ]

      return { item }
    }),
    excludeItem: (title) => set((state) => {
      state.list.splice(getIndex(state.list, title), 1)

      const item = state.list = [
        ...state.list,
      ]

      return { item }
    }),
  }))

  function Controls() {
    const addNewItem = useStore(state => state.addNewItem)
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
            title="Adicionar"
            onPress={() => { addNewItem(name) }}
          />
        </View>
        <FlatList
          data={list}
          renderItem={({ item, value }) => <Item title={item.title} value={item.value} />}
          keyExtractor={item => item.title}
        />
      </>
    )
  }

  const Item = ({ title, value }) => {
    const sum = useStore(state => state.sum)
    const subtract = useStore(state => state.subtract)
    const clean = useStore(state => state.clean)
    const excludeItem = useStore(state => state.excludeItem)

    return (
      <View style={styles.list}>
        <View style={styles.list_itens}>
          <Text style={styles.list_text}> {title} = {value} </Text>
          <View style={styles.list_buttons}>
            <Button
              title="-"
              onPress={() => { subtract(title) }}
            />
            <Button
              title="Limpar"
              onPress={() => { clean(title) }}
            />
            <Button
              title="+"
              onPress={() => { sum(title) }}
            />
          </View>
        </View>
        <Button
          title="x"
          onPress={() => { excludeItem(title) }}
        />
      </View>
    )

  };

  return (
    <Controls></Controls>
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    flexDirection: 'row',
    marginTop: '20%'
  },
  input: {
    borderWidth: 1,
    padding: 10,
    width: '50%',
    marginRight: '5%',
    height: 35,
  },
  list: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: '1%',
    marginTop: '10%',
    marginRight: '5%',
  },
  list_text: {
    fontSize: 20,
  },
  list_itens: {
    marginRight: '5%',
    alignItems: 'center',
    borderWidth: 1,
    padding: '5%',
    paddingLeft: '10%',
    paddingRight: '10%'
  },
  list_buttons: {
    display: 'flex',
    flexDirection: 'row',
    gap: 10,
    margin: 10,
  }
});