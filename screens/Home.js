import React from 'react';
import { View, Text, Button } from 'react-native';

function HomeScreen({navigation: {navigate}}) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Home Screen</Text>
    </View>
  );
}

export default HomeScreen;
