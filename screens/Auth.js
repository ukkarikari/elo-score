import React, { useState, useContext } from 'react';
import { View, StyleSheet } from 'react-native';
import { Text, Button, useTheme, Card, TextInput } from 'react-native-paper';
import { StorageContext } from "../shared/StorageContext";

function Auth({ navigation: { navigate } }) {
  const { savePlayer, players} = useContext(StorageContext);
  // colors imported from our theme at shared/theme.js!
  const { colors } = useTheme();
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [invalidUsername, setInvalidUsername] = useState(false)
  const [wrongPassword, setWrongPassword] = useState(false)
  const [blankPassword, setBlankPassword] = useState(false)
  const [blankUsername, setBlankUsername] = useState(false)

  const checkLogin = () => {
    const player = {
      username,
      password
    };
    if (players.some((obj) => obj.username == player.username && obj.password == player.password))
      navigate('AppTabs')
    else if (players.some((obj) => obj.name == player.username))
      setWrongPassword(true)
    else{
      setInvalidUsername(true)
    }

  }

  const handleRegister = () => {
    const player = {
      username,
      password
    };
    if (!players.some((obj) => obj.name == player.username))
      if(username=='')
        setBlankUsername(true)
      if(password=='')
        setBlankPassword(true)
      else{
        savePlayer(player)
        navigate('AppTabs')
      }
        

  }

  return (
    <View style={[styles.container, { backgroundColor: colors.background }]}>

      <Card style={{ width: '80%' }}>
        <Card.Title title={
          <Text
            variant='headlineLarge'
            style={{ color: colors.secondary }}
          >
            Elo Score
          </Text>
        } />
        <Card.Content>
          <TextInput
            mode='outlined'
            label={(invalidUsername? 'não registrado':(blankUsername? 'username vazio':'username'))}
            value={username}
            onChangeText={(text) => {setInvalidUsername(false); setBlankUsername(false); setUsername(text)}}
            error={invalidUsername|| blankUsername}
          />
          <TextInput
            mode='outlined'
            label={(wrongPassword?'senha incorreta':(blankPassword? 'senha vazia':'senha'))}
            value={password}
            onChangeText={(text) => {setWrongPassword(false); setBlankPassword(false); setPassword(text)}}
            error={wrongPassword||blankPassword}
          />
        </Card.Content>
        <Card.Actions>
          <Button
            mode="contained-tonal"
            textColor={colors.primary}
            onPress={checkLogin}
          >
            Log In
          </Button>
          <Button
            mode="contained-tonal"
            textColor={colors.primary}
            onPress={handleRegister}
          >
            Registrar
          </Button>
        </Card.Actions>
      </Card>


    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  }
});

export default Auth;
