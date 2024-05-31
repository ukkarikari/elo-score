import React from 'react';
import { View, Text} from 'react-native';

function Boards({navigation: {navigate}}) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Board Screen</Text>
    </View>
  );
}

export default Boards;
