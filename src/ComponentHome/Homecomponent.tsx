import React from 'react';
import {
    View,
    Text,
    StyleSheet,
    Image
} from "react-native";
function Homecomponents(props) {
    return (
        <View style={{ height: 200, width: 150, marginLeft: 20, borderWidth: 0.5, borderColor: 'red', borderRadius: 10, shadowRadius: 20, shadowColor: 'black', }}>
            <View style={{ flex: 3 }}>
                <Image source={props.imageUri}
                    style={{ flex: 1, width: null, height: null, resizeMode: 'cover' }}
                />
            </View>
            <View style={{ flex: 3, paddingLeft: 10, paddingTop: 10 }}>
                <Text>{props.name}</Text>
            </View>
        </View>
    );
}

export default Homecomponents;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
});