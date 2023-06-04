import { View, Text, StyleSheet, Image, TouchableOpacity, ScrollView } from 'react-native'
import React from 'react'
import FlexBetween from '../../components/FlexBetween/FlexBetween'
import SectionHeading from '../../components/SectionHeading/SectionHeading'
import Icon from 'react-native-vector-icons/FontAwesome';
import Card from '../../components/Card/Card';
import { Link, Stack, useRouter, } from 'expo-router';
import { BR } from '@expo/html-elements';


const StudentDashboard = () => {
  const navigation = useRouter();

  return (
    <ScrollView style={styles.main}>
      <Stack.Screen options={{
        headerTitle: "STUDENT DASHBOARD",
      }} />
      {/* TOP HEADER */}
      <View style={styles.container}>
        <SectionHeading fontSize={28} colorCode={"#FFF"}>Hi, Shazil</SectionHeading>
        <SectionHeading fontSize={16} colorCode={"#FFF"}>FALL-2019/BSSE/005</SectionHeading>
        <View style={styles.innerContainer}>
          <View style={styles.avatarContainer}>
            <Image source={require('./avatar.png')} style={{ width: 50, height: 50, }} />
          </View>
          <View style={styles.textContainer}>
            <Text style={styles.smallHeading}>SOFTWARE ENGINEERING</Text>
            <View style={{ flexDirection: 'row', gap: 20 }}>
              <Text style={styles.smallText}>2019</Text>
              <Text style={styles.smallText}>Bachelors</Text>
            </View>
          </View>
        </View>
        <View style={styles.horizontalRule} />
        <FlexBetween>
          <Text>GPA : 3.2</Text>
          <Text>SEMESTER : 7</Text>
        </FlexBetween>
        <View style={styles.horizontalRule} />
      </View>

      {/* SECTION HEADING */}
      <View style={{
        padding: 16,
      }}>
        <SectionHeading fontSize={18} >Today's Schedule</SectionHeading>
      </View>

      {/* DATE AND TIME */}
      <View style={styles.borderedBox}>
        <FlexBetween>
          <View style={styles.datetime}>
            <View style={styles.leftContainer}>
              <Icon name="calendar" size={24} color="#333" style={{ backgroundColor: '#26B877', padding: 8, borderRadius: 10 }} />
            </View>
            <View style={styles.rightContainer}>
              <Text style={styles.text}>Monday, 15th Februray 2023</Text>
              <Text style={styles.text}>8:00 - 09:30</Text>
            </View>
          </View>
          {/* BELL ICON */}
          <Icon name="bell" size={30} color="#00AC5F" style={{ backgroundColor: '#ffff', padding: 8, borderRadius: 30, elevation: 5 }} />
        </FlexBetween>
      </View>

      {/* CLASS DETAILS */}
      <View style={{ backgroundColor: '#00AC5F', marginHorizontal: 16, borderRadius: 15, elevation: 5 }} >
        <FlexBetween>
          <Text>Class</Text>
          <Text style={{ color: '#FFF' }} >Software Engineering</Text>
        </FlexBetween>

        <FlexBetween>
          <Text>Section</Text>
          <Text style={{ color: '#FFF' }}>Fall-2019 Section A</Text>
        </FlexBetween>

        <FlexBetween>
          <Text>Room</Text>
          <Text style={{ color: '#FFF' }}>NB 25</Text>
        </FlexBetween>
      </View>
      {/* Controls */}
      <View>
        <FlexBetween>
          <Text>Classes : 1/6 </Text>
          <FlexBetween>

            <TouchableOpacity style={{ marginHorizontal: 8 }} ><Icon name="arrow-left" size={30} color="#fff" style={{ backgroundColor: '#26B877', padding: 4, borderRadius: 10 }} /></TouchableOpacity>
            <TouchableOpacity style={{ marginHorizontal: 8 }} ><Icon name="arrow-right" size={30} color="#fff" style={{ backgroundColor: '#26B877', padding: 4, borderRadius: 10 }} /></TouchableOpacity>
          </FlexBetween>
        </FlexBetween>
      </View>

      {/*ESSENTIALS SECTION HEADING */}
      <View style={{
        padding: 16
      }}>
        <SectionHeading fontSize={18} >Essentials</SectionHeading>
      </View>
      {/* ESSENTIALS CARDS */}
      <View>
        <FlexBetween>
          <Card title={"Upcomming Events"} iconName={"heart"} colorCode={"#588EFF"} />
          <View
            style={{
              backgroundColor: '#F4A849',
              minHeight: 200,
              borderRadius: 10,
              width: 150,
              padding: 10,
              textAlign: 'center',
              fontSize: 18,
              color: '#fff',
              justifyContent: 'center',
              alignItems: 'center',
              gap:1
            }}
          >
            <Link href={'/challans/1'}>
              <Icon name='download' size={30} color={'#fff'} />
            </Link>
            <Link href={'/challans/1'}>
              <Text style={{color:'#fff', fontSize:18}}>
                Challan
              </Text>
            </Link>
          </View>
        </FlexBetween>
        <FlexBetween>
          <Card title={"Attendance"} iconName={"bars"} colorCode={"#FF5B52"} />
          <Card title={"Roll# Slip"} iconName={"file"} colorCode={"#F375FC"} />
        </FlexBetween>
      </View>
    </ScrollView>
  )
}

export default StudentDashboard


const styles = StyleSheet.create({
  main: {
    flex: 1,
    height: '100%',
    backgroundColor: '#FFF'
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
    marginBottom: 20,
    color: '#FFF',

  },
  innerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
    marginTop: 16
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
    color: '#FFF',
  },
  smallText: {
    fontSize: 14,
    color: '#FFF',
    backgroundColor: '#aaa',
    borderRadius: 10,
    padding: 8
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
