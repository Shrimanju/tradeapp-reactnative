import React, { useEffect } from 'react';
import { View, ActivityIndicator } from 'react-native'
import Login from '../EntryPages/Login.js';
import Signup from '../EntryPages/Signup.js';
import Signup1 from '../EntryPages/Signup1.js';
import Wellcome from '../EntryPages/Wellcome.js';
import Home from './Home.tsx';
import { Router, Scene } from 'react-native-router-flux';
// import { ActivityIndicator } from 'react-native-paper';


const Navigation = () => {
    const [isLoading, setIsLoading] = React.useState(true);
    const [userToken, setUserToken] = React.useState(true);

    useEffect(() => {
        setTimeout(() => {
            setIsLoading(false);
        }, 1000);
    },

        []);



    if (isLoading) {
        return (
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>

                <ActivityIndicator color='black'
                    size="large" />
            </View>
        );
    }
    return (

        <Router>
            <Scene key="root" hideNavBar={true}>
                <Scene key="Wellcome"
                    component={Wellcome}
                    title="Wellcome"
                    initial
                />
                <Scene key="Login"
                    component={Login}
                    title="Login"

                />
                <Scene key="Signup"
                    component={Signup}
                    title="Signup"

                />
                <Scene key="Signup1"
                    component={Signup1}
                    title="Signup1"

                />
                <Scene
                    key="Home"
                    component={Home}
                    title="Home"

                />
            </Scene>
        </Router>

    );
}

export default Navigation;