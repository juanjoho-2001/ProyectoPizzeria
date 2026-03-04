import React from 'react';
import { View, Text, Image, StyleSheet, ImageBackground, TouchableOpacity } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import backgroundImage from '../../assets/Customer.jpg';
import logoImage from '../../assets/logoPP.jpg';

const CustomerScreen = ({ navigation }) => {
    const pizzas = [
        { name: 'HAWAIANA', smallPrice: '$120', largePrice: '$150' },
        { name: 'PEPERONI', smallPrice: '$120', largePrice: '$150' },
        { name: 'SALCHICHA', smallPrice: '$120', largePrice: '$150' },
        { name: 'CUBANA', smallPrice: '$150', largePrice: '$200' }
    ];

    return (
        <LinearGradient colors={['#1C2E4A', '#0A0F24']} style={styles.container}>
            <ImageBackground source={backgroundImage} style={styles.background}>
                <View style={styles.content}>
                    <Text style={styles.title}>CUSTOMER</Text>
                    <Image source={logoImage} style={styles.logo} />
                    <TouchableOpacity style={styles.button}  onPress={() => alert('Menú de pizzas pendiente')}>
                        <Text style={styles.buttonText}>MENU</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Order', { pizzas })}>
                        <Text style={styles.buttonText}>ORDER</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.exitButton} onPress={() => navigation.replace('Login')}>
                        <Text style={styles.buttonText}>EXIT</Text>
                    </TouchableOpacity>
                </View>
            </ImageBackground>
        </LinearGradient>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },

    background: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },

    content: {
        width: '80%',
        alignItems: 'center',
        paddingVertical: 30,
    },

    title: {
        fontSize: 32,         
        fontWeight: 'bold',
        color: '#fff',
        marginBottom: 50,   
        textAlign: 'center',
    },

    logo: {
        width: 80,
        height: 80,
        marginBottom: 50,
        resizeMode: 'contain',
    },

    button: {
        width: '100%',
        backgroundColor: '#179ec7',
        padding: 12,
        borderRadius: 10,
        alignItems: 'center',
        marginBottom: 60,      
    },

    exitButton: {
        width: '60%',
        backgroundColor: '#FF3B3B',
        padding: 12,
        borderRadius: 10,
        alignItems: 'center',
        marginTop: 15,
    },

    buttonText: {
        color: '#fff',
        fontWeight: 'bold',
        fontSize: 16,
    },
});

export default CustomerScreen;