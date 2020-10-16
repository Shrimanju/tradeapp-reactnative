import React from 'react';
import { StyleSheet, TouchableHighlight,Text,Image,View, TouchableOpacity, StatusBar, TextInput, KeyboardAvoidingView } from 'react-native';
import { Actions } from 'react-native-router-flux'; 
const Signup = () => {
    return (

        <KeyboardAvoidingView behavior="padding" style={styles.container}>
            <StatusBar

                barStyle="light-content" />



                <TouchableHighlight style={styles.logocontainer} >
                <Image source={require('../images/back.png')} 
 
                onPress={() => Actions.pop()}/>
                </TouchableHighlight>
           
           
           
            <Text style={styles.text}>SIGNUP 
            
            </Text>
           


            <TextInput
                placeholder="NAME"
                placeholderTextColor="#A9A9A9"
                keyboardType="email-address"
                style={styles.input} /
            >



            <TextInput
                placeholder="EMAIL ADDRESS AND PHONE NUMBER"
                placeholderTextColor="#A9A9A9"
                secureTextEntry
                selectTextOnFocus
                style={styles.input1} />





            <TouchableOpacity style={styles.Button}>
                <Text style={styles.ButtonText}>Get OTP </Text>
            </TouchableOpacity>
            <Text style={styles.clickbutton1}>VERIFY MAIL/PHONE</Text>
            <TextInput
                placeholder="Enter OTP received"
                placeholderTextColor="#A9A9A9"

                selectTextOnFocus
                style={styles.input1} />
            <TouchableOpacity style={styles.Button1}  onPress={() => Actions.Signup1()} >
                <Text style={styles.ButtonText} >Verify OTP </Text>

            </TouchableOpacity>
            <Text style={styles.clickbutton1}>Change MAIL/PHONE</Text>

        </KeyboardAvoidingView>

    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#ecf0f1',
    },

    text: {
        color: '#00008B',

        marginLeft: 80,
        width: 260,
        textAlign: 'center',
        opacity: 0.9,
        fontSize: 30,
        marginTop: 150,
        fontWeight: 'bold',
        marginBottom: -250

    },

    ButtonText: {
        fontSize: 16,
        fontWeight: '400',
        color: 'white',
        textAlign: 'center'
    },
    Button: {
        width: 350,
        backgroundColor: '#00008B',
        borderRadius: 25,
        marginVertical: 10,
        padding: 15,
        marginLeft: 25,
        marginTop: 40,
        marginBottom: 20

    },
    Button1: {
        width: 350,
        backgroundColor: '#00008B',
        borderRadius: 25,
        marginVertical: 10,
        padding: 15,
        marginLeft: 25,
        marginTop: 15,
        marginBottom: 20

    },
    input: {
        height: 50,
        marginLeft: 30,
        marginRight: 30,
        marginTop: 350,
        marginBottom: 12,
        paddingHorizontal: 12,
        backgroundColor: 'white',

        borderRadius: 10,
        padding: 1,
        marginVertical: 1,


    },
    input1: {
        height: 50,
        marginLeft: 30,
        marginRight: 30,
        marginTop: 20,
        marginBottom: 15,
        paddingHorizontal: 2,
        backgroundColor: 'white',
        borderColor: "blue",
        borderRadius: 10,

        padding: 1,
        marginVertical: 10,
    },
    clickbutton: {
        color: '#00008B',
        fontSize: 16,
        paddingBottom: 5,
        paddingLeft: 35
    },
    clickbutton1: {
        color: '#00008B',
        fontSize: 15,
        paddingBottom: 40,
        paddingLeft: 35,
        marginTop: -15
    },
    logocontainer: {
        alignItems: 'center',
        flexGrow: 0,
        justifyContent: 'center',
        marginTop: 40,
        marginBottom: -150,
       
      
        paddingStart:20,
        paddingBottom:35,
        width: 30,
        height: 50,
    
    },


});

export default Signup;
