import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const Card = ({title,iconName}) => {
  return (
    <TouchableOpacity style={styles.cardContainer}>
      <View style={styles.cardContent}>
        <Icon name={iconName} size={30} color="#fff" />
        <Text style={styles.cardHeading}> {title} </Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  cardContainer: {
    flexDirection:'column',
    justifyContent:'center',
    alignItems:'center',
    backgroundColor: '#007bff',
    minHeight:200,
    width:200,
    borderRadius: 10,
    padding: 16,
    margin: 16,
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
});

export default Card;
