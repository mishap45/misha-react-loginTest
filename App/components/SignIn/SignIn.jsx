import React from 'react'
import { View, TextInput, Pressable, Text } from 'react-native'
import { Formik } from 'formik'
import { stylesSignUp } from '../SignUp/SignUp'
import * as yup from "yup";

const SignIn = ({ navigation, signIn }) => {

    const nameRegex = /^[A-Za-z]+$/;

    const loginValidationSchema = yup.object().shape({
        login: yup
            .string()
            .matches(nameRegex, "Only English letters")
            .required('LogIn is required'),
        password: yup
            .string()
            .min(8, ({ min }) => `Password must be at least ${min} characters`)
            .required('Password is required'),
    });

    return (
        <Formik
            initialValues={{ login: '', password: '' }}
            onSubmit={values => {
                signIn(values.login, values.password);

                values.login = '';
                values.password = ''
            }}
            validationSchema={loginValidationSchema}
        >
            {({ handleChange, handleBlur, handleSubmit, values, errors, isValid }) => (
                <View style={stylesSignUp.formBlock}>
                    <TextInput
                        onChangeText={handleChange('login')}
                        onBlur={handleBlur('login')}
                        value={values.login}
                        placeholder={'Login'}
                        style={stylesSignUp.inputForm}
                        placeholderTextColor={'#606B77'}
                    />
                    { errors.login && <Text style={{ fontSize: 10, color: 'red' }}>{errors.login}</Text> }

                    <TextInput
                        onChangeText={handleChange('password')}
                        onBlur={handleBlur('password')}
                        value={values.password}
                        placeholder={'Password'}
                        style={stylesSignUp.inputForm}
                        placeholderTextColor={'#606B77'}
                        secureTextEntry={true}
                    />
                    { errors.password  && <Text style={{ fontSize: 10, color: 'red', marginBottom: 5 }}>{errors.password }</Text> }

                    <Pressable onPress={handleSubmit} style={stylesSignUp.submitButton}>
                        <Text style={stylesSignUp.textButton}>LogIn</Text>
                    </Pressable>
                </View>
            )}
        </Formik>
    )
};

export default SignIn