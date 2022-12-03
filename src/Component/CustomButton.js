import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'
import React from 'react'

export default function CustomButton({
    title,
    onPress,
    buttomContainerStyle=false
}) {
  return (
   <TouchableOpacity
   
   onPress={onPress} 
   style={buttomContainerStyle?{...buttomContainerStyle}:styles.containerStyle}>
    <Text style={styles.buttonText}>{title}</Text>
   </TouchableOpacity>
  )
}
const styles=StyleSheet.create({
    containerStyle:{
        alignSelf: 'flex-end',
        width: '25%',
        marginTop: 10,
        backgroundColor: "green",
        borderRadius: 4,
    },
  buttonText:{
    alignSelf: "center",
    fontSize: 20,
    padding: 10
  }
})