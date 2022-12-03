import { View, Text, StyleSheet,TextInput, Dimensions } from 'react-native'
import React from 'react'
const {height,width}=Dimensions.get("window")
const CustomInput = ({ 
    inputStyle=false,
    inputContainerStyle=false,
    placeholder,
    onChangeText,
    autoCapitalize=false,
    secureTextEntry=false,
    defaultValue,
 }) => {
        

    return (
        <View>
            {inputContainerStyle ?
           (
             <View style={{...inputContainerStyle}}>
             <TextInput
             style={inputStyle?{...inputStyle}:styles.inputInsideStyle}
             placeholder={placeholder}
             onChangeText={onChangeText}
             defaultValue={defaultValue}
             autoCapitalize={autoCapitalize}
             secureTextEntry={secureTextEntry}
             />
         </View>

        ):( <View style={styles.inputContainer}>
            <TextInput
            style={inputStyle?{...inputStyle}:styles.inputInsideStyle}
            placeholder={placeholder}
            onChangeText={onChangeText}
            defaultValue={defaultValue}
            autoCapitalize={autoCapitalize}
            secureTextEntry={secureTextEntry}
            />
        </View>)}
        </View>
       
       
    )

}


const styles = StyleSheet.create({
    inputContainer: {
        // flex:1,
        height: 50,
        width: '100%',
        flexGrow:1,
        flexDirection:'row'

    },
    inputInsideStyle:{
        // width: '100%',
            // flex:1,
        flexGrow:1,
        fontSize: 20,
        padding: 10,
        backgroundColor: '#f0f8ff',
        borderRadius: 5

    }
})
export default CustomInput