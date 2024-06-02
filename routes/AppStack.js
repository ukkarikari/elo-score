import { createStackNavigator } from '@react-navigation/stack';
import Auth from '../screens/Auth'
import AppTabs from './AppTabs'

import StorageScreen from '../screens/StorageScreen';
import ContextScreen from '../screens/ContextScreen'; 
import { StorageProvider } from '../shared/StorageContext';

const Stack = createStackNavigator();

export default function AppStack() {
  return (
  <StorageProvider>
  <Stack.Navigator screenOptions={{headerShown:false}}>
      <Stack.Screen name="Auth" component={Auth} />
      <Stack.Screen name="AppTabs" component={AppTabs} options={{
        headerShown: false
      }}/>
    </Stack.Navigator>
  </StorageProvider>
  );
}
