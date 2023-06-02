import { View, Text } from 'react-native'
import React from 'react'

const SectionHeading = ({fontSize,children}) => {
  return (
    <Text style={{fontSize:fontSize}}>{children}</Text>
  )
}

export default SectionHeading