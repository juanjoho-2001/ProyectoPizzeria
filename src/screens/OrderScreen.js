import React, { useState, useContext } from 'react';
import { View, Text, StyleSheet, ImageBackground, TouchableOpacity, TextInput } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import { LinearGradient } from 'expo-linear-gradient';
import backgroundImage from '../../assets/Order.jpg';
import { OrderContext } from '../../context/OrderContext'; // <-- importamos el contexto

const OrderScreen = ({ route, navigation }) => {
    const pizzas = route.params?.pizzas || [];
    const { addOrder } = useContext(OrderContext); // <-- usamos addOrder del contexto

    const [selectedPizza, setSelectedPizza] = useState('');
    const [selectedSize, setSelectedSize] = useState('');
    const [amount, setAmount] = useState('');
    const [price, setPrice] = useState('$0');

    const updatePrice = (pizzaName, size, qty) => {
        const pizza = pizzas.find(p => p.name === pizzaName);
        if (pizza && size && qty) {
            const unitPrice = size === 'Chica'
                ? parseInt(pizza.smallPrice.replace('$', ''))
                : parseInt(pizza.largePrice.replace('$', ''));
            const quantity = parseInt(qty) || 0;
            setPrice(`$${unitPrice * quantity}`);
        } else {
            setPrice('$0');
        }
    };

    const placeOrder = () => {
        if (!selectedPizza || !selectedSize || !amount) {
            alert('Por favor completa todos los campos');
            return;
        }

        const order = {
            pizza: selectedPizza,
            size: selectedSize,
            amount,
            total: price
        };

        addOrder(order); // <-- agregamos la orden al contexto

        console.log("Orden guardada:", order);
        alert(`Orden guardada correctamente:\n${amount} ${selectedPizza} (${selectedSize}) - Total: ${price}`);

        // resetear los campos
        setSelectedPizza('');
        setSelectedSize('');
        setAmount('');
        setPrice('$0');
    };

    return (
        <LinearGradient colors={['#1C2E4A', '#0A0F24']} style={styles.container}>
            <ImageBackground source={backgroundImage} style={styles.background}>
                <View style={styles.content}>
                    <Text style={styles.title}>ORDER</Text>

                    <Text style={styles.label}>TYPE:</Text>
                    <Picker
                        selectedValue={selectedPizza}
                        onValueChange={(value) => {
                            setSelectedPizza(value);
                            updatePrice(value, selectedSize, amount);
                        }}
                        style={styles.picker}
                    >
                        <Picker.Item label="Selecciona tu pizza" value="" />
                        {pizzas.map((pizza, index) => (
                            <Picker.Item key={index} label={pizza.name} value={pizza.name} />
                        ))}
                    </Picker>

                    <Text style={styles.label}>SIZE:</Text>
                    <Picker
                        selectedValue={selectedSize}
                        onValueChange={(value) => {
                            setSelectedSize(value);
                            updatePrice(selectedPizza, value, amount);
                        }}
                        style={styles.picker}
                    >
                        <Picker.Item label="Selecciona tu tamaño" value="" />
                        <Picker.Item label="Chica" value="Chica" />
                        <Picker.Item label="Grande" value="Grande" />
                    </Picker>

                    <Text style={styles.label}>AMOUNT:</Text>
                    <TextInput
                        style={styles.amountInput}
                        keyboardType="numeric"
                        placeholder="Cantidad de pizza"
                        value={amount}
                        onChangeText={(text) => {
                            setAmount(text);
                            updatePrice(selectedPizza, selectedSize, text);
                        }}
                    />

                    <Text style={styles.priceText}>TOTAL: {price}</Text>

                    <TouchableOpacity style={styles.button} onPress={placeOrder}>
                        <Text style={styles.buttonText}>ORDENAR</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.exitButton} onPress={() => navigation.replace('Customer')}>
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
    width: '85%',
    alignItems: 'center',
  },

  title: {
    fontSize: 36,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 20,
  },

  label: {
    fontSize: 18,
    color: '#fff',
    marginTop: 15,
    marginBottom: 5,
  },

  picker: {
    width: '100%',
    backgroundColor: '#fff',
    borderRadius: 10,
    marginBottom: 15,
  },

  amountInput: {
    width: '100%',
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 10,
    fontSize: 16,
    marginBottom: 15,
  },

  priceText: {
    fontSize: 20,
    color: '#fff',
    fontWeight: 'bold',
    marginVertical: 10,
    textAlign: 'center',
  },

  button: {
    width: '100%',
    backgroundColor: '#179ec7',
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
    marginVertical: 15,
  },

  exitButton: {
    width: '50%',
    backgroundColor: '#FF3B3B',
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
    marginTop: 50,
  },

  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
  },
});

export default OrderScreen;