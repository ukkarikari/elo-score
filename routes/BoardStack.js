import { createStackNavigator } from '@react-navigation/stack';
import Boards from '../screens/Boards'

const BStack = createStackNavigator();

export default function BoardStack() {
  return (
    <BStack.Navigator>
      <BStack.Screen name="Board" component={Boards} />
    </BStack.Navigator>
  );
}
