import React from 'react';
import { View, Text } from 'react-native';

const Board = ({route}) => {
  return (
    
    <View>
      <Text>{route.params.text}</Text>
    </View>
  );
};

export default Board;