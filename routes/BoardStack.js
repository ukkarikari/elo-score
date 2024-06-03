import { createStackNavigator } from '@react-navigation/stack';
import BoardList from '../screens/BoardList'
import Board from '../screens/Board';
import Player from '../screens/Player';
import AddBoard from '../screens/AddBoard'
import AddGame from '../screens/AddGame';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { Card, Avatar } from 'react-native-paper';

const Stack = createStackNavigator();

export default function BoardStack({navigation: {navigate}}) {
  return (
    <Stack.Navigator>
      <Stack.Screen name="BoardList" component={BoardList} options={{
        headerLeft: null,

        headerRight: () => {
          return (
            <TouchableOpacity onPress={() => navigate('AddBoard')}>
              <Card style={{ marginHorizontal: 20 }}>
                <Avatar.Icon size={40} icon='plus' />
              </Card>
            </TouchableOpacity>
          );
        }
      }}/>
      <Stack.Screen name="Board" component={Board}/>
      <Stack.Screen name="AddBoard" component={AddBoard}></Stack.Screen>
      <Stack.Screen name="Player" component={Player}></Stack.Screen>
      <Stack.Screen name="AddGame" component={AddGame}></Stack.Screen>
    </Stack.Navigator>
  );
}


