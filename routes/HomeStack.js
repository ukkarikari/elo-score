import { createStackNavigator } from '@react-navigation/stack';
import Home from '../screens/Home'
import Settings from '../screens/Settings';
import { Avatar, Card } from 'react-native-paper';
import { TouchableOpacity } from 'react-native-gesture-handler';


const Stack = createStackNavigator();

export default function HomeStack({ navigation: { navigate } }) {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Elo Score" component={Home} options={{
        headerLeft: null,
        headerRight: () => {
          return (
            <TouchableOpacity onPress={() => navigate('Settings')}>
              <Card style={{ marginHorizontal: 20 }}>
                <Avatar.Icon size={40} icon='cog' />
              </Card>
            </TouchableOpacity>
          );
        }
      }} />
      <Stack.Screen name="Settings" component={Settings}></Stack.Screen>
    </Stack.Navigator>
  );
}
