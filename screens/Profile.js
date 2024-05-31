import React from 'react';
import { View } from 'react-native';
import { Text, useTheme } from 'react-native-paper';


function Profile({navigation: {navigate}}) {
  const { colors } = useTheme();
  return (
  <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: colors.error }}>
      <Text variant='displayMedium'>Profile Screen</Text>
    </View>
  );
}

export default Profile;
