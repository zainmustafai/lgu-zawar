import { View, Text, Button, StyleSheet, Image, TextInput, ImageBackground, TouchableOpacity } from 'react-native'
import React from 'react'
import { Link } from 'expo-router'
import { SafeAreaView } from 'react-native-safe-area-context'
import { Stack} from "expo-router";

const Home = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Stack.Screen
        options={{
          headerShown:false,
        }}
      />
      <ImageBackground
        source={require('../assets/splashbg.png')}
        style={styles.splash}
      >
        <View style={styles.logoContainer} >
          <Image source={require('../assets/logo.png')}
            style={styles.logo}
          />
        </View>
        {/* INPUT CONTAINER */}
        <View style={styles.inputContainer}>
          <TextInput
            placeholder="Email"
            placeholderTextColor="#aaa"
            style={styles.input}
          // value={email}
          // onChangeText={setEmail}
          />
          <TextInput
            placeholder="Password"
            placeholderTextColor="#aaa"
            style={styles.input}
            // value={password}
            // onChangeText={setPassword}
            secureTextEntry
          />
          {/* SIGN IN BUTTON */}
          <Link href={'/announcements'} style={styles.button}>
            SING IN
          </Link>
        </View>
        {/* BOTTOM LINKS CONTAINER */}
        <View style={styles.linksContainer}>
          <TouchableOpacity style={styles.link} >
            <Text>
              Forgot Password?
            </Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.link} >
            <Text >
              Forgot Username?
            </Text>
          </TouchableOpacity>
        </View>

      </ImageBackground>

    </SafeAreaView>
  )
}

export default Home

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#d3d489',
    flex: 1,
    margin: 0,
  },
  splash: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-start',
    width: '100%',
  },
  logoContainer: {
    flex: 1,
    shadowColor: '#eee',
    shadowOffset: 20,
    paddingTop: 40,
    paddingBottom: 20,

  },
  logo: {
    borderRadius: 500,
    width: 200,
    height: 200
  },
  inputContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    width: '100%'
  },
  input: {
    backgroundColor: '#403F4D',
    height: 60,
    width: '100%',
    borderColor: 'gray',
    color: '#fff',
    borderWidth: 1,
    borderRadius: 5,
    marginBottom: 10,
    paddingLeft: 15,
    borderRadius: 30,
  },
  button: {
    backgroundColor: '#00CB71',
    width: '100%',
    textAlign: 'center',
    paddingVertical: 15,
    marginTop: 30,
    borderRadius: 25
  },

  linksContainer: {
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-between',
    paddingHorizontal: 40,
    paddingVertical: 20,
  },
  link: {
    backgroundColor: '#00CB71',
    color: '#eee',
    padding: 8,
    borderRadius: 20,

  },
  centered: {
    flex: 1,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  }
});