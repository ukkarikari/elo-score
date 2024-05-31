import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { BottomNavigation, Text } from 'react-native-paper'


import Home from '../screens/Home'
import BoardStack from './BoardStack';
import Profile from '../screens/Profile';

const Tab = createBottomTabNavigator();

function AppTabs() {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Placares" component={BoardStack} options={{
        headerShown: false,
      }}/>
      <Tab.Screen name="Perfil" component={Profile} />
    </Tab.Navigator>
  );
}

export default AppTabs;
