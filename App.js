import 'react-native-gesture-handler';
import React from "react";
import { NavigationContainer} from '@react-navigation/native';
import { PaperProvider, Button } from 'react-native-paper'


import Navigator from './routes/AppStack'

// global app theme
import theme from './shared/theme';


export default function App() {
  return (
  <PaperProvider theme={theme}>
    <NavigationContainer theme={theme}>
      <Navigator />
    </NavigationContainer>
  </PaperProvider>
  );
}
