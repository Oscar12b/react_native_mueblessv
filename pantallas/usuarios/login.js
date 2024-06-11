import React from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, ImageBackground, Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window');

const LoginScreen = () => {
    return (
        <ImageBackground source={require('./assets/fondo.png')} style={styles.backgroundImage}>
            <View style={styles.container}>
                <View style={styles.formContainer}>
                    <Text style={styles.title}>Iniciar sesión</Text>
                    <Text style={styles.firstTime}>
                        ¿Primera vez que ingresas? <Text style={styles.register}>Registrarme</Text>
                    </Text>
                    <TextInput style={styles.input} placeholder="Usuario" />
                    <TextInput style={styles.input} placeholder="Contraseña" secureTextEntry={true} />
                    <Text style={styles.forgotPassword}>¿Olvidaste tu contraseña?</Text>
                    <TouchableOpacity style={styles.button}>
                        <Text style={styles.buttonText}>Ingresar</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </ImageBackground>
    );
};

const styles = StyleSheet.create({
    backgroundImage: {
        flex: 1,
        resizeMode: 'cover',
    },
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        paddingBottom: 110,
    },
    formContainer: {
        width: '75%',
        padding: 20,
        borderRadius: 30,
        backgroundColor: 'white',
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        textAlign: 'center',
        marginBottom: 20,
    },
    firstTime: {
        fontSize: 14,
        textAlign: 'center',
        marginTop: 5,
        marginBottom: 30,
    },
    register: {
        color: '#1E90FF',
        textDecorationLine: 'underline',
    },
    input: {
        height: 40,
        borderColor: '#DDDDDD',
        borderWidth: 1,
        borderRadius: 5,
        paddingHorizontal: 10,
        marginBottom: 15,
        backgroundColor: '#F5F5F5',
        marginBottom: 20,
    },
    forgotPassword: {
        fontSize: 14,
        color: '#1E90FF',
        textAlign: 'center',
        marginTop: 10,
        marginBottom: 30,
        textDecorationLine: 'underline',
    },
    button: {
        backgroundColor: 'black',
        borderRadius: 15,
        paddingVertical: 10,
        alignItems: 'center',
    },
    buttonText: {
        color: 'white',
        fontSize: 16,
        fontWeight: 'bold',
    },
});

export default LoginScreen;