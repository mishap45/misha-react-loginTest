import React from 'react'
import SignUp from './SignUp'
import ConnectyCube from 'react-native-connectycube'

const SignUp_Container = ({ navigation }) => {

    const signUp = (login, fullName, password) => {

        const CREDENTIALS = {
            appId: 3660,
            authKey: "XyRCjzMDWjHSZnO",
            authSecret: "HfaWbKFF5h7XVSS"
        };

        ConnectyCube.init(CREDENTIALS);

        const userCredentials = { login: "MiLov", password: "ogame000" };

        ConnectyCube.createSession(userCredentials)
            .then((session) => {
                const userProfile = {
                    login: login,
                    password: password,
                    email: "",
                    full_name: fullName,
                    phone: "",
                    website: "",
                    tag_list: [],
                    custom_data: JSON.stringify({ middle_name: "" }),
                };

                ConnectyCube.users
                    .signup(userProfile)
                    .then((user) => {return navigation.navigate('📱SignIn📱')})
                    .catch((error) => {alert(JSON.stringify(error))});
            })
            .catch((error) => {alert(JSON.stringify(error))});
    };

    return <SignUp navigation={navigation} signUp={signUp} />
};

export default SignUp_Container