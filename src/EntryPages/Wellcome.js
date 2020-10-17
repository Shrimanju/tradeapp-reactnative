
import React from 'react';
import { StyleSheet, Linking, Text, View, Image, TouchableOpacity } from 'react-native';
import { Actions } from 'react-native-router-flux';
const Wellcome = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>TRADENAPP</Text>

            <View style={styles.logocontainer}>
                <Image
                    style={styles.logo}
                    source={require('../images/carousel1.png')} />
            </View>
            <Text style={styles.text1}>Find nervice near You</Text>
            <Text style={styles.subtext}>Search for local and international services and browse different categories</Text>
            <View style={styles.container} >
            </View>
            <TouchableOpacity style={styles.Button} onPress={() => Actions.Login()}>
                <Text style={styles.ButtonText}>LogIn</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.Button} onPress={() => Actions.Signup()}>
                <Text style={styles.ButtonText}>SignUp</Text>
            </TouchableOpacity>

            <Text style={styles.skip} onPress={() => Actions.Home()}>Skip>></Text>
        </View>
    );
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#ecf0f1',
    },
    logocontainer: {
        alignItems: 'center',
        flexGrow: 1,
        justifyContent: 'center',
        marginTop: 5
    },
    logo: {
        width: 350,
        height: 390
    },
    text1: {
        color: '#00008B',
        marginTop: -100,
        marginLeft: 80,
        width: 260,
        textAlign: 'center',
        opacity: 0.9,
        fontSize: 18,
        marginBottom: 50
    },
    text: {
        color: '#00008B',

        marginLeft: 80,
        width: 260,
        textAlign: 'center',
        opacity: 0.9,
        fontSize: 30,
        marginTop: 50,
        fontWeight: 'bold',
        marginBottom: -70

    },
    skip: {
        color: '#00008B',
        marginBottom: 30,
        paddingStart: 322,
        fontSize: 16,
        paddingTop: 10,
        opacity: 1



    },
    subtext: {
        color: 'black',
        marginLeft: 70,
        width: 260,
        textAlign: 'center',
        opacity: 0.9,
        fontSize: 11,
        marginTop: -50,
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
        marginTop: -50,
        marginBottom: 80

    },
});

export default Wellcome;