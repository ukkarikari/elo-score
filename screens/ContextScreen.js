import React, { useContext } from "react";
import { View, Text, StyleSheet, FlatList } from 'react-native';
import { StorageContext } from "../shared/StorageContext";
import { Card, Title, Paragraph } from 'react-native-paper';


const ContextScreen = () => {
const { players } = useContext(StorageContext);

const renderPlayer = ( player ) => (
  <Card key={player.id} style={styles.card}>
    <Card.Content>
        <Title>ID: {player.id}</Title>
        <Title>NAME: {player.name} </Title>
    </Card.Content>
  </Card>
  );

    
    return (
      <View style={styles.container}>
        <Text style={styles.text}> PLAYERS: </Text>
        <View style={styles.cardsContainer}>
          {players.map(renderPlayer)}
        </View>
      </View>
    );
  };


  const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
		padding: 16,
	},
	text: {
		fontSize: 18,
		marginBottom: 12,
	},
	data: {
		fontSize: 24,
		fontWeight: 'bold',
	},
  title: {
    fontSize: 16,
  },
});

export default ContextScreen;
