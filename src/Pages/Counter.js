import { StyleSheet, Text, View, Button, FlatList } from 'react-native';
import React from 'react';

export default function Counter() {

  const DATA = [
    {
      title: 'First',
      value: 0,
    },
    {
      title: 'Second',
      value: 0,
    },
    {
      title: 'Third',
      value: 0,
    },
  ];

  const Item = ({title, value}) => (
    <View style={styles.buttons}>

      <Text> {title} = { value } </Text>

      <Button 
        title="-">
        onPress={() => { value + 1 }}
      </Button>

      <Button 
        title="Limpar">
      </Button>

      <Button 
        title="+">
      </Button>
    </View>
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={DATA}
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