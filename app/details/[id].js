import { View, Text, TouchableOpacity, ScrollView } from 'react-native'
import React from 'react'
import { Stack, useSearchParams } from 'expo-router'
import SectionHeading from '../../components/SectionHeading/SectionHeading';
import AttendanceTable from '../../components/AttendanceTable/AttendanceTable';
import FlexBetween from '../../components/FlexBetween/FlexBetween';

const AttendanceDetail = () => {
  const { id } = useSearchParams();
  return (
    <ScrollView style={{ flex: 1 }} >
      <Stack.Screen options={{
        headerTitle: "Attendance Detail",
      }} />
      {/* SUBJECT HEADING NAV*/}
      <FlexBetween>
        {/* BUTTON */}
        <TouchableOpacity>
          <Text style={{ fontSize: 36, fontWeight: '300', backgroundColor: '#fefe', aspectRatio: 1, width: 50, textAlign: "center", borderRadius: 10 }} >
            {`<`}
          </Text>
        </TouchableOpacity>
        <SectionHeading fontSize={20} >MACHINE LEARNING</SectionHeading>
        {/* BUTTON RIGHT */}
        <TouchableOpacity>
          <Text style={{ fontSize: 36, fontWeight: '300', backgroundColor: '#fefe', aspectRatio: 1, width: 50, textAlign: "center", borderRadius: 10 }} >
            {`>`}
          </Text>
        </TouchableOpacity>
      </FlexBetween>

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
      <AttendanceTable />
      {/* TOTAL STUDENTS */}
      <FlexBetween>
        <Text>TOTAL STUDENTS</Text>
        <View style={{
          backgroundColor:'#f4f4',
          justifyContent:'center',
          alignItems:'center',
          padding:10,
          borderRadius:10

        }}>
          <SectionHeading fontSize={26}>35</SectionHeading>
        </View>
      </FlexBetween>

    </ScrollView>
  )
}

export default AttendanceDetail