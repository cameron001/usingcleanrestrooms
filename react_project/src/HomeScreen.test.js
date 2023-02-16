import React from "react";
import { render, fireEvent, screen } from "@testing-library/react";
import HomeScreen from './HomeScreen.js';


test("map header appears", () => {
    // render the component on virtual dom
    render(<HomeScreen />);
    
    //select the elements you want to interact with
    expect(screen.getByText("UCR Bathrooms on Campus"));
    
    
    
});
