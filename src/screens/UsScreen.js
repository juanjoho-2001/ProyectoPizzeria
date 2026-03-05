import React from 'react';
import { View, Text, StyleSheet, ImageBackground, Image } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import starsImage from '../../assets/Us.jpg';
import logo from '../../assets/logoPP.jpg'; 

const UsScreen = () => {
  return (
    <LinearGradient colors={['#0A0F24', '#1C2E4A']} style={styles.container}>
      <ImageBackground source={starsImage} style={styles.background}>
        <View style={styles.content}>
          <Image source={logo} style={styles.logo} resizeMode="contain" />
          <Text style={styles.title}>Us</Text>
          <Text style={styles.text}>
            Since 2015, at Pizzería TecNM, we craft each pizza with fresh ingredients and homemade sauces. 
            Our recipes combine traditional flavors with creative twists, 
            making every slice a unique experience for our customers.”
          </Text>
        </View>
      </ImageBackground>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },

  background: {
    flex: 1,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },

  content: {
    width: '85%',
    alignItems: 'center',
    paddingVertical: 20,
  },

  logo: {
    width: 150,
    height: 150,
    marginBottom: 50,
  },

  title: {
    fontSize: 36,
    fontWeight: 'bold',
    color: '#fd8905',
    marginBottom: 50,
    fontFamily: 'sans-serif-condensed',
    textAlign: 'center',
  },

  text: {
    fontSize: 20,
    color: '#fff',
    textAlign: 'center',
    fontFamily: 'sans-serif',
    lineHeight: 28,
  },
});

export default UsScreen;