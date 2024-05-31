import React from 'react';
import { View, Text, Button } from 'react-native';

function Auth({navigation: {navigate}}) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Home Screen</Text>
      <Button title='go to there' onPress={() => navigate('AppTabs')}></Button>
    </View>
  );
}

export default Auth;
