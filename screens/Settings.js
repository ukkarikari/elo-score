import React from 'react';
import { View } from 'react-native';
import { Text, Button, useTheme, Card } from 'react-native-paper';

function Settings({ navigation: { navigate } }) {
  const { colors } = useTheme();
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: colors.background }}>
      <Card>
        <Text>Theme Config</Text>
      </Card>
    </View>
  );
}

export default Settings;