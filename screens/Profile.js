import React from 'react';
import { View } from 'react-native';
import { Avatar, Button, Text, useTheme } from 'react-native-paper';
import styles from '../shared/styles';

const ProfilePage = () => {
  const theme = useTheme();

  return (
    <View style={[styles.container, { backgroundColor: theme.colors.background }]}>
      <View style={[styles.container, { backgroundColor: theme.colors.surface }]}>
        <Avatar.Image size={100} source={require('../assets/favicon.png')} />

        <View style={ {backgroundColor: theme.colors.surface, width: '100%', margin: '5%'}}>
          <Text variant='titleLarge'>Nome</Text>
          <Text variant='bodyLarge'>bio</Text>
        </View>


        <Button mode="contained" style={styles.button}>Edit Profile</Button>
      </View>

    </View>
  );
};

export default ProfilePage;
