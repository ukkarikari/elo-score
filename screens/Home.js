import React from 'react';
import { View } from 'react-native';
import { Text, Button, useTheme } from 'react-native-paper';

function HomeScreen({navigation: {navigate}}) {
  const {colors} = useTheme();
  return (
  <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: colors.background }}>
      <Text>Home Screen</Text>
    </View>
  );
}

export default HomeScreen;
