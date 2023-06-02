import { StyleSheet, View } from 'react-native'
import React from 'react'

const FlexBetween = ({ children }) => {
    return (
        <View style={styles.main} >
            {children}
        </View>
    )
}

export default FlexBetween

const styles = StyleSheet.create({
    main: {
        padding: 20,
        backgroundColor: '#fff',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',

    }
});