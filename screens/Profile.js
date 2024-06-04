import React, {useEffect, useState, useContext} from 'react';
import { View } from 'react-native';
import { Avatar, Button, Text, useTheme } from 'react-native-paper';
import styles from '../shared/styles';
import { StorageContext } from '../shared/StorageContext';

const ProfilePage = () => {
  const theme = useTheme();
  const [profilePicture, setProfilePicture] = useState(null);

  const {loggedUser} = useContext(StorageContext)

  useEffect(() => {

    const profilePictures = [
      require('../assets/pfps/pfp1.jpg'),
      require('../assets/pfps/pfp2.jpg'),
      require('../assets/pfps/pfp3.jpg'),
    ];

    const randIndex = Math.floor(Math.random() * profilePictures.length);
    setProfilePicture(profilePictures[randIndex]);
  }, []);

  return (
    <View style={[styles.container, { backgroundColor: theme.colors.background }]}>
      <View style={[styles.container, { backgroundColor: theme.colors.surface }]}>
        <Avatar.Image size={100} source={profilePicture} />
        <View style={ {backgroundColor: theme.colors.surface, width: '100%', margin: '5%'}}>
          <Text variant='titleLarge'>{loggedUser.username}</Text>
          <Text variant='bodyLarge'>ID:{loggedUser.id}</Text>
        </View>
      </View>

    </View>
  );
};

export default ProfilePage;
