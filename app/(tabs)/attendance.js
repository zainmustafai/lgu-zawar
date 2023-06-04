import { View, Text, ScrollView, TouchableOpacity } from 'react-native'
import React from 'react'
import { Calendar } from 'react-native-calendars'
import FlexBetween from '../../components/FlexBetween/FlexBetween'
import LargeButton from '../../components/LargeButton/LargeButton'
import SectionHeading from '../../components/SectionHeading/SectionHeading'
import { Link, useRouter } from 'expo-router'
import SubjectHeadingNav from '../../components/SubjectHeadingNav/SubjectHeadingNav'

const attendance = () => {
    const navigation = useRouter();

    const handleClick = () => {
        navigation.push('/details/1');
    }
    return (
        <ScrollView>
            {/* SUBJECT HEADING NAV*/}
            <SubjectHeadingNav subjectName={"Machine Learning"} />
            <SubjectHeadingNav subjectName={"January 2023"} />
            <Calendar
                onDayPress={handleClick}
                style={{ backgroundColor: '#fefe', elevation: 2, margin: 16 }} />
            <FlexBetween>
                <LargeButton number={10} text={"TOTAL PRESENT"} colorcode={"#B29EFF"} />
                <LargeButton number={10} text={"TOTAL PRESENT"} colorcode={"#FF3F00"} />
            </FlexBetween>
        </ScrollView>
    )
}

export default attendance