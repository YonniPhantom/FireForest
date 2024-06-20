import { StyleSheet, Text, View, TextInput, TouchableWithoutFeedback, Keyboard, TouchableOpacity, SafeAreaView, Image } from 'react-native'
import React, { useState, useContext } from 'react'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { CredentialsContext } from '../../Components/CredentialsContext';
import { useNavigation } from '@react-navigation/native';

const Login = () => {
    const navigation = useNavigation();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const [message, setMessage] = useState("");

    const { setStoredCredentials } = useContext(CredentialsContext);

    const handleLogin = async () => {
        if (!email || !password) return setMessage("Llena todos los datos");

        setStoredCredentials({ email, password });
    }


    return (
        <KeyboardAwareScrollView style={{ flex: 1 }} resetScrollToCoords={{ x: 0, y: 0 }} scrollEnabled={true}>
            <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                <SafeAreaView>

                    <View style={styles.container}>

                        <Image style={styles.imagen} source={require("../../../assets/adaptive-icon.png")} />

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
                            <View style={[styles.section,{flexDirection: 'row',justifyContent:"center"}]}>
                                
                                <Text style={styles.forgote}>¿Olvidaste tu contraseña?</Text>
                                <TouchableOpacity onPress={handleLogin}style={{marginLeft: 8}} >
                                    <Text style={styles.forgotebutton}>Restablecela</Text>
                                </TouchableOpacity>
                            </View>

                            <TouchableOpacity onPress={handleLogin} style={[styles.loginButton,{marginTop: -50}]}>
                                <Text style={styles.buttonText}>Ingresar</Text>
                            </TouchableOpacity>

                            <View style={[styles.section,{flexDirection: 'row',marginTop: 20,justifyContent:"center"}]}>
                                
                                <Text style={styles.forgote}>¿No tienes cuenta?</Text>
                                <TouchableOpacity onPress={()=>navigation.navigate("Register")}style={{marginLeft: 8}} >
                                    <Text style={styles.forgotebutton}>Registrate</Text>
                                </TouchableOpacity>
                            </View>
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
    imagen: {
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
        fontFamily: 'monospace',
        marginBottom: 10,
        fontSize: 20
    },
    forgote: {
        color: 'gray',
        fontWeight: 'bold',
        fontFamily: 'monospace',
        marginBottom: 10,
        fontSize: 20
    },
    forgotebutton:{
        color: 'red',
        fontStyle:'italic',
        fontFamily: 'monospace',
        marginBottom: 10,
        fontSize: 20
    },
    form: {
        alignItems: 'center',
        justifyContent: 'center'
    },
    input: {
        height: 40,

        borderBottomWidth: 0.5,
        fontSize: 18
    },
    loginButton: {
        backgroundColor: 'red',
        width: 300,
        height: 60,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 25
    },
    buttonText: {
        color: 'white',
        fontSize: 20,
        fontWeight: 'bold'
    },
    errorMessage: {
        color: 'red',
        marginBottom: 10
    }
})