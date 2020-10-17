import React, { Component } from "react";
import {
    View,
    Text,
    StyleSheet,
    SafeAreaView,
    TextInput,
    Platform,
    StatusBar,
    ScrollView,
    Image,
    Dimensions
} from "react-native";
import Homecomponents from '../ComponentHome/Homecomponent'



function Homecontents() {
    return (

        <SafeAreaView style={{ flex: 2 }}>
            <View style={{ flex: 2 }}>

                <ScrollView
                    scrollEventThrottle={16}
                >
                    <View style={{ flex: 1, backgroundColor: 'white', paddingTop: 20 }}>
                        <Text style={{ fontSize: 16, fontWeight: '700', paddingHorizontal: 20, color: 'black', fontFamily: 'bold' }}>
                            FOLLOWING SERVICE
                            </Text>

                        <View style={{ height: 130, marginTop: 20 }}>
                            <ScrollView
                                horizontal={true}
                                showsHorizontalScrollIndicator={false}
                            >
                                <Homecomponents imageUri={require('../images/food.jpg')}
                                    name="HOME MADE FOOD"
                                />
                                <Homecomponents imageUri={require('../images/burger.jpg')}
                                    name="HOME MAGE BURGER"
                                />
                                <Homecomponents imageUri={require('../images/pizza.jpg')}
                                    name="PIZZA"
                                />
                                <Homecomponents imageUri={require('../images/thailand.jpg')}
                                    name="THAILAND"
                                />
                                <Homecomponents imageUri={require('../images/kerala.jpg')}
                                    name="KERALA"
                                />
                                <Homecomponents imageUri={require('../images/travel.jpg')}
                                    name="TRAVEL"
                                />

                            </ScrollView>
                        </View>

                    </View>
                </ScrollView>
                <ScrollView
                    scrollEventThrottle={16}
                >
                    <View style={{ flex: 1, backgroundColor: 'white', paddingTop: 20 }}>
                        <Text style={{ fontSize: 16, fontWeight: '700', paddingHorizontal: 20, color: 'black', fontFamily: 'bold' }}>
                            FOLLOWING SERVICE
                            </Text>

                        <View style={{ height: 130, marginTop: 20 }}>
                            <ScrollView
                                horizontal={true}
                                showsHorizontalScrollIndicator={false}
                            >
                                <Homecomponents imageUri={require('../images/travel.jpg')}
                                    name="TRAVEL"
                                />
                                <Homecomponents imageUri={require('../images/thailand.jpg')}
                                    name="THAILAND"
                                />
                                <Homecomponents imageUri={require('../images/burger.jpg')}
                                    name="HOME MAGE BURGER"
                                />
                                <Homecomponents imageUri={require('../images/pizza.jpg')}
                                    name="PIZZA"
                                />





                            </ScrollView>
                        </View>

                    </View>
                </ScrollView>
                <ScrollView
                    scrollEventThrottle={16}
                >
                    <View style={{ flex: 1, backgroundColor: 'white', paddingTop: 20 }}>
                        <Text style={{ fontSize: 16, fontWeight: '700', paddingHorizontal: 20, color: 'black', fontFamily: 'bold' }}>
                            FOLLOWING SERVICE
                            </Text>

                        <View style={{ height: 130, marginTop: 20 }}>
                            <ScrollView
                                horizontal={true}
                                showsHorizontalScrollIndicator={false}
                            >
                                <Homecomponents imageUri={require('../images/food.jpg')}
                                    name="HOME MADE FOOD"
                                />


                                <Homecomponents imageUri={require('../images/thailand.jpg')}
                                    name="THAILAND"
                                />
                                <Homecomponents imageUri={require('../images/burger.jpg')}
                                    name="HOME MAGE BURGER"
                                />
                                <Homecomponents imageUri={require('../images/kerala.jpg')}
                                    name="KERALA"
                                />
                                <Homecomponents imageUri={require('../images/pizza.jpg')}
                                    name="PIZZA"
                                />
                                <Homecomponents imageUri={require('../images/travel.jpg')}
                                    name="TRAVEL"
                                />

                            </ScrollView>
                        </View>

                    </View>
                </ScrollView>

            </View>
        </SafeAreaView>
    );
}

export default Homecontents;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
});
