import React from "react";
import { render, fireEvent, screen, waitFor } from "@testing-library/react";
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

test("Review Screen shows correct header with SRC Marker click", () => {
    const home = renderer.create(<HomeScreen/>);

    setTimeout(() => {
        const srcMarker = home.root.findByProps({ testID: "srcMarker" });
        srcMarker.props.onClick();

        waitFor(() => getByText("SRC Restroom Reviews"));
        const reviewHeader = getByText("SRC Restroom Reviews");
        expect(reviewHeader).toBeTruthy();

        done();
    }, 100);
});

test("Review Screen shows correct header with Rivera Library Marker click", () => {
    const home = renderer.create(<HomeScreen/>);

    setTimeout(() => {
        const srcMarker = home.root.findByProps({ testID: "riveraMarker" });
        srcMarker.props.onClick();

        waitFor(() => getByText("Rivera Library Restroom Reviews"));
        const reviewHeader = getByText("Rivera Library Restroom Reviews");
        expect(reviewHeader).toBeTruthy();

        done();
    }, 100);
});