import { View, Text, StyleSheet,TouchableOpacity } from 'react-native'
import React from 'react'

const Challans = () => {
  return (
    <View>
      <View>
        <Text style={styles.heading} >SEMESTER 8</Text>
      </View>
      {/* Details Section */}
      <View style={styles.detailsContainer}>
        {/* ROW 1 */}
        <View style={styles.detailRow} >
          <Text>Last Date</Text>
          <Text>28th Feb 2023</Text>
        </View>

        {/* ROW 2 */}
        <View style={styles.detailRow} >
          <Text>Enrollment</Text>
          <Text>Spring 2023</Text>
        </View>

        {/* ROW 3 */}
        <View style={styles.detailRow} >
          <Text>Total Fee</Text>
          <Text>80, 000</Text>
        </View>

        {/* ROW 4 */}
        <View style={styles.detailRow} >
          <Text>Outstanding Fee</Text>
          <Text>90 000</Text>
        </View>
      </View>

      {/* BOTTOM LINKS CONTAINER */}
      <View style={styles.linksContainer}>
        <TouchableOpacity style={styles.link} >
          <Text>
            Print Installment
          </Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.link} >
          <Text >
            Print Fee
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

export default Challans

const styles = StyleSheet.create({
  heading:{
    padding:16,
    borderRadius:20,
    textAlign:'center',
    fontSize:36,

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
  detailsContainer:{
    borderRadius:20,
    backgroundColor:'#fff',
    minHeight:100,
    marginHorizontal:20,
    elevation:2,
    padding:16,
  },
  detailRow:{
    flexDirection:'row',
    justifyContent:'space-between',
    marginVertical:10
  },

})