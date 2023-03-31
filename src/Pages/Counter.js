import { StyleSheet, Text, View, Button, FlatList } from 'react-native';
import React from 'react';

export default function Counter() {

  const list = [
    {
      title: 'First',
      value: 0,
    },
    {
      title: 'Second',
      value: 1,
    },
    {
      title: 'Third',
      value: 2,
    },
  ];

  const Item = ({title, value}) => {

    // const [value, onChangeValue] = React.useState('');

    function add() {

      var podioPorPais = list.map(function(item, indice) {
        console.log(item.value)
        return item.value + 1
      });

      list.value = podioPorPais
    }

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
          onPress={() => {add()}}
        </Button>
        
      </View>
    )
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={list}
        renderItem={({item, value}) => <Item title={item.title} value={item.value} />}
        keyExtractor={item => item.title}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttons: {
    display: 'flex',
    flexDirection: 'row',
    gap: 10,
    margin: 20
  }
});