import { View, Text, TextInput, StyleSheet, KeyboardAvoidingView, TouchableOpacity } from "react-native"
import react, { useState } from "react"
import Icon from 'react-native-vector-icons/FontAwesome5';
import CustomInput from "../Component/CustomInput";
import CustomText from "../Component/CustomText";
import CustomButton from "../Component/CustomButton";
import { useDispatch } from "react-redux";
import { connect } from 'react-redux';
import { setUserCredential } from "../redux/Action/Product";

function LoginScreen({ navigation }) {
    const dispatch = useDispatch()
    const [input, setInput] = useState(null)
    const [password, setPassword] = useState(null)
    const [seePassword, setSeePassword] = useState(true)


    const inputHandler = (text) => {
        setInput(text)
    }
    const passwordHandler = (text) => {
        setPassword(text)
    }
    const passwordIconHandler = () => {
        setSeePassword(!seePassword)
    }
    const loginButtonHandler = () => {
        console.log("shasho")
        if (input && password) {
            console.log(input, password)
            navigation.replace("MyTabs")
            dispatch(setUserCredential(input, password))

        } else {
            alert("please enter email-Id and Password")
        }
    }
    // console.log(userCredential)
    return (
        <KeyboardAvoidingView enabled={true} style={styles.container}>
            <CustomText title='Email-ID' />
            <CustomInput
                placeholder="Enter Email-ID"
                onChangeText={inputHandler}
                defaultValue={input}
            />
            <CustomText title='Password' />
            <View style={styles.passwordField}>
                <View style={{flexGrow:1}}>
                <CustomInput
                // inputStyle={{  flexGrow:1}}
                    placeholder="Enter Password"
                    onChangeText={passwordHandler}
                    autoCapitalize={false}
                    secureTextEntry={seePassword}
                    defaultValue={password}
                />
                </View>
               
                <TouchableOpacity onPress={passwordIconHandler} style={{ paddingEnd: 10 }}>
                    <Icon name={seePassword ? 'eye-slash' : 'eye'} size={20} color="black" />
                </TouchableOpacity>
            </View>
            <CustomButton
                onPress={loginButtonHandler}
                title="Login"
            />

        </KeyboardAvoidingView>
    )
}

const mapStateToProps = (state) => {
    const { userCredential } = state.FoodData
    console.log(userCredential)
    return {
        userCredential
    }
}
export default connect(mapStateToProps, {
    setUserCredential,
})(LoginScreen)
// export default LoginScreen




const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: "center",
        paddingHorizontal: 16,
        backgroundColor: '#ffebcd'
    },

    // button: {
    //     alignSelf: 'flex-end',
    //     width: '25%',
    //     marginTop: 10,
    //     backgroundColor: "green",
    //     borderRadius: 4,
    // },

    // buttonText: {
    //     alignSelf: "center",
    //     fontSize: 20,
    //     padding: 10
    // },

    textStyle: {
        fontSize: 20,
        padding: 10
    },

    passwordField: {
        // flex:1,
        // flexGrow:1,
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems: 'center',
        backgroundColor: '#f0f8ff',
        borderRadius:5
    },
})