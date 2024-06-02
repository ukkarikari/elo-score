import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Text, Button, useTheme, Card, TextInput } from 'react-native-paper';

function Auth({ navigation: { navigate } }) {

  // colors imported from our theme at shared/theme.js!
  const { colors } = useTheme();

  const handleSave = () => {
    const newPlayer = {
      id,
      name,
      score: parseInt(score, 10),
    };
    savePlayer(newPlayer);
};

  return (
    <View style={[styles.container, { backgroundColor: colors.background }]}>

      <Card style={{ width: '80%' }}>
        <Card.Title title={
          <Text
            variant='headlineLarge'
            style={{ color: colors.secondary }}
          >
            Elo Score
          </Text>
        } />
        <Card.Content>
          <TextInput mode='outlined' label={'username'}/>
          <TextInput mode='outlined' label={'senha'}/>
        </Card.Content>
        <Card.Actions>
          <Button
            mode="contained-tonal"
            textColor={colors.primary}
            onPress={() => navigate('AppTabs')}
          >
            Log In
          </Button>
          <Button
            mode="contained-tonal"
            textColor={colors.primary}
            onPress={() => navigate('AppTabs')}
          >
            Registrar
          </Button>
        </Card.Actions>
      </Card>


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
