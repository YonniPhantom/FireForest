import { StyleSheet, Text, View, TextInput } from 'react-native'
import React, { useState } from 'react'

const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");


    return (
        <View style={styles.container}>
            <Text style={styles.title}>Inicia Sesión</Text>

            <View>
                <View style={styles.section}>
                    <Text style={styles.subtitle}>Correo Electrónico</Text>
                    <TextInput style={styles.input} placeholder="example@domain.com" value={email} onChangeText={setEmail} />
                </View>
            </View>
        </View>
    )
}

export default Login

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    title: {
        fontSize: 26,
        fontWeight: 'bold',
        marginBottom: 50
    },
    section: {
        width: 300,
        height: 50
    },
    subtitle: {
        color: 'gray',
        fontWeight: 'bold',
        marginBottom: 10
    },
    input: {
        backgroundColor: 'lightgray',
        borderRadius: 15,
        height: 40
    }
})