import React, { useContext, useState } from 'react';
import { View } from 'react-native';
import { Button, Card, TextInput, useTheme } from 'react-native-paper';
import { StorageContext } from '../shared/StorageContext';

const AddBoard = ({ navigation: { navigate } }) => {
  const { games, saveGame, clearGames } = useContext(StorageContext)
  const [boardName, setBoardName] = useState('')
  const [nameTaken, setNameTaken] = useState(false)
  const [blankBoardName, setBlankBoardName] = useState(false)
  const { colors } = useTheme();

  const handleRegister = () => {
    let newBoard = {
      name: boardName,
      players: []
    }
    if (boardName != '')
      if(!games.some((obj)=>obj.name == boardName)){
        let maxId = 1;
        games.forEach(element => {
          if(element.id > maxId)
            maxId = element.id
        });
        newBoard.id = maxId + 1
        saveGame(newBoard)
        navigate('BoardList')
      }
      else
        setNameTaken(true)
    else
      setBlankBoardName(true)
  }
  return (

    <View>
      <Card>
        <Card.Title title="Registrar novo Placar" />
        <Card.Content>
          <TextInput
            mode='outlined'
            label={blankBoardName ? 'nome vazio' : (nameTaken? 'nome repetido': 'nome do placar') }
            value={boardName}
            onChangeText={(text) => { setBlankBoardName(false); setNameTaken(false); setBoardName(text) }}
            error={blankBoardName || nameTaken}
          />
        </Card.Content>
        <Card.Actions>
          <Button
            mode="contained-tonal"
            textColor={colors.primary}
            onPress={handleRegister}
          >
            Registrar
          </Button>

          <Button
            mode="contained-tonal"
            textColor={colors.primary}
            onPress={clearGames}
          >
            nuclear
          </Button>
        </Card.Actions>
      </Card>
    </View>
  );
};

export default AddBoard;