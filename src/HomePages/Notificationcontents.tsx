import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

function Notificationcontents() {
    return (
        <View style={styles.container}>
            <Text>Notification contents</Text>
        </View>

    );
}

export default Notificationcontents;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignContent: 'center',
        alignItems: 'center',
    },
});