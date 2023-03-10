import React from "react";
import { render, fireEvent, screen } from "@testing-library/react";
import { MapView, Marker } from 'pigeon-maps';
import HomeScreen from './HomeScreen.js';
import ReviewScreen from "./ReviewScreen.js";
import renderer from 'react-test-renderer';

test("Map header appears", () => {
    // render the component on virtual dom
    render(<HomeScreen />);
    
    //select the elements you want to interact with
    const linkElement = screen.getByText("UCR Restrooms Map");

    expect(linkElement).toBeInTheDocument();
});

test("Map page renders correctly", () => {
    const map = renderer.create(<HomeScreen/>).toJSON();
    
    // checks if the rendered map homepages matches the .JSON snapshot file
    expect(map).toMatchSnapshot();
});

test("Description initially non-existent", () => {
    const {queryByTestId} = render(<HomeScreen/>);
    const description = queryByTestId('descID');
    expect(description).toBeNull();
});

test('SRC marker displays properly', () => {
    const {queryByTestId} = render(<HomeScreen/>);
    
    // Without timer, Jest will test markers before it's fully rendered
    setTimeout(() => {
        const markerComponent = queryByTestId('srcMarker');
        expect(markerComponent).not.toBeNull();
        done();
      }, 100);
});

test('Rivera Library marker displays properly', () => {
    const {queryByTestId} = render(<HomeScreen/>);
    
    // Without timer, Jest will test markers before it's fully rendered
    setTimeout(() => {
        const markerComponent = queryByTestId('riveraMarker');
        expect(markerComponent).not.toBeNull();
        done();
      }, 100);
});







  




