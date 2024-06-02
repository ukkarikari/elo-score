import react from 'react';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Avatar, BottomNavigation, Card, Text } from 'react-native-paper'


import HomeStack from './HomeStack'
import BoardStack from './BoardStack';
import Profile from '../screens/Profile';

const Tab = createBottomTabNavigator();

function AppTabs() {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarStyle: {
          height: 80
        }
      }}
    >
      <Tab.Screen name="Home" component={HomeStack} options={
        {
          headerShown: false,
          tabBarIcon: ()=> <Avatar.Icon icon='home' size={50}/>
        }
      }/>
      <Tab.Screen name="Placares" component={BoardStack} options={
        {
          headerShown: false,
          tabBarIcon: ()=> <Avatar.Icon icon='podium' size={50}/>
        }
      }/>
      <Tab.Screen name="Perfil" component={Profile} options={
        {
          tabBarIcon: ()=> <Avatar.Icon icon='account' size={50}/>
        }
      }/>
    </Tab.Navigator>
  );
}

export default AppTabs;
