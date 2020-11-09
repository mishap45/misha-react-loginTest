import React, { useContext } from 'react'
import SignIn from './SignIn'
import ConnectyCube from 'react-native-connectycube'
import { ProfileContextSet } from '../../context/context'

const SignIn_Container = ({ navigation }) => {

    const userIdSet = useContext(ProfileContextSet);

    const signIn = (login, password) => {

        const CREDENTIALS = {
            appId: 3660,
            authKey: "XyRCjzMDWjHSZnO",
            authSecret: "HfaWbKFF5h7XVSS"
        };

        ConnectyCube.init(CREDENTIALS);

        const userCredentials = { login: login, password: password };

        ConnectyCube.createSession(userCredentials)
            .then((session) => {
                userIdSet(session);
                return navigation.navigate('Profile')
            })
            .catch((error) => {alert('Uncorrect login or password')});
    };

    return <SignIn navigation={navigation} signIn={signIn} />
};

export default SignIn_Container