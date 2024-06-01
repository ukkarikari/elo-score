import React from 'react';
import { View, TouchableOpacity } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
import styles from '../shared/styles';

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

  const player = {
    name: 'Player genérico'
    
  }

  const data = [
    { id: '1', title: 'Player 1', score: 10},
    { id: '2', title: 'Player 2', score: 12},
    { id: '3', title: 'player 3', score: 4},
    { id: '4', title: 'Player 4', score: 3},
    { id: '5', title: 'Player 5', score: 0},
  ];

  

  const renderItem = ({ item }) => (
    <View>
      <TouchableOpacity style={[styles.container, { width: '100%' }]} onPress={() => { navigate('Player', { text: item.title }) }}>
        <Card style={{width: '100%'}}>
          <Card.Title title={item.title} left={LeftContent} right={()=><Text>{item.score}</Text>}/>
        </Card>
      </TouchableOpacity>
    </View>
  );

  return (
    <View style={{ flex: 1, flexGrow: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: 'green' }}>
      <Text variant='titleLarge'>{route.params.text}</Text>
      <FlatList
        style={{ width: '100%' }}
        data={data}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
}

export default Board;
