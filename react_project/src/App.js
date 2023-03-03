import './App.css';
import React, { useState } from "react";
import { View, Text, StyleSheet, } from 'react-native';
import HomeScreen from './HomeScreen.js';
import ReviewScreen from './ReviewScreen.js';

// Navigation import
import { NavigationContainer } from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Reviews" component={ReviewScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default App;

