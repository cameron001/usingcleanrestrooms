import React from "react";
import { render, fireEvent, screen } from "@testing-library/react";
import HomeScreen from './HomeScreen.js';
import ReviewScreen from './ReviewScreen';
import { NavigationContainer } from "@react-navigation/native";
import AppNavigator from './App';


jest.mock('react-native/Libraries/Animated/NativeAnimatedHelper');


test("Review page for SRC appears when a marker is clicked", () => {
    // const component = (
    //     <NavigationContainer>
    //       <AppNavigator />
    //     </NavigationContainer>
    //   );

    
   render(<AppNavigator />);
   render(<HomeScreen />)
   navigation.navigate('Reviews', {name: 'SRC'})
   
   const linkElement = screen.getByText("Accessible");
   expect(linkElement).toBeOnTheScreen();
  
  
});


test("review screen appears", () => {
   render(<ReviewScreen />);


   const revText = screen.getByText("Accessible");
   expect(revText).toBeInTheDocument();
});
