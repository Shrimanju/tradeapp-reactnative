import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

function Messagecontents() {
    return (
        <View style={styles.container}>
            <Text>Messagecontents</Text>
        </View>

    );
}

export default Messagecontents;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignContent: 'center',
        alignItems: 'center',
    },
});