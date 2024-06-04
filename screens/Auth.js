import React, { useState, useContext } from 'react';
import { View, StyleSheet } from 'react-native';
import { Text, Button, useTheme, Card, TextInput, ActivityIndicator } from 'react-native-paper';
import { MaterialIcons } from "@expo/vector-icons";
import { StorageContext } from "../shared/StorageContext";
import { SHA256 } from 'crypto-js';

function Auth({ navigation: { navigate } }) {
  const { savePlayer, players, setLoggedUser } = useContext(StorageContext);
  // colors imported from our theme at shared/theme.js!
  const { colors } = useTheme();
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [invalidUsername, setInvalidUsername] = useState(false)
  const [wrongPassword, setWrongPassword] = useState(false)
  const [blankPassword, setBlankPassword] = useState(false)
  const [blankUsername, setBlankUsername] = useState(false)
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);

  const checkLogin = () => {
    const player = {
      username,
      password
    };
    if (players.some((obj) => obj.username == player.username && obj.password == SHA256(player.password).toString())){
      setLoggedUser(players.find((obj)=>obj.username == username))
      navigate('AppTabs')
    }
      
    else if (players.some((obj) =>{
      console.log(obj.password);
      console.log(SHA256(player.password));
      obj.username == player.username} )){
      setWrongPassword(true)
  
    }
    else{
      setInvalidUsername(true)
    }
    
  }

  const handleRegister = () => {
    const player = {
      username,
      password
    };
    if (!players.some((obj) => obj.username == player.username))
      if(username=='')
        setBlankUsername(true)
      if(password=='')
        setBlankPassword(true)
      else{
        let maxId = 0;
        players.forEach(element => {
          if(element.id>maxId) maxId=element.id
        });
        player.id = maxId+1
        player.password = SHA256(player.password).toString()
        savePlayer(player)
        setLoggedUser({username: player.username, id: player.id})
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
            secureTextEntry={!isPasswordVisible}
          />
        </Card.Content>
        <Card.Actions>
          <Button
            icon={() => <MaterialIcons name="login" size={24} color="white"/>}
            mode="contained-tonal"
            textColor={colors.primary}
            onPress={checkLogin}
          >
            Log In
          </Button>
          <Button
            icon={() => <MaterialIcons name="person-add" size={24} color="white" />}
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
