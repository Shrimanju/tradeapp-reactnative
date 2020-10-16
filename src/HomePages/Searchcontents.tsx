import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

function Searchcontents() {
    return (
        <View style={styles.container}>
            <Text>Searchcontents</Text>
        </View>



        /* <View style={{ height: this.startHeaderHeight, backgroundColor: 'white', borderBottomWidth: 1, borderBottomColor: '#dddddd' }}>
                               <View style={{
                                   flexDirection: 'row', padding: 10,
                                   backgroundColor: 'white', marginHorizontal: 20,
                                   shadowOffset: { width: 0, height: 0 },
                                   shadowColor: 'black',
                                   shadowOpacity: 0.2,
                                   elevation: 1,
                                   marginTop: Platform.OS == 'android' ? 30 : null
                               }}>
                                   <Icon name="ios-search" size={20} style={{ marginRight: 10 }} />
                                   <TextInput
                                       underlineColorAndroid="transparent"
                                       placeholder="Try New Delhi"
                                       placeholderTextColor="grey"
                                       style={{ flex: 1, fontWeight: '700', backgroundColor: 'white' }}
                                   />
                               </View>
                           </View> */












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