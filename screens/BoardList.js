import React, { useContext } from 'react';
import { View, TouchableOpacity } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
import styles from '../shared/styles';
import { StorageContext } from '../shared/StorageContext';

import { Avatar, Button, Card, Text, useTheme } from 'react-native-paper';

const LeftContent = props => <Avatar.Icon {...props} icon="podium" />


function BoardList({ navigation: { navigate } }) {
  const {games, updateGame, loggedUser} = useContext(StorageContext)
  const { colors } = useTheme();

  const players = [
    {id:2 , score: 0},

  ]

  const renderItem = ({ item }) => (
    <View>
      <TouchableOpacity style={[styles.container, { width: '100%' }]} onPress={() => { 
        navigate('Board', games.find(obj => obj.id === item.id)) }}>
        <Card style={{width: '100%'}}>
          <Card.Title title={item.name} left={LeftContent} />
          <Card.Cover source={require('../assets/banner.jpg')} />
          <Card.Actions>
          <Button
            mode="contained-tonal"
            textColor={colors.primary}
            onPress={()=>{item.players.push({id: loggedUser.id, score:0});updateGame(item.id, item)}}
            disabled={item.players.find((obj)=> obj.id == loggedUser.id)?true:false}
          >
            Entrar
          </Button>
          </Card.Actions>
        </Card>
      </TouchableOpacity>
    </View>
  );

  return (
    <View style={{ flex: 1, flexGrow: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: colors.backdrop }}>
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
