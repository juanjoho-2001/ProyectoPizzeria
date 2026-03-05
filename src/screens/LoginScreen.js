import React, { useState } from 'react';
import {View, Text, TextInput, StyleSheet, Alert, ImageBackground, Image, TouchableOpacity,  BackHandler} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import backgroundImage from '../../assets/fondo.jpg';
import logoImage from '../../assets/logoPP.jpg';

const LoginScreen = ({ navigation }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const users = [
    { id: 1, username: 'Admin', password: '1234' },
    { id: 2, username: 'Juan', password: '2121' },
    { id: 3, username: 'Jair', password: '2026' },
  ];

  const handleLogin = () => {
    const userFound = users.find(
      (user) => user.username === username && user.password === password
    );

    if (userFound) {
      navigation.replace('MainMenu');
    } else {
      Alert.alert('Error', 'Usuario o contraseña incorrectos');
    }
  };

  const handleExit = () => {

    Alert.alert(
      "Salir",
      "¿Deseas cerrar la aplicación?",
      [
        {
          text: "Cancelar",
          style: "cancel"
        },
        {
          text: "Salir",
          onPress: () => BackHandler.exitApp()
        }
      ]
    );

  };


  return (
    <LinearGradient colors={['#0A0F24', '#1C2E4A']} style={styles.container}>
      <ImageBackground source={backgroundImage} style={styles.background}>

        <View style={styles.content}>
          <Text style={styles.welcome}>
            BIENVENIDO A PIZZERIA TECNM
          </Text>
          <Image source={logoImage} style={styles.logo} />
          <Text style={styles.subtitle}>INICIAR SESIÓN</Text>
          <TextInput
            placeholder="User"
            value={username}
            onChangeText={setUsername}
            style={styles.input}
          />
          <TextInput
            placeholder="Password"
            value={password}
            onChangeText={setPassword}
            secureTextEntry
            style={styles.input}
          />
          <TouchableOpacity style={styles.loginButton} onPress={handleLogin}>
            <Text style={styles.buttonText}>LOGIN</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.exitButton} onPress={handleExit}>
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

  welcome: {
    fontSize: 30,
    fontWeight: 'bold',
    color: '#fd8905',
    marginBottom: 20,
    textAlign: 'center'
  },

  logo: {
    width: 120,
    height: 120,
    marginBottom: 20,
    resizeMode: 'contain'
  },

  subtitle: {
    fontSize: 25,
    fontWeight: 'bold',
    color: '#fd8905',
    marginBottom: 20
  },

  input: {
    width: '100%',
    height: 50,
    borderWidth: 2,
    borderRadius: 10,
    marginBottom: 15,
    paddingHorizontal: 10,
    backgroundColor: '#fff'
  },

  loginButton: {
    width: '100%',
    backgroundColor: '#000',
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
    alignItems: 'center'
  },

  buttonText: {
    fontWeight: 'bold',
    color: '#fff'
  }
});

export default LoginScreen;