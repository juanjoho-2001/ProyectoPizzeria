import React from 'react';
import { View, Text, StyleSheet, ScrollView, ImageBackground, TouchableOpacity } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import starsImage from '../../assets/Menu.jpg';

const MenuScreen = ({ navigation }) => {
  const pizzas = [
    { name: 'HAWAIANA', smallPrice: '$120', largePrice: '$150' },
    { name: 'PEPERONI', smallPrice: '$120', largePrice: '$150' },
    { name: 'SALCHICHA', smallPrice: '$120', largePrice: '$150' },
    { name: 'CUBANA', smallPrice: '$150', largePrice: '$200' },
  ];

  return (
    <LinearGradient colors={['#0A0F24', '#1C2E4A']} style={styles.container}>
      <ImageBackground source={starsImage} style={styles.background}>
        <Text style={styles.title}>MENU</Text>

        <ScrollView style={styles.menuContainer}>
          {pizzas.map((pizza, index) => (
            <TouchableOpacity
              key={index}
              style={styles.pizzaItem}
              onPress={() => navigation.navigate('Order', { pizzas: pizzas, selectedPizza: pizza.name })}
            >
              <Text style={styles.pizzaName}>
                {pizza.name} ........ {pizza.smallPrice} CH  {pizza.largePrice} G
              </Text>
            </TouchableOpacity>
          ))}
        </ScrollView>

        <TouchableOpacity
          style={styles.exitButton}
          onPress={() => navigation.replace('Login')}
        >
          <Text style={styles.exitButtonText}>EXIT</Text>
        </TouchableOpacity>
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
    width: '100%',
    justifyContent: 'flex-start',
    alignItems: 'center',
    paddingVertical: 40,
  },

  title: {
    fontSize: 40,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 40,
    textAlign: 'center',
  },

  menuContainer: {
    width: '90%',
    backgroundColor: 'rgba(182, 170, 170, 0.6)',
    borderRadius: 20,
    padding: 28,
    maxHeight: '50%',
  },

  pizzaItem: {
    paddingVertical: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#fff',
  },

  pizzaName: {
    fontSize: 18,
    color: '#fff',
    fontWeight: 'bold',
  },

  exitButton: {
    width: '50%',
    backgroundColor: '#FF3B3B',
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
    marginTop: 70,
  },

  exitButtonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
  },
});

export default MenuScreen;