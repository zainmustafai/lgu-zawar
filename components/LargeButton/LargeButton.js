import { View, Text, TouchableOpacity, StyleSheet, Platform } from 'react-native'
import React from 'react'

const LargeButton = ({ number, text, colorcode }) => {

    const styles = StyleSheet.create({
        main: {
            width: 150,
            height: 180,
            backgroundColor: colorcode,
            padding: 10,
            borderRadius: 10,
            justifyContent: 'space-between',
            ...Platform.select({
                ios: {
                    shadowColor: '#000',
                    shadowOffset: { width: 0, height: 1 },
                    shadowOpacity: 0.2,
                    shadowRadius: 10,
                },
                android: {
                    elevation: 10,
                },
            }),
        }
    });

    return (
        <TouchableOpacity style={styles.main} >
            <Text style={{ color:'#fff', fontSize: 20, fontWeight: 'bold' }}>{text}</Text>
            <Text style={{ color:'#fff', textAlign: 'right', fontSize: 50, fontWeight: 'bold' }} >{number}</Text>
        </TouchableOpacity>
    )
}

export default LargeButton

