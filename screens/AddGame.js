import React, { useContext, useState } from 'react';
import { View } from 'react-native';
import { Card, TextInput, Text, Button, useTheme } from 'react-native-paper';
import styles from '../shared/styles';
import { StorageContext } from '../shared/StorageContext';

const AddPlayer = ({route}) => {
  const [result, setResult] = useState('')
  const [player1, setPlayer1] = useState('')
  const [player2, setPlayer2] = useState('')


  const { colors } = useTheme();
  const {games, updateGame, players} = useContext(StorageContext)

  const handleRegister = () => {
    const gamePlayers =route.params.players

    if(player1!='' && player2!='' && result!=''){
      const player1id = players.find(obj=>obj.username==player1).id
      const player2id = players.find(obj=>obj.username==player2).id
      console.log(player1id, player2.id)
      gamePlayers.forEach(obj =>{
        if(obj.id == player1id) obj.score += parseInt(result)
        if(obj.id == player2id) obj.score -= parseInt(result)
      })
      console.log(gamePlayers)
      updateGame(route.params.id, {id: route.params.id, name:route.params.name, players: gamePlayers})
    }
  }

  return (

    <View style={styles.container}>
      <Card style={{ width: '80%', padding: 20 }}>

        <TextInput
          mode='outlined'
          label={'player 1'}
          value={player1}
          onChangeText={(text) => { setPlayer1(text) }}
        />
        <Text variant='bodyLarge'>    X</Text>
        <TextInput
          mode='outlined'
          label={'player 2'}
          value={player2}
          onChangeText={(text) => { setPlayer2(text) }}
        />
        <Text variant='bodyLarge'>    </Text>
        <TextInput
          mode='outlined'
          label={'result'}
          value={result}
          onChangeText={(text) => { setResult(text) }}
        />
        <Text variant='bodyLarge'>    </Text>
        <Button
          mode="contained-tonal"
          textColor={colors.primary}
          onPress={handleRegister}
        >
          Registrar
        </Button>
      </Card >
    </View >
  );
};

export default AddPlayer;