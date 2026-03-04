import React from 'react';
import {View, Text, StyleSheet, ImageBackground, Image, TouchableOpacity } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import backgroundImage from '../../assets/Menu_Principal.jpg'; 
import logoImage from '../../assets/logoPP.jpg';

const MainMenuScreen = ({ navigation }) => {
  return (
    <LinearGradient colors={['#1C2E4A', '#0A0F24']} style={styles.container}>
      <ImageBackground source={backgroundImage} style={styles.background}>

        <View style={styles.content}>
          <Text style={styles.title}>MENU PRINCIPAL</Text>
          <Image source={logoImage} style={styles.logo} />
          <TouchableOpacity
            style={styles.button}
            onPress={() => navigation.navigate('Order')}>
            <Text style={styles.buttonText}>EMPLOYED</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.button}
            onPress={() => navigation.navigate('Customer')}>
            <Text style={styles.buttonText}>CUSTOMER</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.button}
            onPress={() => alert('Pizzeria TECNM - Proyecto React Native')}>
            <Text style={styles.buttonText}>US</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.exitButton}
            onPress={() => navigation.replace('Login')}>
            <Text style={styles.buttonText}>EXIT</Text>
          </TouchableOpacity>
        </View>
      </ImageBackground>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1 },

  background: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },

  content: {
    width: '85%',
    alignItems: 'center'
  },

  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 20
  },

  logo: {
    width: 80,
    height: 80,
    marginBottom: 30,
    resizeMode: 'contain'
  },

  button: {
    width: '100%',
    backgroundColor: '#179ec7',
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
    marginBottom: 60
  },

  exitButton: {
    width: '50%',
    backgroundColor: '#FF3B3B',
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
    marginTop: 10
  },

  buttonText: {
    fontWeight: 'bold',
    color: '#fff'
  }
});

export default MainMenuScreen;