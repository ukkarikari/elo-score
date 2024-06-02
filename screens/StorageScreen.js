import React, { useState, useContext } from 'react';
import { View, TextInput, Button, StyleSheet } from 'react-native';
import { StorageContext } from '../shared/StorageContext';

const StorageScreen = () => {
  const [id, setId] = useState('');
  const [name, setName] = useState('');
  const [score, setScore] = useState('');
  const { savePlayer, players, clearPlayers } = useContext(StorageContext);

  const handleSave = () => {
      const newPlayer = {
        id,
        name,
        score: parseInt(score, 10),
      };
      savePlayer(newPlayer);
  };

  const handleDebugPrintList = () => {
    console.log('printing player list...');
    console.log('player list:', JSON.stringify(players, null, 2));
  };

  const handleClearPlayers = () => {
    clearPlayers();
  };


  return (
    <View style={styles.container}>

      <TextInput
        style={styles.input}
        value={id}
        onChangeText={setId}
        placeholder='ID'
        keyboardType='numeric'
      />

      <TextInput
        style={styles.input}
        value={name}
        onChangeText={setName}
        placeholder='NAME'
      />

      <TextInput
        style={styles.input}
        value={score}
        onChangeText={setScore}
        placeholder='SCORE'
        keyboardType='numeric'
      />

     <Button title="REGISTER PLAYER" onPress={handleSave} />

     <Button title="debugPrintPlayerList" onPress={handleDebugPrintList} />
     <Button title="debugClearPlayerList" onPress={clearPlayers} />
    </View>
  );
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'center',
		padding: 16,
	},
	input: {
		height: 40,
		borderColor: 'gray',
		borderWidth: 1,
		marginBottom: 12,
		paddingHorizontal: 8,
	},
});

export default StorageScreen;  
