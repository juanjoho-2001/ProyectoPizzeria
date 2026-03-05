import React, { useContext } from 'react';
import { View, Text, ScrollView, StyleSheet, ImageBackground, TouchableOpacity } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import starsImage from '../../assets/Order.jpg';
import { OrderContext } from '../../context/OrderContext';

const EmployedScreen = ({ navigation }) => {
  const { orders } = useContext(OrderContext);

  return (
    <LinearGradient colors={['#0A0F24', '#1C2E4A']} style={styles.container}>
      <ImageBackground source={starsImage} style={styles.background}>
        <View style={styles.content}>
          <Text style={styles.title}>ORDERS</Text>

          <ScrollView style={styles.scrollContainer}>
            {orders && orders.length > 0 ? (
              orders.map((order, index) => (
                <View key={index} style={styles.orderContainer}>
                  {order ? (
                    <Text style={styles.orderText}>
                      Pizza: {order.pizza} | Tamaño: {order.size} | Cantidad: {order.amount} | Total: {order.total}
                    </Text>
                  ) : (
                    <Text style={styles.orderText}>Empty</Text>
                  )}
                </View>
              ))
            ) : (
              <>
                <View style={styles.orderContainer}>
                  <Text style={styles.orderText}>Empty</Text>
                </View>
                <View style={styles.orderContainer}>
                  <Text style={styles.orderText}>Empty</Text>
                </View>
                <View style={styles.orderContainer}>
                  <Text style={styles.orderText}>Empty</Text>
                </View>
              </>
            )}
          </ScrollView>

          <TouchableOpacity
            style={styles.exitButton}
            onPress={() => navigation.replace('Login')}
          >
            <Text style={styles.exitButtonText}>EXIT</Text>
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
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },

  content: {
    width: '85%',
    alignItems: 'center',
    paddingVertical: 20,
  },

  title: {
    fontSize: 40,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 50,
    textAlign: 'center',
  },

  scrollContainer: {
    width: '100%',
    maxHeight: 350,
  },

  orderContainer: {
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
    padding: 12,
    borderRadius: 10,
    borderWidth: 2,
    borderColor: '#fff',
    marginBottom: 12,
    width: '100%',
    alignItems: 'center',
  },

  orderText: {
    fontSize: 16,
    color: '#fff',
    textAlign: 'center',
    marginBottom: 40,
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

export default EmployedScreen;