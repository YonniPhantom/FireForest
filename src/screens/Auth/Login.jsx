import { StyleSheet, Text, View, TextInput, Button } from 'react-native';
import React, { useState } from 'react';
import { useNavigation } from '@react-navigation/native';

const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigation = useNavigation();

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Inicia Sesión</Text>
            <View style={styles.section}>
                <Text style={styles.subtitle}>Correo Electrónico</Text>
                <TextInput style={styles.input} placeholder="example@domain.com" value={email} onChangeText={setEmail} />
                <Text style={styles.subtitle}>Contraseña</Text>
                <TextInput style={styles.input} placeholder="*******" secureTextEntry={true} value={password} onChangeText={setPassword} />
                <Button title="Iniciar sesión" onPress={() => navigation.navigate('Home')} />
            </View>
            <Button title="Registrarse" onPress={() => navigation.navigate('Register')} />
        </View>
    );
};

export default Login;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    title: {
        fontSize: 26,
        fontWeight: 'bold',
        marginBottom: 20,
    },
    section: {
        width: 300,
        marginBottom: 20,
    },
    subtitle: {
        color: 'gray',
        fontWeight: 'bold',
        marginBottom: 10,
    },
    input: {
        backgroundColor: 'lightgray',
        borderRadius: 15,
        height: 40,
        marginBottom: 20,
        paddingHorizontal: 10,
    },
});
