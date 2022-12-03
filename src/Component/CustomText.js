import { View, Text, StyleSheet } from 'react-native'
import React from 'react'

export default function CustomText({
    title,
    textStyle = false
}) {


        return <Text style={textStyle?{...textStyle}:styles.text}>{title}</Text>
    
    


}
const styles=StyleSheet.create({
    text:{
        fontSize: 20,
        padding: 10,
        fontWeight:'bold',
        // fontFamily:'Cochin'
        
        
    }
})