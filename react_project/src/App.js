import './App.css';
import React, { useState } from "react";
import HomeScreen from './HomeScreen.js';
import Review from './ReviewScreen.js';

// Navigation import
import { NavigationContainer } from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} options={{headerShown: false}} />
        <Stack.Screen name="Reviews" component={Review} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default App;

