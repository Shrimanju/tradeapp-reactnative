import React from 'react';
import { Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import Mainhome from '../HomePages/Mainhome';
import { createDrawerNavigator } from '@react-navigation/drawer';
import Drawercontent from '../HomePages/Drawercontent';
const Drawer = createDrawerNavigator();

const Drawerhome = () => {
    return (

        <NavigationContainer>

            <Drawer.Navigator drawerContent={props => <Drawercontent{...props} />}>
                <Drawer.Screen name="Mainhome" component={Mainhome} />
            </Drawer.Navigator>

        </NavigationContainer>
    );
}
export default Drawerhome;
