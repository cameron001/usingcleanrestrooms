import React, { useState } from "react";
import { View, Text, StyleSheet } from 'react-native';

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

// Shows after marker click
const ReviewScreen = ({navigation, route}) => {
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text style={styles.titleText}>
        {route.params.name} Restroom Reviews
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
};

export default ReviewScreen;