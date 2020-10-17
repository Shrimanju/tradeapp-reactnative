import React from 'react';
import { View, StyleSheet, Image } from 'react-native';
import { Actions } from 'react-native-router-flux';
import {
    Title,
    Caption,
    Drawer,
} from 'react-native-paper';
import { DrawerContentScrollView, DrawerItem } from '@react-navigation/drawer';
function Drawercontent(props) {
    return (
        <View style={{ flex: 1 }}>
            <DrawerContentScrollView {...props}>
                <View style={styles.drawerContent}>
                    <View style={styles.userInfoSection}>
                        <View style={{ flexDirection: 'row', marginTop: 15 }}>
                            <Image style={{
                                marginLeft: 10, width: 100, height: 100
                            }}
                                source={require('../images/donald.jpg')}

                            />
                            <View style={{ marginLeft: 15, flexDirection: 'column' }}>
                                <Title style={styles.title}>Donald</Title>
                                <Caption style={styles.caption}>America President</Caption>
                            </View>
                        </View>


                    </View>

                    <Drawer.Section style={styles.drawerSection}>
                        <DrawerItem

                            icon={({ color, size }) => (
                                <Image style={{
                                    marginLeft: 10, marginRight: -15, width: 30, height: 30
                                }}
                                    source={require('../images/side_home.png')} />)}

                            label="Home"
                            onPress={() => { props.navigation.navigate('Mainhome') }}
                        />
                        <DrawerItem

                            icon={({ color, size }) => (
                                <Image style={{
                                    marginLeft: 10, marginRight: -15, width: 30, height: 30
                                }}
                                    source={require('../images/my_services_selected.png')} />)}

                            label="My Service"
                            onPress={() => { props.navigation.navigate('Mainhome') }}
                        />
                        <DrawerItem

                            icon={({ color, size }) => (
                                <Image style={{
                                    marginLeft: 10, marginRight: -15, width: 30, height: 30
                                }}
                                    source={require('../images/side_custom_requests.png')} />)}

                            label="Coustom requests"
                            onPress={() => { props.navigation.navigate('Mainhome') }}
                        />
                        <DrawerItem

                            icon={({ color, size }) => (
                                <Image style={{
                                    marginLeft: 10, marginRight: -15, width: 30, height: 30
                                }}
                                    source={require('../images/side_inbox.png')} />)}

                            label="Inbox"
                            onPress={() => { props.navigation.navigate('Mainhome') }}
                        />
                        <DrawerItem

                            icon={({ color, size }) => (
                                <Image style={{
                                    marginLeft: 10, marginRight: -15, width: 30, height: 30
                                }}
                                    source={require('../images/side_my_profile.png')} />)}

                            label="MyProfile"
                            onPress={() => { props.navigation.navigate('Mainhome') }}
                        />
                        <DrawerItem

                            icon={({ color, size }) => (
                                <Image style={{
                                    marginLeft: 10, marginRight: -15, width: 30, height: 30
                                }}
                                    source={require('../images/service_published.png')} />)}

                            label="Become Verified"
                            onPress={() => { props.navigation.navigate('Mainhome') }}
                        />
                        <DrawerItem

                            icon={({ color, size }) => (
                                <Image style={{
                                    marginLeft: 10, marginRight: -15, width: 30, height: 30
                                }}
                                    source={require('../images/side_report_an_issue.png')} />)}

                            label="Report an issue"
                            onPress={() => { props.navigation.navigate('Mainhome') }}
                        />
                        <DrawerItem

                            icon={({ color, size }) => (
                                <Image style={{
                                    marginLeft: 10, marginRight: -15, width: 30, height: 30
                                }}
                                    source={require('../images/side_terms_conditions.png')} />)}

                            label="Terms and condition of use"
                            onPress={() => { props.navigation.navigate('Mainhome') }}
                        />
                        <DrawerItem

                            icon={({ color, size }) => (
                                <Image style={{
                                    marginLeft: 10, marginRight: -15, width: 30, height: 30
                                }}
                                    source={require('../images/side_help_and_support.png')} />)}

                            label="Help & Support"
                            onPress={() => { props.navigation.navigate('Mainhome') }}
                        />
                        <DrawerItem

                            icon={({ color, size }) => (
                                <Image style={{
                                    marginLeft: 10, marginRight: -15, width: 30, height: 30
                                }}
                                    source={require('../images/notification_settings_icon.png')} />)}

                            label="Notification Setting"
                            onPress={() => { props.navigation.navigate('Mainhome') }}
                        />
                        <DrawerItem

                            icon={({ color, size }) => (
                                <Image style={{
                                    marginLeft: 10, marginRight: -15, width: 30, height: 30
                                }}
                                    source={require('../images/side_logout.png')} />)}

                            label="Logout"
                            onPress={() => Actions.Wellcome()}
                        />
                    </Drawer.Section>
                </View>
            </DrawerContentScrollView>
        </View>
    );
}
export default Drawercontent;

const styles = StyleSheet.create({
    drawerContent: {
        flex: 1,
    },
    userInfoSection: {
        paddingLeft: 20,
    },
    title: {
        fontSize: 16,
        marginTop: 25,
        fontWeight: 'bold',
    },
    caption: {
        fontSize: 14,
        lineHeight: 14,
    },
    row: {
        marginTop: 20,
        flexDirection: 'row',
        alignItems: 'center',
    },
    section: {
        flexDirection: 'row',
        alignItems: 'center',
        marginRight: 15,
    },
    paragraph: {
        fontWeight: 'bold',
        marginRight: 3,
    },
    drawerSection: {
        marginTop: 15,
    },
    bottomDrawerSection: {
        marginBottom: 15,
        borderTopColor: '#f4f4f4',
        borderTopWidth: 1
    },
    preference: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingVertical: 12,
        paddingHorizontal: 16,
    },

});


