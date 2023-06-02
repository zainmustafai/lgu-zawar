import { StyleSheet, View, Text } from 'react-native';
import { Table, } from 'react-native-table-component'
import { TableWrapper, Row, Rows, Col, Cols, Cell } from 'react-native-table-component';
const AttendanceTable = () => {
    const tableHead = ['Serial#', 'Roll#', "Name"];
    const tableData = [
        ['1', 'Fall-2019-BSSE-003', 'Student Name Here',],
        ['2', 'Fall-2019-BSSE-003', 'Student Name Here',],
        ['3', 'Fall-2019-BSSE-003', 'Student Name Here',],
        ['4', 'Fall-2019-BSSE-003', 'Student Name Here',],
        ['5', 'Fall-2019-BSSE-003', 'Student Name Here',],
        ['6', 'Fall-2019-BSSE-003', 'Student Name Here',],
        ['7', 'Fall-2019-BSSE-003', 'Student Name Here',],
        ['8', 'Fall-2019-BSSE-003', 'Student Name Here',],
    ];

    return (
        <View style={styles.container}>
            <Table borderStyle={{ borderWidth: 2, borderColor: '#c8e1ff' }}>
                <Row data={tableHead} style={styles.head} textStyle={styles.text} />
                <Rows data={tableData} textStyle={styles.text} />
            </Table>
        </View>
    )
}

export default AttendanceTable

const styles = StyleSheet.create({
    container: {  padding: 16, paddingTop: 30, backgroundColor: '#fff' },
    head: { height: 40, backgroundColor: '#f1f8ff' },
    text: { margin: 6 }
});