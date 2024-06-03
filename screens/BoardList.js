import React, { useContext } from 'react';
import { View, TouchableOpacity } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
import styles from '../shared/styles';
import { StorageContext } from '../shared/StorageContext';

import { Avatar, Button, Card, Text } from 'react-native-paper';

const LeftContent = props => <Avatar.Icon {...props} icon="podium" />


function BoardList({ navigation: { navigate } }) {
  const {games} = useContext(StorageContext)

  const data = [
    { id: '1', name: 'Board 1' },
  ]; //test use files and stateeitem.title

  const renderItem = ({ item }) => (
    <View>
      <TouchableOpacity style={[styles.container, { width: '100%' }]} onPress={() => { navigate('Board', { text: item.title }) }}>
        <Card style={{width: '100%'}}>
          <Card.Title title={item.name} subtitle="Card Subtitle" left={LeftContent} />
          <Card.Content>
            <Text variant="titleLarge">Card title</Text>
            <Text variant="bodyMedium">Card content</Text>
          </Card.Content>
          <Card.Cover source={{ uri: 'https://picsum.photos/700' }} />
          <Card.Actions>
            <Button>Cancel</Button>
            <Button>Ok</Button>
          </Card.Actions>
        </Card>
      </TouchableOpacity>
    </View>
  );

  return (
    <View style={{ flex: 1, flexGrow: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: 'green' }}>
      <Text variant='titleLarge'>Placares</Text>
      <FlatList
        style={{ width: '100%' }}
        data={games}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
}

export default BoardList;
