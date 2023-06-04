import { View, Text, StyleSheet, Image, TouchableOpacity, ScrollView } from 'react-native'
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
      <View style={{ backgroundColor: '#00AC5F',marginHorizontal:16,borderRadius:15, elevation: 5 }} >
        <FlexBetween>
          <Text>Class</Text>
          <Text style={{color:'#FFF'}} >Software Engineering</Text>
        </FlexBetween>

        <FlexBetween>
          <Text>Section</Text>
          <Text style={{color:'#FFF'}}>Fall-2019 Section A</Text>
        </FlexBetween>

        <FlexBetween>
          <Text>Room</Text>
          <Text style={{color:'#FFF'}}>NB 25</Text>
        </FlexBetween>
      </View>
            {/* Controls */}
            <View>
                <FlexBetween>
                    <Text>Classes : 1/2 </Text>
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
                <SectionHeading fontSize={26} >Essentials</SectionHeading>
            </View>
            {/* ESSENTIALS CARDS */}
            <FlexBetween>
                <Card title={"Upcomming Events"} iconName={"heart"} colorCode={"#588EFF"} />
                <Card title={"Attendance"} iconName={"bars"} colorCode={"#FF5B52"} />
            </FlexBetween>



        </ScrollView>
    )
}

export default Teacherdashboard

const styles = StyleSheet.create({
    main: {
        flex: 1,
    },
    container: {
        backgroundColor: '#00AC60',
        padding: 16,
        borderRadius: 10,
        elevation: 10
    },
    heading: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 16,
        color: '#fff',
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
        color: '#fff',
    },
    smallText: {
        fontSize: 14,
        color: '#000',
        backgroundColor: 'pink',
        width: 50,
        textAlign: 'center',
        borderRadius: 10
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
