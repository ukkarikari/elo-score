import React, { createContext, useState, useEffect } from "react";
import AsyncStorage from '@react-native-async-storage/async-storage'

const StorageContext = createContext();

const StorageProvider = ({ children }) => {
  const [players, setPlayers] = useState(null);

  useEffect( () => {
  
      const loadPlayers = async () => {
        try {
          const value = await AsyncStorage.getItem('@players');

          if (value !== null) {
            setPlayers(JSON.parse(value));
          } else {
            setPlayers([]);
          }

        } catch (e) {
            console.error(e);
        }
    };

  loadPlayers();
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

  return (
      <StorageContext.Provider value={{ players, savePlayer }}>
        {children}
      </StorageContext.Provider>
  );
};

export { StorageContext, StorageProvider };
