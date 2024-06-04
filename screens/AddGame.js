import React, { useContext, useState } from 'react';
import { View } from 'react-native';
import { Card, TextInput, Text, Button, useTheme } from 'react-native-paper';
import styles from '../shared/styles';
import { StorageContext } from '../shared/StorageContext';
import { getNewRating } from '../shared/Elo';

const AddPlayer = ({ route, navigation }) => {
  const [result, setResult] = useState('')
  const [player1, setPlayer1] = useState('')
  const [player2, setPlayer2] = useState('')
  const [invalidPlayer1, setInvalidPlayer1] = useState('')
  const [invalidPlayer2, setInvalidPlayer2] = useState('')


  const { colors } = useTheme();
  const { games, updateGame, players } = useContext(StorageContext)

  const handleRegister = () => {
    let gamePlayers = route.params.players

    if (player1 != '' && player2 != '' && result != '') {
      const player1db = players.find(obj => obj.username == player1)
      const player2db = players.find(obj => obj.username == player2)

      if (player1db == undefined)
        setInvalidPlayer1(true)
      if (player2db == undefined)
        setInvalidPlayer2(true)

      if (player1db != undefined && player2db != undefined) {
        const player1id = players.find(obj => obj.username == player1).id
        const player2id = players.find(obj => obj.username == player2).id

        let player1score = 0;
        let player2score = 0;

        gamePlayers.forEach(obj => {
          if (obj.id == player1id) player1score = obj.score 
          if (obj.id == player2id) player2score = obj.score
        })

        gamePlayers.forEach(obj => {
          if (obj.id == player1id) obj.score = getNewRating(parseInt(player1score), parseInt(player2score), parseInt(result))
          if (obj.id == player2id) obj.score = getNewRating(parseInt(player2score), parseInt(player1score), 1-parseInt(result))
        })

        console.log('hi', player1id, gamePlayers)

        updateGame(route.params.id, { id: route.params.id, name: route.params.name, players: gamePlayers })
        navigation.goBack()
      }


    }
  }

  return (

    <View style={styles.container}>
      <Card style={{ width: '80%', padding: 20 }}>

        <TextInput
          mode='outlined'
          label={invalidPlayer1? 'nome invalido':'player 1'}
          value={player1}
          onChangeText={(text) => { setInvalidPlayer1(false); setPlayer1(text) }}
          error={invalidPlayer1}
        />
        <Text variant='bodyLarge'>    X</Text>
        <TextInput
          mode='outlined'
          label={invalidPlayer2? 'nome invalido':'player 2'}
          value={player2}
          onChangeText={(text) => { setInvalidPlayer2(false); setPlayer2(text) }}
          error={invalidPlayer2}
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