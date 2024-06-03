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
  const {games, updateGame} = useContext(StorageContext)

  const handleRegister = () => {
    console.log(route.params)
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