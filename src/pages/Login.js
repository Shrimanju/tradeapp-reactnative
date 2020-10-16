import React from 'react';
import { StyleSheet, Text,Image, View, TouchableOpacity,Linking,StatusBar, TextInput, KeyboardAvoidingView } from 'react-native';
import { Actions } from 'react-native-router-flux'; 
const Login = () => {
    return (

        <KeyboardAvoidingView behavior="padding" style={styles.container}>
            <StatusBar

                barStyle="light-content" />
            <View style={styles.logocontainer} >
                <Image source={require('../images/back.png')} />
            </View>
            <Text style={styles.text} >LOGIN 
            
            </Text>

            <TextInput
                placeholder="email(abc@gmail.com) or phone(1234567899)"
                placeholderTextColor="#A9A9A9"
                keyboardType="email-address"
                style={styles.input} />
            <TextInput
                placeholder="Pssword"
                placeholderTextColor="#A9A9A9"
                secureTextEntry
                selectTextOnFocus
                style={styles.input1} />




            <TouchableOpacity style={styles.Button}>
                <Text style={styles.ButtonText} onPress={() => Actions.Home()}>LogIn</Text>
            </TouchableOpacity>
            <Text style={styles.clickbutton} onPress={() => Actions.Signup()}>Forgat Password</Text>
            <Text style={styles.clickbutton} onPress={() => Actions.Signup()}>Not a member?Sign up now</Text>
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
        marginTop: 200,
        fontWeight: 'bold',
        marginBottom: -150

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
    input: {
        height: 50,
        marginLeft: 30,
        marginRight: 30,
        marginTop: 300,
        marginBottom: 12,
        paddingHorizontal: 2,
        backgroundColor: 'white',
        borderColor: "blue",
        borderRadius: 10,

        padding: 1,
        marginVertical: 10,


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
export default Login;
