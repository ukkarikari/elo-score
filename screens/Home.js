import React, { useContext } from 'react';
import { View } from 'react-native';
import { Text, Button, useTheme, Card, TouchableRipple } from 'react-native-paper';
import { StorageContext } from '../shared/StorageContext';

function HomeScreen({navigation: {navigate}}) {
  const {colors} = useTheme();
  const {loggedUser, players} = useContext(StorageContext)

  console.log(loggedUser)
  return (
  <TouchableRipple 
    style={{ flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: colors.background }}
    rippleColor={colors.primary}
    onPress={ () => console.log('weeee')}
  >
      <Card style={{width: '80%', padding: 20}}>
        <Card.Title title={<Text variant='titleLarge'>Olá, {loggedUser.username}!</Text>}/>
        
      </Card>
    </TouchableRipple>
  );
}

export default HomeScreen;
