  import React, { useContext } from "react";
  import { View, Text, StyleSheet, FlatList } from 'react-native';
  import { StorageContext } from "../shared/StorageContext";

  const ContextScreen = () => {
    const { players } = useContext(StorageContext);

  const renderItem = ({ item }) => (
  <View style={styles.item}>
        <Text style={styles.title}>ID: {item.id}</Text>
        <Text style={styles.title}>NAME: {item.name}</Text>
        <Text style={styles.title}>SCORE: {item.score}</Text>
      </View>
    );
    
    return (
      <View style={styles.container}>
        <Text style={styles.text}> PLAYERS: </Text>
        {/* <FlatList
            data={players}
            renderItem={renderItem}
            keyExtractor={(item) => item.id.toString()}
        /> */}
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
