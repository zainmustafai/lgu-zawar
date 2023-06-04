import { View, Text, StyleSheet, Image,TouchableOpacity } from 'react-native'
import React from 'react'
import { color } from 'react-native-reanimated'

const AnnouncementCard = ({ title, description, stars, time, colorCode }) => {
    const starsToBeRendered = [];
    for (let i = 0; i < stars; i++) {
        starsToBeRendered.push(i);
    };

    const styles = StyleSheet.create({
        cardConatiner: {
            backgroundColor: !colorCode?'#B29EFF':colorCode,
            margin: 10,
            padding: 10,
            borderRadius:10
        },
        title: {
            fontSize: 24,
            fontWeight: "bold",
            color: '#fff'
        },
        description: {
            fontSize: 12,
            fontWeight: "normal",
            color: 'gray'
        },
        starContainer: {
            flexDirection: 'row',
            justifyContent: 'flex-end',
        },
        star: {
            width: 30,   // Adjust the width as needed
            height: 30,  // Adjust the height as needed
    
        }
    });

    return (
        <TouchableOpacity style={styles.cardConatiner}>
            <View style={styles.starContainer}>
                {
                    starsToBeRendered.map((item) => <Image
                        source={require('../../assets/star.png')}
                        key={item}
                        style={styles.star} />)
                }
            </View>
            <Text style={styles.title}>
                {title}
            </Text>
            <Text>{description}</Text>
            <Text>
                {time}
            </Text>
        </TouchableOpacity>
    )
}

export default AnnouncementCard

