import React from 'react';
import { View, Text, Button, TouchableOpacity } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
import Card from '../shared/Card';
import styles from '../shared/styles';

function Boards({ navigation: { navigate } }) {

  const data = [
    { id: '1', title: 'Item 1' },
    { id: '2', title: 'Item 2' },
    { id: '3', title: 'Item 3' },
    { id: '4', title: 'Item 4' },
    { id: '5', title: 'Item 5' },
  ]; //test use files and statee

  const renderItem = ({ item }) => (
    <View>
      <TouchableOpacity style={[styles.container, {width: '100%'}]}>
        <Card>
          <Text>{item.title}</Text>
        </Card>
      </TouchableOpacity>
    </View>
  );

  return (
    <View style={{ flex: 1, flexGrow: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: 'green'}}>
      <Text>Placares</Text>
      <FlatList
        style={{width:'100%'}}
        data={data}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
}

export default Boards;
