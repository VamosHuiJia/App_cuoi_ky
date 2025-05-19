import React from 'react';
import { View, Text, FlatList, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useApp } from '../components/AppContext';

export default function CartScreen({ navigation }) {
  const { cart, removeFromCart, updateCartQty } = useApp();
  const total = cart.reduce((sum, item) => sum + item.product.price.replace(/\D/g, '') * item.qty, 0);
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Giỏ hàng</Text>
      <FlatList
        data={cart}
        keyExtractor={item => item.product.id.toString()}
        renderItem={({ item }) => (
          <View style={styles.card}>
            <Image source={item.product.image} style={styles.image} />
            <View style={{ flex: 1 }}>
              <Text style={styles.name}>{item.product.name}</Text>
              <Text style={styles.price}>{item.product.price} x {item.qty}</Text>
              <View style={styles.qtyRow}>
                <TouchableOpacity onPress={() => updateCartQty(item.product.id, Math.max(1, item.qty - 1))}>
                  <Ionicons name="remove-circle-outline" size={22} color="#3182ce" />
                </TouchableOpacity>
                <Text style={styles.qty}>{item.qty}</Text>
                <TouchableOpacity onPress={() => updateCartQty(item.product.id, item.qty + 1)}>
                  <Ionicons name="add-circle-outline" size={22} color="#3182ce" />
                </TouchableOpacity>
                <TouchableOpacity onPress={() => removeFromCart(item.product.id)} style={{marginLeft:12}}>
                  <Ionicons name="trash" size={22} color="#e53e3e" />
                </TouchableOpacity>
              </View>
            </View>
          </View>
        )}
        ListEmptyComponent={<Text style={{textAlign:'center',marginTop:32,color:'#a0aec0'}}>Giỏ hàng trống</Text>}
      />
      <Text style={styles.total}>Tổng tiền: {total.toLocaleString()}đ</Text>
      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Checkout')} disabled={cart.length === 0}>
        <Text style={styles.buttonText}>Thanh toán</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { 
    flex: 1, 
    backgroundColor: '#f7fafc', 
    padding: 16 
  },
  title: { 
    marginTop: 20,
    fontSize: 22, 
    fontWeight: 'bold', 
    marginBottom: 12, 
    color: '#2d3748' 
  },
  card: { 
    flexDirection: 'row', 
    alignItems: 'center', 
    backgroundColor: '#fff', 
    borderRadius: 10, 
    padding: 12, 
    marginBottom: 10, 
    elevation: 2 
  },
  image: { 
    width: 60, 
    height: 60, 
    borderRadius: 8, 
    marginRight: 12 
  },
  name: { 
    fontSize: 16, 
    fontWeight: 'bold', 
    color: '#2d3748' 
  },
  price: { 
    color: '#38a169', 
    fontWeight: 'bold', 
    marginTop: 4 
  },
  qtyRow: { 
    flexDirection: 'row', 
    alignItems: 'center', 
    marginTop: 8 
  },
  qty: { 
    fontSize: 16, 
    fontWeight: 'bold', 
    marginHorizontal: 8 
  },
  total: { 
    fontSize: 18, 
    fontWeight: 'bold', 
    color: '#e53e3e', 
    marginVertical: 16, 
    textAlign: 'right' 
  },
  button: { 
    backgroundColor: '#3182ce', 
    paddingVertical: 12, 
    borderRadius: 8, 
    alignItems: 'center', 
    opacity: 1 
  },
  buttonText: { 
    color: '#fff', 
    fontSize: 18, 
    fontWeight: 'bold' 
  },
}); 