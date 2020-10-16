import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, StatusBar, TextInput, KeyboardAvoidingView } from 'react-native';
import { Actions } from 'react-native-router-flux'; 
const Signup1 = () => {

    return (

        <View behavior="padding" style={styles.container}>
            <StatusBar

                barStyle="light-content" />
                 <View style={styles.logocontainer}>
                <Image source={require('../images/back.png')} />
            </View>
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

                selectTextOnFocus
                style={styles.input1} />
            <TextInput
                placeholder="Password"
                placeholderTextColor="#A9A9A9"
                secureTextEntry
                selectTextOnFocus
                style={styles.input1} 
                    
                />
            <TextInput
                placeholder="Repeate password"
                placeholderTextColor="#A9A9A9"
                secureTextEntry
                selectTextOnFocus
                style={styles.input1} />
            <Text style={styles.clickbutton}> <Image style={styles.logocontainer1} source={require('../images/preferences.png')} />
           . I agree with all Terms and Condition</Text>

        


            <TouchableOpacity style={styles.Button}  onPress={() => Actions.Wellcome()} >
                <Text style={styles.ButtonText}>Signup </Text>
            </TouchableOpacity>
            <Text style={styles.clickbutton}  onPress={() => Actions.Login()} >Already have a account?Login</Text>



        </View>

    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#ecf0f1',
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
    logocontainer1: {
      
        width: 20,
        height: 20,
    
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
        marginBottom: -200

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
        marginTop: 300,
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
    }


});
export default Signup1;
