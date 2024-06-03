import React, { createContext, useState, useEffect } from "react";
import AsyncStorage from '@react-native-async-storage/async-storage'

const StorageContext = createContext();

const StorageProvider = ({ children }) => {
  const [players, setPlayers] = useState([]);
  const [games, setGames] = useState([]);
  const [loggedUser, setLoggedUser] = useState({username: 'user', id:0})

  useEffect( () => {
  
      const loadStorage = async () => {
        try {
          const playersValue = await AsyncStorage.getItem('@players');
          const gamesValue = await AsyncStorage.getItem('@games');

          if (playersValue !== null) {
            setPlayers(JSON.parse(playersValue));
          } else {
            setPlayers([]);
          }

          if (gamesValue !== null) {
            setPlayers(JSON.parse(gamesValue));
          } else {
            setGames([]);
          }

        } catch (e) {
            console.error(e);
        }
    };

  loadStorage();
  }, []);


  const savePlayer = async (player) => {
    try {
      
      const updatedPlayers = [...players, player];
      await AsyncStorage.setItem('@players', JSON.stringify(updatedPlayers));
      setPlayers(updatedPlayers);

    } catch (e) {
      console.error(e);
    }
  };

  const saveGame = async (game) => {
    try {
      
      const updatedGames = [...games, game];
      await AsyncStorage.setItem('@games', JSON.stringify(updatedGames));
      setGames(updatedGames);

    } catch (e) {
      console.error(e);
    }
  };

  const updateGame = async (id, updatedGameData) => {
    try {
      const storedGamesJSON = await AsyncStorage.getItem('@games');
      let storedGames = [];
      if (storedGamesJSON) {
        storedGames = JSON.parse(storedGamesJSON);
      }
  
      const indexToUpdate = storedGames.findIndex(game => game.id === id);
  
      if (indexToUpdate !== -1) {
        storedGames[indexToUpdate] = { ...storedGames[indexToUpdate], ...updatedGameData };
  
        await AsyncStorage.setItem('@games', JSON.stringify(storedGames));
  
        setGames(storedGames);
      } else {
        console.error(id);
      }
    } catch (error) {
      console.error(error);
    }
  };
  


  const clearPlayers = async () => {
    try {
      await AsyncStorage.removeItem('@players');
      setPlayers([]);
      console.log(' - - - PLAYER DB CLEARED - - - ');
    } catch (e) {
      console.error(e);
    }
  };

  const clearGames = async () => {
    try {
      await AsyncStorage.removeItem('@games');
      setGames([]);
      console.log(' - - - GAMES DB CLEARED - - - ');
    } catch (e) {
      console.error(e);
    }
  };

  return (
      <StorageContext.Provider value={{ players, games, loggedUser, savePlayer, saveGame, updateGame, setLoggedUser, clearPlayers, clearGames }}>
        {children}
      </StorageContext.Provider>
  );
};

export { StorageContext, StorageProvider };
