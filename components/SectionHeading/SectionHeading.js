import { View, Text } from 'react-native'
import React from 'react'

const SectionHeading = ({fontSize,children, colorCode}) => {
  return (
    <Text style={{fontSize:fontSize, fontWeight:'bold',color: colorCode?colorCode:'#000'}} >{children}</Text>
  )
}

export default SectionHeading