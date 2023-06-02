import { View, Text, StyleSheet, Image, TouchableOpacity, ScrollView } from 'react-native'
import React from 'react'
import SectionHeading from '../../components/SectionHeading/SectionHeading'
import Icon from 'react-native-vector-icons/FontAwesome';
import FlexBetween from '../../components/FlexBetween/FlexBetween';
import Card from '../../components/Card/Card';

const Teacherdashboard = () => {
    return (
        <ScrollView style={styles.main} >
            {/* TOP HEADER */}
            <View style={styles.container}>
                <Text style={styles.heading}>Hi, SIR ALI</Text>
                <View style={styles.innerContainer}>
                    <View style={styles.avatarContainer}>
                        <Image source={require('./avatar.png')} style={{ width: 50, height: 50, }} />
                    </View>
                    <View style={styles.textContainer}>
                        <Text style={styles.smallHeading}>SOFTWARE ENGINEERING</Text>
                        <Text style={styles.smallText}>2015</Text>
                    </View>
                </View>
                <View style={styles.horizontalRule} />
                <View style={styles.horizontalRule} />
            </View>
            {/* SECTION HEADING */}
            <View style={{
                padding: 16,
            }}>
                <SectionHeading fontSize={26} >TODAY'S SCHEDULE</SectionHeading>
            </View>
            
            {/* DATE AND TIME */}
            <View style={styles.borderedBox}>
                <FlexBetween>
                    <View style={styles.datetime}>
                        <View style={styles.leftContainer}>
                            <Icon name="calendar" size={24} color="#333" />
                        </View>
                        <View style={styles.rightContainer}>
                            <Text style={styles.text}>Monday, 15th Februray 2023</Text>
                            <Text style={styles.text}>8:00 - 09:30</Text>
                        </View>
                    </View>
                    {/* BELL ICON */}
                    <Icon name="bell" size={30} color="#900" />
                </FlexBetween>
            </View>

            {/* CLASS DETAILS */}
            <View>
                <FlexBetween>
                    <Text>Class</Text>
                    <Text>Software Engineering</Text>
                </FlexBetween>

                <FlexBetween>
                    <Text>Section</Text>
                    <Text>Fall-2019 Section A</Text>
                </FlexBetween>

                <FlexBetween>
                    <Text>Room</Text>
                    <Text>NB 25</Text>
                </FlexBetween>
            </View>
            {/* Controls */}
            <View>
                <FlexBetween>
                    <Text>Classes : 1/2 </Text>
                    <FlexBetween>
                        <TouchableOpacity style={{ marginHorizontal: 8 }} ><Icon name="chevron-left" size={30} color="#900" /></TouchableOpacity>
                        <TouchableOpacity style={{ marginHorizontal: 8 }} ><Icon name="chevron-right" size={30} color="#900" /></TouchableOpacity>
                    </FlexBetween>
                </FlexBetween>
            </View>

            {/*ESSENTIALS SECTION HEADING */}
            <View style={{
                padding: 16
            }}>
                <SectionHeading fontSize={26} >Essentials</SectionHeading>
            </View>
            {/* ESSENTIALS CARDS */}
            <View>
                <FlexBetween>
                    <Card title={"Upcomming Events"} iconName={"heart"} />
                    <Card title={"Attendance"} iconName={"calendar"} />
                </FlexBetween>
            </View>


        </ScrollView>
    )
}

export default Teacherdashboard

const styles = StyleSheet.create({
    main: {
        flex: 1,
    },
    container: {
        backgroundColor: '#00CB71',
        padding: 16,
        borderRadius: 10,
        elevation: 10
    },
    heading: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 16,
    },
    innerContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 16,
    },
    avatarContainer: {
        marginRight: 16,
        // Add any necessary styling for the Avatar component

    },
    textContainer: {
        flex: 1,
    },
    smallHeading: {
        fontSize: 16,
        fontWeight: 'bold',
        marginBottom: 4,
    },
    smallText: {
        fontSize: 14,
        color: '#777',
    },
    horizontalRule: {
        borderBottomWidth: 1,
        borderBottomColor: '#AAA',
        marginVertical: 8,
    },
    // SCHEDULE AREA
    datetime: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 16,
    },
    leftContainer: {
        marginRight: 16,
    },
    rightContainer: {
        justifyContent: 'center',
    },
    text: {
        fontSize: 16,
        marginBottom: 4,
    },
    borderedBox: {
        padding: 4,
        margin: 2,
        elevation: 1,
    }
});
