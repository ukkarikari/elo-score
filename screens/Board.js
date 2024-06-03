import React, { useContext } from 'react';
import { View, TouchableOpacity } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
import styles from '../shared/styles';
import { StorageContext } from '../shared/StorageContext';

import { Avatar, Button, Card, Text } from 'react-native-paper';

const PodiumIcon = (place) =>{
  const icon = 'checkbox-blank-circle'

  if(place==1) icon = 'podium-gold'
  else if(place==1) icon = 'podium-silver'
  else if(place==1) icon = 'podium-bronze'
  const LeftContent = props =>{console.log(props); return <Avatar.Icon {...props} icon={icon} />} 

  return LeftContent
}

const LeftContent = props => { return<Avatar.Icon {...props} icon="checkbox-blank-circle" />}

function Board({ navigation: { navigate }, route }) {
  const {players} = useContext(StorageContext)

  const renderItem = ({ item }) => (
    <View>
      <TouchableOpacity style={[styles.container, { width: '100%' }]} onPress={() => { navigate('Player', { text: item.title }) }}>
        <Card style={{width: '100%', margin:2}}>
          <Card.Title title={players.find(obj => obj.id === item.id).name} left={LeftContent} right={()=><Text style={{marginHorizontal:20}}>{item.score}</Text>}/>
        </Card>
      </TouchableOpacity>
    </View>
  );

  return (
    <View style={{ flex: 1, flexGrow: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: 'green' }}>
      <Text variant='titleLarge'>{route.params.name}</Text>
      <FlatList
        style={{ width: '100%', padding:10 }}
        data={route.params.players.sort((a, b) => b.score - a.score)}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
}

export default Board;
