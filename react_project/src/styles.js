const StyleSheet = {
    descriptionStyle:{
        backgroundColor: 'lightskyblue', 
        position: 'absolute', 
        top: '160px', 
        left: '25px'
    },
    ButtonContainer: {
      flex: 1,
      flexDirection: 'row',
      justifyContent: 'flex-end',
      alignItems: 'center',
      paddingRight: 20,
    },
    AddReviewButton:{
      marginTop:-210,
      position: 'absolute',
      width: 130,
      height: 70,
      backgroundColor:'#4487f2',
      borderRadius:10,
      borderWidth: 3,
      borderColor: '#f5db36'
    },
    AddReviewText:{
        color:'#fff',
        textAlign:'center',
        fontWeight: 'bold',
        fontSize: 18,
        paddingLeft : 10,
        paddingRight : 10,
        paddingTop: 9
    },
    Legend:{
        marginRight:20,
        marginLeft:20,
        marginTop:15,
        width: 160,
        height: 140,
        backgroundColor:'#f8faf7',
        borderRadius:10,
        borderWidth: 3
    },
    LegendText:{
        color:'#353634',
        textAlign:'center',
        fontWeight: 'bold',
        fontSize: 18,
        paddingLeft : 10,
        paddingRight : 10,
        paddingTop: 9
    },
    titleText: {
        fontWeight: 'bold',
        fontSize: 50,
        color: '#4287f5',
    },
    reviewText: {
        fontWeight: 'bold',
        fontSize: 20,
    }
  };

  export default StyleSheet;