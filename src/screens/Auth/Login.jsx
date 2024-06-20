import { StyleSheet, Text, View, TextInput, TouchableWithoutFeedback, Keyboard, TouchableOpacity, SafeAreaView, Image } from 'react-native'
import React, { useState, useContext } from 'react'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { CredentialsContext } from '../../Components/CredentialsContext';

const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const [message, setMessage] = useState("");

    const { setStoredCredentials } = useContext(CredentialsContext);

    const handleLogin = async () => {
        if(!email || !password) return setMessage("Llena todos los datos");

        setStoredCredentials({ email, password });
    }

    return (
        <KeyboardAwareScrollView style={{ flex: 1 }} resetScrollToCoords={{ x: 0, y: 0 }} scrollEnabled={true}>
            <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                <SafeAreaView>

                    <View style={styles.container}>

                        <Image style={styles.imagen} source={require("../../../assets/iconito.jpg")} />

                        <View style={styles.form}>
                            <Text style={styles.errorMessage}>{message}</Text>

                            <View style={styles.section}>
                                <Text style={styles.subtitle}>Correo Electrónico</Text>
                                <TextInput style={styles.input} placeholder="example@domain.com" inputMode={'email'} keyboardType={'email-address'} value={email} onChangeText={setEmail} />
                            </View>

                            <View style={styles.section}>
                                <Text style={styles.subtitle}>Contraseña</Text>
                                <TextInput style={styles.input} placeholder="********" secureTextEntry={true} value={password} onChangeText={setPassword} />
                            </View>
                            <View style={styles.section}>
                                <Text style={styles.subtitle}>¿Olvidaste tu contraseña?</Text>
                            </View>
                            <TouchableOpacity onPress={handleLogin} style={styles.loginButton}>
                                <Text style={styles.buttonText}>Ingresar</Text>
                            </TouchableOpacity>
                        </View>

                    </View>
                </SafeAreaView>
            </TouchableWithoutFeedback>
        </KeyboardAwareScrollView>
    )
}

export default Login
//Fuente: Inika
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 200
    },
    imagen:{
        width: 200,
        height: 200
    },
    title: {
        fontSize: 26,
        fontWeight: 'bold',
        marginBottom: 50
    },
    section: {
        width: 300,
        height: 50,
        marginBottom: 50

    },
    subtitle: {
        color: 'gray',
        fontWeight: 'bold',
        fontFamily:'monospace',
        marginBottom: 10
    },
    form: {
        alignItems: 'center',
        justifyContent: 'center'
    },
    input: {
        height: 40,
        textAlign: 'center',
        borderBottomWidth: 0.5
    },
    loginButton: {
        backgroundColor: 'purple',
        width: 200,
        height: 40,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 25
    },
    buttonText: {
        color: 'white',
        fontSize: 16,
        fontWeight: 'bold'
    },
    errorMessage: {
        color: 'red',
        marginBottom: 10
    }
})