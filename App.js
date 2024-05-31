import 'react-native-gesture-handler';
import React from "react";
import { NavigationContainer } from '@react-navigation/native';

import Navigator from './routes/AppStack'

export default function App() {
  return (
    <NavigationContainer>{
      <Navigator/>
    }</NavigationContainer>
  );
}