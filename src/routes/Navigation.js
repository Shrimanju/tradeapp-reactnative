import React from 'react';

import Login from '../pages/Login.js';
import Signup from '../pages/Signup.js';
import Signup1 from '../pages/Signup1.js';
import Wellcome from '../pages/Wellcome.js';
import Home from './Home.tsx';
import { Router, Scene } from 'react-native-router-flux';


const Navigation = () => {
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