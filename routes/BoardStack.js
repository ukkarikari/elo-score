import { createStackNavigator } from '@react-navigation/stack';
import Boards from '../screens/Boards'

const Stack = createStackNavigator();

export default function BoardStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Board" component={Boards} options={{
        headerLeft: null
      }}/>
    </Stack.Navigator>
  );
}
