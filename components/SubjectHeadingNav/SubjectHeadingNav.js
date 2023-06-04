import { View, Text } from 'react-native'
import React from 'react'
import FlexBetween from '../FlexBetween/FlexBetween'
import { TouchableOpacity } from 'react-native-gesture-handler'
import SectionHeading from '../SectionHeading/SectionHeading'

const SubjectHeadingNav = ({subjectName}) => {
    return (
        <View>
            <FlexBetween>
                {/* BUTTON */}
                <TouchableOpacity>
                    {/* BUTTON LEFT */}
                    <Text style={{ fontSize: 36, fontWeight: '300', backgroundColor: '#fefe', aspectRatio: 1, width: 50, textAlign: "center", borderRadius: 10 }} >
                        {`<`}
                    </Text>
                </TouchableOpacity>
                <SectionHeading fontSize={20} >{subjectName}</SectionHeading>
                {/* BUTTON RIGHT */}
                <TouchableOpacity>
                    <Text style={{ fontSize: 36, fontWeight: '300', backgroundColor: '#fefe', aspectRatio: 1, width: 50, textAlign: "center", borderRadius: 10 }} >
                        {`>`}
                    </Text>
                </TouchableOpacity>
            </FlexBetween>
        </View>
    )
}

export default SubjectHeadingNav