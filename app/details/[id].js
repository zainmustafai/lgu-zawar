import { View, Text, TouchableOpacity, ScrollView, StyleSheet, Button } from 'react-native'
import React, { useState } from 'react'
import { Stack, useSearchParams } from 'expo-router'
import SectionHeading from '../../components/SectionHeading/SectionHeading';
import AttendanceTable from '../../components/AttendanceTable/AttendanceTable';
import FlexBetween from '../../components/FlexBetween/FlexBetween';
import Icon from 'react-native-vector-icons/FontAwesome';
import DateTimePicker from '@react-native-community/datetimepicker';
import SubjectHeadingNav from '../../components/SubjectHeadingNav/SubjectHeadingNav';

const AttendanceDetail = () => {
  const [date, setDate] = useState(new Date());
  const [show, setShow] = useState(false);


  const { id } = useSearchParams();
  return (
    <ScrollView style={{ flex: 1 }} >
      <Stack.Screen options={{
        headerTitle: "Attendance Detail",
      }} />
      {/* SUBJECT HEADING NAV*/}
      <SubjectHeadingNav subjectName={"Machine Learning"} />

      {/* CLASS HEADING NAV*/}
      <FlexBetween>
        {/* BUTTON */}
        <TouchableOpacity>
          <Text style={{ fontSize: 36, fontWeight: '300', backgroundColor: '#fefe', aspectRatio: 1, width: 50, textAlign: "center", borderRadius: 10 }} >
            {`<`}
          </Text>
        </TouchableOpacity>
        <SectionHeading fontSize={16} >SECTION A - FALL 2019</SectionHeading>
        {/* BUTTON RIGHT */}
        <TouchableOpacity>
          <Text style={{ fontSize: 36, fontWeight: '300', backgroundColor: '#fefe', aspectRatio: 1, width: 50, textAlign: "center", borderRadius: 10 }} >
            {`>`}
          </Text>
        </TouchableOpacity>
      </FlexBetween>
      <FlexBetween>
        {/* DATE PICKER */}
        <Button title='Date' onPress={() => setShow(true)} />
        {
          show && (
            <DateTimePicker
              testID="dateTimePicker"
              value={date}
              //mode={mode}
              is24Hour={true}
              onChange={()=>setShow(false)}
            />
          )
        }
        <Text>{date.toLocaleDateString()}</Text>
      </FlexBetween>
      {/* TABLE */}
      <AttendanceTable />
      {/* TOTAL STUDENTS */}
      <FlexBetween>
        <SectionHeading fontSize={20}>Total Students</SectionHeading>
        <View style={{
          backgroundColor: '#00AC60',
          justifyContent: 'center',
          alignItems: 'center',
          padding: 10,
          borderRadius: 10,
        }}>
          <SectionHeading fontSize={26} colorCode={"#fff"}>35</SectionHeading>
        </View>
      </FlexBetween>

    </ScrollView>
  )
}

export default AttendanceDetail

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  datePicker: {
    width: 200,
    marginBottom: 20,
  },
});