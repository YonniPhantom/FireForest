import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';
import React, { useState } from 'react';

const Register = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    return (
        <View style={styles.container}>

            <View style={styles.section}>
                <Text style={styles.subtitle}>Nombre:</Text>
                <TextInput style={styles.input} placeholder="Juanito Perez"  />
                <Text style={styles.subtitle}>Correo Electrónico</Text>
                <TextInput style={styles.input} placeholder="example@domain.com"  />
                <Text style={styles.subtitle}>Contraseña</Text>
                <TextInput style={styles.input} placeholder="*******" secureTextEntry={true} />
                <Text style={styles.subtitle}>Repite la Contraseña</Text>
                <TextInput style={styles.input} placeholder="*******" secureTextEntry={true} />
                <TouchableOpacity style={styles.button} onPress={() => console.log('Presionado')}>
                    <Text style={styles.text}>Continuar</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};

export default Register;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor:'#f1f1f1',
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
        width: '100%', 
        height: 60, 
        borderColor: 'gray', 
        borderBottomWidth: 1, 
        marginBottom: 20, 
        fontSize: 16, 
        padding: 10, 
      },
    button: {
        backgroundColor: '#000000', 
        paddingHorizontal: 20,
        paddingVertical: 10,
        borderRadius: 20,
    },
    text: {
        color: '#FFFFFF', 
        fontSize: 16,
        textAlign: 'center',
    },
});
