import React, { useState } from "react";
import { View, Text } from 'react-native';
import styleSheet from './styles.js';

// Shows after marker click
const ReviewScreen = ({navigation, route}) => {
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text style={styleSheet.titleText}>
        {route.params.name} Restroom Reviews
      </Text>
      <br></br>
      <br></br>
      <Text style={styleSheet.reviewText}>
        John Doe: 4/5
      </Text>
      <br></br>
      <Text style={styleSheet.reviewText}>
        Jane Doe: 5/5
      </Text>
      <br></br>
      <Text style={styleSheet.reviewText}>
        George Hill: 3/5
      </Text>
    </View>
  )
};

export default ReviewScreen;