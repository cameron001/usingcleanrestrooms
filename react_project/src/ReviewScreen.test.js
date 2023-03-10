import React from "react";
import { render, fireEvent, screen } from "@testing-library/react";
import HomeScreen from './HomeScreen.js';
import ReviewScreen from "./ReviewScreen.js";
import renderer from 'react-test-renderer';
import { Linking } from 'react-native';

test('SRC marker click navigates to ReviewScreen', () => {
    const {queryByTestId} = render(<HomeScreen/>);
    const mockNavigate = jest.fn();

    // Without timer, Jest will test markers before it's fully rendered
    setTimeout(() => {
        const markerComponent = queryByTestId('srcMarker');
        fireEvent(markerComponent, 'onClick');
        expect(mockNavigate).toHaveBeenCalledWith('Reviews');
        done();
    }, 100);
});

test('Rivera Library marker click navigates to ReviewScreen', () => {
    const {queryByTestId} = render(<HomeScreen/>);
    const mockNavigate = jest.fn();

    // Without timer, Jest will test markers before it's fully rendered
    setTimeout(() => {
        const markerComponent = queryByTestId('riveraMarker');
        fireEvent(markerComponent, 'onClick');
        expect(mockNavigate).toHaveBeenCalledWith('Reviews');
        done();
    }, 100);
});

test('ReviewScreen contains correct headers', () => {
    const {queryByTestId} = render(<HomeScreen/>);
    const mockNavigate = jest.fn();

    // Without timer, Jest will test markers before it's fully rendered
    setTimeout(() => {
        const markerComponent = queryByTestId('srcMarker');
        fireEvent(markerComponent, 'onClick');
        
        const reviews = renderer.create(<ReviewScreen/>).toJSON();
        expect(reviews).toMatchSnapshot();

        done();
    }, 100);
});