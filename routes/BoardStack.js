import { createStackNavigator } from '@react-navigation/stack';
import BoardList from '../screens/BoardList'
import Board from '../screens/Board';
import Player from '../screens/Player';

const Stack = createStackNavigator();

export default function BoardStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="BoardList" component={BoardList} options={{
        headerLeft: null
      }}/>
      <Stack.Screen name="Board" component={Board}></Stack.Screen>
      <Stack.Screen name="Player" component={Player}></Stack.Screen>
    </Stack.Navigator>
  );
}
