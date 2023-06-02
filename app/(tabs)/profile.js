import { View, Text, ScrollView, TextInput, StyleSheet, Image } from 'react-native'
import React from 'react'

const Profile = () => {
  return (
    <View style={styles.mainContainer} >
      <View style={styles.avatarContainer} >
        <Image source={require('./avatar.png')} style={styles.avatar} />
        <Text style={styles.nameText} >Shazil Hammad Ali</Text>
        <Text style={styles.classText}>Class VII A</Text>
      </View>
      <ScrollView style={styles.inputContainer} >
        <TextInput placeholder='Roll Number' style={styles.input} />
        <TextInput placeholder='Father Name' style={styles.input} />
        <TextInput placeholder='Mother Name' style={styles.input} />
        <TextInput placeholder='CNIC' style={styles.input} />
        <TextInput placeholder='Phone Number' style={styles.input} />
        <TextInput placeholder='Address' style={styles.input} />
        <TextInput placeholder='Emergency' style={styles.input} />
        <TextInput placeholder='Blood Group' style={styles.input} />
        <TextInput placeholder='Blood Group' style={styles.input} />
        <TextInput placeholder='Blood Group' style={styles.input} />
        <TextInput placeholder='Blood Group' style={styles.input} />
        <TextInput placeholder='Blood Group' style={styles.input} />
        <TextInput placeholder='Blood Group' style={styles.input} />
        <TextInput placeholder='Blood Group' style={styles.input} />
        <TextInput placeholder='Blood Group' style={styles.input} />
        <TextInput placeholder='Blood Group' style={styles.input} />
        <TextInput placeholder='Blood Group' style={styles.input} />
        <TextInput placeholder='Blood Group' style={styles.input} />
        <TextInput placeholder='Blood Group' style={styles.input} />
        <TextInput placeholder='Blood Group' style={styles.input} />
      </ScrollView>
    </View>
  )
}

export default Profile

const styles = StyleSheet.create({
  mainContainer: {
    backgroundColor: 'green',
    flex: 1,

  },
  avatarContainer: {
    minHeight: 220,
    alignItems: 'center',
    justifyContent: 'center',
  },
  nameText:{
    color:'#fff',
    marginTop:2,
    fontSize:20,
    fontWeight:'500'
  },
  classText:{
    color:'#fff',
    marginVertical:2,
    fontSize:12,
  },
  avatar: {
    height: 150,
    width: 150,
  },
  inputContainer: {
    backgroundColor: '#fff',
    padding: 16,
    flex: 1,
    borderTopRightRadius: 10,
    borderTopLeftRadius: 10,

  },
  input: {
    height: 50,
    fontSize: 16,
    borderBottomWidth: 2,
    borderBottomColor: 'gray',
    padding: 8,
    marginTop: 8,

  }
})