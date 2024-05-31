import React from 'react';
import { View, Text, Button} from 'react-native';

function Boards({navigation: {navigate}}) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Board Screen</Text>
      <Button title='go to there' onPress={() => navigate('Home')}></Button>
    </View>
  );
}

export default Boards;
