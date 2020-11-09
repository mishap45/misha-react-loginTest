import React from 'react'
import { View, TextInput, StyleSheet, Pressable, Text } from 'react-native'
import { Formik } from 'formik'
import * as yup from 'yup'

const SingUp = ({ navigation, signUp }) => {

    const nameRegex = /^[A-Za-z]+$/;

    const registerValidationSchema = yup.object().shape({
        login: yup
            .string()
            .matches(nameRegex, "Only English letters")
            .required('LogIn is required'),
        fullName: yup
            .string()
            .matches(nameRegex, "Only English letters")
            .required('Full Name is required'),
        password: yup
            .string()
            .min(8, ({ min }) => `Password must be at least ${min} characters`)
            .required('Password is required'),
    });

    return (
        <Formik
            initialValues={{ login: '', fullName: '', password: '' }}
            onSubmit={ values => {
                signUp(values.login, values.fullName, values.password);

                values.login = '';
                values.fullName = '';
                values.password = ''
            }}
            validationSchema={registerValidationSchema}
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
                        onChangeText={handleChange('fullName')}
                        onBlur={handleBlur('fullName')}
                        value={values.fullName}
                        placeholder={'Full Name'}
                        style={stylesSignUp.inputForm}
                        placeholderTextColor={'#606B77'}
                    />
                    { errors.fullName && <Text style={{ fontSize: 10, color: 'red' }}>{errors.fullName}</Text> }

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
                        <Text style={stylesSignUp.textButton}>Register</Text>
                    </Pressable>

                    <Text style={stylesSignUp.already}>Already registered?
                        <Text style={stylesSignUp.login} onPress={()=>navigation.navigate('📱SignIn📱')}
                        > LogIn</Text></Text>
                </View>
            )}
        </Formik>
    )
};

export const stylesSignUp = StyleSheet.create({
    inputForm: {
        paddingVertical: 10,
        color: '#606B77',
        backgroundColor: '#16202A',
        borderBottomColor: '#606B77',
        borderBottomWidth: 1,
        marginBottom: 15,
        width: '75%'
    },

    formBlock: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#16202A'
    },

    submitButton: {
        width: '25%',
        backgroundColor: '#20A0EF',
        borderRadius: 20
    },

    textButton: {
        color: '#FEFFFF',
        paddingVertical: 10,
        fontWeight: '500',
        textAlign: 'center'
    },

    already: {
        textAlign: 'center',
        color: '#606B77',
        fontSize: 14,
        marginTop: 10
    },

    login: {
        color: '#20A0EF',
        fontSize: 14
    }
});

export default SingUp