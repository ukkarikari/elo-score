import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Text, Button, useTheme } from 'react-native-paper';

function Auth({navigation: {navigate}}) {

  // colors imported from our theme at shared/theme.js!
  const { colors } = useTheme();

  return (
  <View style={[styles.container, {backgroundColor: colors.background}]}>
      <Text 
        variant='headlineSmall'
        style={{ color: colors.secondary }}
      >
      Home Screen
      </Text>

      <Button 
          mode="contained-tonal"
          textColor={colors.primary}
          onPress={() => navigate('AppTabs')}
      >
      ACCESS
      </Button>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  alignItems: 'center',
  justifyContent: 'center',
  }
});

export default Auth;
