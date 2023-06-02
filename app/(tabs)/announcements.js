import { View, ScrollView, Text, StyleSheet, TouchableOpacity, Platform } from 'react-native'
import React from 'react'
import AnnouncementCard from '../../components/AnnouncementCard/AnnouncementCard'
import { Picker } from '@react-native-picker/picker';

// FAKE DATA ARRAY
const announcementsArray = [
    {
        title: 'Quiz1',
        description: "Lorem ipsum general default text whatever you like wtf wednesday thursday friday.Lorem ipsum general default text whatever you like wtf wednesday thursday friday.",
        time: '3:00',
        stars: 4,
    },
    {
        title: 'Assignment',
        description: "Lorem ipsum general default text whatever you like wtf wednesday thursday friday.Lorem ipsum general default text whatever you like wtf wednesday thursday friday.",
        time: '3:00',
        stars: 3,
    },
    {
        title: 'Quiz #',
        description: "Lorem ipsum general default text whatever you like wtf wednesday thursday friday.Lorem ipsum general default text whatever you like wtf wednesday thursday friday.",
        time: '3:00',
        stars: 4,
    },
    {
        title: 'Quiz 2',
        description: "Lorem ipsum general default text whatever you like wtf wednesday thursday friday.Lorem ipsum general default text whatever you like wtf wednesday thursday friday.",
        time: '3:00',
        stars: 2,
    },
    {
        title: 'Quiz 3',
        description: "Lorem ipsum general default text whatever you like wtf wednesday thursday friday.Lorem ipsum general default text whatever you like wtf wednesday thursday friday.",
        time: '3:00',
        stars: 4,
    },
    {
        title: 'Quiz 4',
        description: "Lorem ipsum general default text whatever you like wtf wednesday thursday friday.Lorem ipsum general default text whatever you like wtf wednesday thursday friday.",
        time: '3:00',
        stars: 3,
    },
    {
        title: 'Quiz 5',
        description: "Lorem ipsum general default text whatever you like wtf wednesday thursday friday.Lorem ipsum general default text whatever you like wtf wednesday thursday friday.",
        time: '3:00',
        stars: 4,
    },
    {
        title: 'Quiz 6',
        description: "Lorem ipsum general default text whatever you like wtf wednesday thursday friday.Lorem ipsum general default text whatever you like wtf wednesday thursday friday.",
        time: '3:00',
        stars: 4,
    },
    {
        title: 'Quiz 7',
        description: "Lorem ipsum general default text whatever you like wtf wednesday thursday friday.Lorem ipsum general default text whatever you like wtf wednesday thursday friday.",
        time: '3:00',
        stars: 4,
    },
]

const announcements = () => {
    return (
        <ScrollView style={styles.main}>
            <View style={styles.controls}>
                <TouchableOpacity style={{ backgroundColor: '#B29EFF', padding: 8, borderRadius: 10, }} >
                    <Text style={{ color: '#ffffff' }}>
                        + NEW
                    </Text>
                </TouchableOpacity>
                <View style={styles.picker}>
                    <Picker
                        selectedValue={"TIME"}
                    >
                        <Picker.Item label="Time" value="Time" />
                        <Picker.Item label="Item 1" value="Time" />
                        <Picker.Item label="Item 2" value="Time" />
                        <Picker.Item label="Item 3" value="Time" />
                        <Picker.Item label="JavaScript" value="js" />
                    </Picker>
                </View>
            </View>

            {
                announcementsArray.map((item) => {
                    return <AnnouncementCard
                        title={item.title}
                        key={item.title}
                        description={item.description}
                        time={item.time}
                        stars={item.stars}
                    />
                })
            }
        </ScrollView>
    )
}

export default announcements

const styles = StyleSheet.create({
    main: {
        flex: 1,
        backgroundColor: 'white',
    },
    controls: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: 10,
        marginVertical: 10,
    },
    picker: {
        width: 150,
        ...Platform.select({
            ios: {
                shadowColor: 'gray',
                shadowOffset: { width: 0, height: 2 },
                shadowOpacity: 0.2,
                shadowRadius: 1,
            },
            android: {
                elevation: 1,
            },
        }),
        borderColor: 'gray',
        borderRadius: 0,
    }
});