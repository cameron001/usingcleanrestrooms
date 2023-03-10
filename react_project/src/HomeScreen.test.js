import React from "react";
import { render, fireEvent, screen } from "@testing-library/react";
import HomeScreen from './HomeScreen.js';
import ReviewScreen from "./ReviewScreen.js";
import renderer from 'react-test-renderer';
import { Linking } from 'react-native';

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

test('AddReview button is rendered', () => {
    const {queryByTestId} = render(<HomeScreen/>);
    
    // Without timer, Jest will test markers before it's fully rendered
    setTimeout(() => {
        const buttonComponent = queryByTestId('addReviewButton');
        expect(buttonComponent).not.toBeNull();
        done();
      }, 100);
});

test('AddReview button text is correct', () => {
    const {queryByTestId} = render(<HomeScreen/>);
    
    // Without timer, Jest will test markers before it's fully rendered
    setTimeout(() => {
        const buttonComponent = queryByTestId('addReviewButton');
        expect(buttonComponent).toBe('Add Review');
        done();
      }, 100);
});

test('Clicking AddReview button links to Google Form', () => {
    const {queryByTestId} = render(<HomeScreen/>);
    const mockOpenURL = jest.fn();
    Linking.openURL = mockOpenURL;
    
    // Without timer, Jest will test markers before it's fully rendered
    setTimeout(() => {
        const buttonComponent = queryByTestId('addReviewButton');
        fireEvent.press(buttonComponent);

        expect(mockOpenURL).toHaveBeenCalledWith('https://docs.google.com/forms/d/e/1FAIpQLSeNE9xEg8ycomtBvPViyPdZmnM_iGrEPQN1yvOGLMJbyvi7MA/viewform');
        done();
      }, 100);
});








  




