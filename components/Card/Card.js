import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const Card = ({title,iconName,colorCode}) => {
  // STYLES
  const styles = StyleSheet.create({
    cardContainer: {
      flexDirection:'column',
      justifyContent:'center',
      alignItems:'center',
      backgroundColor: !colorCode ? "blue":colorCode,
      minHeight:200,
      borderRadius: 10,
      width:150,
      padding: 10,
    },
    cardContent: {
      flexDirection: 'column',
      gap:18,
      alignItems: 'center',
    },
    cardHeading: {
      fontSize: 18,
      color: '#fff',
      marginLeft: 8,
      textAlign:'center'
    },
  });//
  return (
    <TouchableOpacity style={styles.cardContainer}>
      <View style={styles.cardContent}>
        <Icon name={iconName} size={30} color='#FFF' />
        <Text style={styles.cardHeading}> {title} </Text>
      </View>
    </TouchableOpacity>
  );
};



export default Card;
