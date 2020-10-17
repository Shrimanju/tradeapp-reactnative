import React from 'react';
import { View, Text, StyleSheet, TextInput, Image } from 'react-native';
import Messagecontents from '../HomePages/Messagecontents';

function Searchcontents() {
    return (
        // <View style={styles.container}>
        //     <Text>Searchcontents</Text>
        // </View>



        <View style={{ backgroundColor: 'white', borderBottomWidth: 1, borderBottomColor: '#dddddd' }}>
            <View style={{
                flexDirection: 'row', padding: 10,
                backgroundColor: 'white', marginHorizontal: 20,
                shadowOffset: { width: 0, height: 0 },
                shadowColor: 'black',
                shadowOpacity: 0.2,
                elevation: 5,
                marginTop: 20,
                borderRadius: 30,
                marginLeft: 2,
                marginRight: 2

            }}>


                <TextInput
                    underlineColorAndroid="transparent"
                    placeholder="Search here"
                    placeholderTextColor="grey"
                    style={{ flex: 1, fontWeight: '600', backgroundColor: 'white' }}

                />
                <Image source={require('../images/search_filter.png')} style={{ width: 30, height: 30, marginTop: 10, marginRight: 20 }} />
            </View>
        </View>












    );
}

export default Searchcontents;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignContent: 'center',
        alignItems: 'center',
    },
});
