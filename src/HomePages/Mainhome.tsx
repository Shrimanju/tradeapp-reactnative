import React from 'react';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { View, Text, StyleSheet, Image } from 'react-native';
import Homecontents from '../HomePages/Homecontents';
import Searchcontents from '../HomePages/Searchcontents';
import Notificationcontents from '../HomePages/Notificationcontents';
import Messagecontents from '../HomePages/Messagecontents';



const Tab = createBottomTabNavigator();
function Mainhome() {
    return (




        <Tab.Navigator initialRouteName="Homecontents"
            activeColor="#3e2465"
            inactiveColor="#3e2465"
            barStyle={{ backgroundColor: '#694fad' }}>


            <Tab.Screen name="Home" component={Homecontents} options={{
                tabBarLabel: '',
                tabBarIcon: () => (
                    <Image style={{
                        marginLeft: 0, marginBottom: -13, marginTop: 0, width: 35, height: 35
                    }}
                        source={require('../images/side_home.png')}

                    />

                ),
            }} />




            <Tab.Screen name="Search" component={Searchcontents} options={{
                tabBarLabel: '',
                tabBarIcon: () => (
                    <Image style={{
                        marginLeft: 0, marginBottom: -13, marginTop: 0, width: 35, height: 35
                    }}
                        source={require('../images/search_keyword.png')}

                    />
                ),
            }} />



            <Tab.Screen name="Notification" component={Notificationcontents} options={{
                tabBarLabel: '',
                tabBarIcon: () => (
                    <Image style={{
                        marginLeft: 0, marginBottom: -13, marginTop: 0, width: 35, height: 35
                    }}
                        source={require('../images/notification_settings_icon.png')}

                    />
                ),
            }} />




            <Tab.Screen name="Message" component={Messagecontents} options={{
                tabBarLabel: '',
                tabBarIcon: ({ color }) => (
                    <Image style={{
                        marginLeft: 0, marginBottom: -13, marginTop: 0, width: 35, height: 35
                    }}
                        source={require('../images/side_inbox.png')}

                    />
                ),
            }} />
        </Tab.Navigator>


    );
}

export default Mainhome;