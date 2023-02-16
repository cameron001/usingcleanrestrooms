import './App.css';
import React, { useState } from "react";
import { Map, Marker } from "pigeon-maps";
import { Button, View, Text, TouchableOpacity, StyleSheet, } from 'react-native';
import HomeScreen from './HomeScreen.js';


// Navigation import
import { NavigationContainer } from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

const Stack = createStackNavigator();

const styles = StyleSheet.create({
  titleText: {
    fontWeight: 'bold',
    fontSize: 50,
    color: '#4287f5',
  },

  reviewText: {
    fontWeight: 'bold',
    fontSize: 20,
  }
})

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



// Shows after marker click
const ReviewScreen = () => {
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text style={styles.titleText}>
        SRC Bathroom Reviews
      </Text>
      <br></br>
      <br></br>
      <Text style={styles.reviewText}>
        John Doe: 4/5
      </Text>
      <br></br>
      <Text style={styles.reviewText}>
        Jane Doe: 5/5
      </Text>
      <br></br>
      <Text style={styles.reviewText}>
        George Hill: 3/5
      </Text>
    </View>
  )
}

export default App;

