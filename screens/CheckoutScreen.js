import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, TextInput, FlatList, Alert } from 'react-native';
import { useApp } from '../components/AppContext';

const paymentMethods = [
  { id: 1, label: 'Thanh toán khi nhận hàng' },
  { id: 2, label: 'Chuyển khoản ngân hàng' },
];

export default function CheckoutScreen({ navigation }) {
  const { cart } = useApp();
  const [name, setName] = useState('');
  const [address, setAddress] = useState('');
  const [phone, setPhone] = useState('');
  const [payment, setPayment] = useState(paymentMethods[0].id);
  const total = cart.reduce((sum, item) => sum + item.product.price.replace(/\D/g, '') * item.qty, 0);

  const handleOrder = () => {
    Alert.alert('Đặt hàng thành công!', 'Cảm ơn bạn đã mua hàng.', [
      { text: 'Về trang chủ', onPress: () => navigation.navigate('MainTabs', { screen: 'Home' }) }
    ]);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Thanh toán</Text>
      <Text style={styles.label}>Tên người nhận</Text>
      <TextInput style={styles.input} value={name} onChangeText={setName} />
      <Text style={styles.label}>Địa chỉ nhận hàng</Text>
      <TextInput style={styles.input} value={address} onChangeText={setAddress} />
      <Text style={styles.label}>Số điện thoại</Text>
      <TextInput style={styles.input} value={phone} onChangeText={setPhone} keyboardType="phone-pad" />
      <Text style={styles.label}>Phương thức thanh toán</Text>
      {paymentMethods.map(m => (
        <TouchableOpacity key={m.id} style={styles.radioRow} onPress={() => setPayment(m.id)}>
          <View style={[styles.radio, payment === m.id && styles.radioActive]} />
          <Text style={styles.radioLabel}>{m.label}</Text>
        </TouchableOpacity>
      ))}
      <Text style={styles.sectionTitle}>Sản phẩm</Text>
      <FlatList
        data={cart}
        keyExtractor={item => item.product.id.toString()}
        renderItem={({ item }) => (
          <View style={styles.itemRow}>
            <Text style={styles.itemName}>{item.product.name}</Text>
            <Text style={styles.itemQty}>x{item.qty}</Text>
            <Text style={styles.itemPrice}>{item.product.price}</Text>
          </View>
        )}
        ListEmptyComponent={<Text style={{color:'#a0aec0',textAlign:'center'}}>Giỏ hàng trống</Text>}
        style={{marginBottom:8}}
      />
      <Text style={styles.total}>Tổng tiền: {total.toLocaleString()}đ</Text>
      <TouchableOpacity style={styles.button} onPress={handleOrder} disabled={cart.length === 0}>
        <Text style={styles.buttonText}>Xác nhận đặt hàng</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { 
    flex: 1, 
    backgroundColor: '#f7fafc', 
    padding: 24 
  },
  title: { 
    marginTop: 20,
    fontSize: 24, 
    fontWeight: 'bold', 
    marginBottom: 18, 
    color: '#2d3748', 
    textAlign: 'center' 
  },
  label: { 
    fontSize: 16, 
    color: '#4a5568', 
    marginBottom: 4, 
    marginTop: 8 
  },
  input: { 
    backgroundColor: '#fff', 
    borderRadius: 8, 
    paddingHorizontal: 16, 
    height: 44, 
    marginBottom: 4, 
    borderColor: '#ccc', 
    borderWidth: 1 
  },
  radioRow: { 
    flexDirection: 'row', 
    alignItems: 'center', 
    marginBottom: 4, 
    marginLeft: 4 
  },
  radio: { 
    width: 18, 
    height: 18, 
    borderRadius: 9, 
    borderWidth: 2, 
    borderColor: '#3182ce', 
    marginRight: 8 
  },
  radioActive: { 
    backgroundColor: '#3182ce' 
  },
  radioLabel: { 
    fontSize: 15, 
    color: '#2d3748' 
  },
  sectionTitle: { 
    fontSize: 18, 
    fontWeight: 'bold', 
    color: '#2d3748', 
    marginTop: 12, 
    marginBottom: 4 
  },
  itemRow: { 
    flexDirection: 'row', 
    justifyContent: 'space-between', 
    alignItems: 'center', 
    marginBottom: 4 
  },
  itemName: { 
    fontSize: 15, 
    color: '#2d3748', 
    flex: 1 
  },
  itemQty: { 
    fontSize: 15, 
    color: '#4a5568', 
    marginHorizontal: 8 
  },
  itemPrice: { 
    fontSize: 15, 
    color: '#38a169', 
    fontWeight: 'bold' 
  },
  total: { 
    fontSize: 18, 
    fontWeight: 'bold', 
    color: '#e53e3e', 
    marginVertical: 16, 
    textAlign: 'right' 
  },
  button: { 
    backgroundColor: '#38a169', 
    paddingVertical: 14, 
    borderRadius: 8, 
    alignItems: 'center', 
    marginTop: 8 
  },
  buttonText: { 
    color: '#fff', 
    fontSize: 18, 
    fontWeight: 'bold' 
  },
}); 