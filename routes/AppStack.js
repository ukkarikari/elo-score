import { createStackNavigator } from '@react-navigation/stack';
import Auth from '../screens/Auth'
import AppTabs from './AppTabs'

const Stack = createStackNavigator();

export default function AppStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Auth" component={Auth} />
      <Stack.Screen name="AppTabs" component={AppTabs} />
    </Stack.Navigator>
  );
}
