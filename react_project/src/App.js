import './App.css';
import React, { useState } from "react";
import HomeScreen from './HomeScreen.js';
import Review from './ReviewScreen.js';
import RiveraReview from './RiveraScreen.js';
import OrbachReview from './OrbachScreen.js';

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
        <Stack.Screen name="Rivera_Reviews" component={RiveraReview} />
        <Stack.Screen name="Orbach_Reviews" component={OrbachReview} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default App;

