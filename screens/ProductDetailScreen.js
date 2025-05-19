import React, { useState } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, ScrollView } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useApp } from '../components/AppContext';

const PRODUCTS = [
  { id: 1, name: 'Xe đạp thể thao Giant', price: '12.000.000đ', desc: 'Khung nhôm siêu nhẹ, phanh đĩa, phù hợp cho mọi địa hình.', image: require('../assets/bike1.jpg') },
  { id: 2, name: 'Xe đạp địa hình Trek', price: '15.500.000đ', desc: 'Xe địa hình mạnh mẽ, bám đường tốt, thích hợp leo núi.', image: require('../assets/bike2.jpg') },
  { id: 3, name: 'Xe đạp đua Merida', price: '18.200.000đ', desc: 'Tốc độ cao, thiết kế khí động học, dành cho đua chuyên nghiệp.', image: require('../assets/bike3.jpg') },
  { id: 4, name: 'Xe đạp trẻ em Asama', price: '4.500.000đ', desc: 'An toàn, chắc chắn, màu sắc tươi sáng cho trẻ nhỏ.', image: require('../assets/bike4.jpg') },
  { id: 5, name: 'Xe đạp thể thao Fornix', price: '10.000.000đ', desc: 'Thiết kế trẻ trung, phù hợp tập luyện thể thao.', image: require('../assets/bike1.jpg') },
  { id: 6, name: 'Xe đạp địa hình Giant', price: '13.000.000đ', desc: 'Khung hợp kim, giảm xóc tốt, bền bỉ.', image: require('../assets/bike2.jpg') },
  { id: 7, name: 'Xe đạp đua Twitter', price: '20.000.000đ', desc: 'Siêu nhẹ, tốc độ vượt trội, dành cho dân chuyên.', image: require('../assets/bike3.jpg') },
  { id: 8, name: 'Xe đạp trẻ em Martin', price: '3.800.000đ', desc: 'Thiết kế nhỏ gọn, an toàn cho bé.', image: require('../assets/bike4.jpg') },
];

export default function ProductDetailScreen({ route, navigation }) {
  const { addToCart } = useApp();
  const { product } = route.params || {};
  if (!product) {
    return <View style={{flex:1,justifyContent:'center',alignItems:'center'}}><Text>Không tìm thấy sản phẩm!</Text></View>;
  }
  const [current, setCurrent] = useState(PRODUCTS.findIndex(p => p.id === product.id));
  const [favorite, setFavorite] = useState(false);
  const p = PRODUCTS[current] || product;

  const next = () => setCurrent((current + 1) % PRODUCTS.length);
  const prev = () => setCurrent((current - 1 + PRODUCTS.length) % PRODUCTS.length);

  return (
    <ScrollView style={styles.container}>
      <Image source={p.image} style={styles.image} />
      <View style={styles.info}>
        <Text style={styles.name}>{p.name}</Text>
        <Text style={styles.price}>{p.price}</Text>
        <Text style={styles.desc}>{p.desc}</Text>
        <View style={styles.row}>
          <TouchableOpacity style={styles.button} onPress={() => { addToCart(p); navigation.navigate('MainTabs', { screen: 'Cart' }); }}>
            <Ionicons name="cart" size={20} color="#fff" />
            <Text style={styles.buttonText}>Thêm vào giỏ</Text>
          </TouchableOpacity>
          <TouchableOpacity style={[styles.button, { backgroundColor: favorite ? '#e53e3e' : '#a0aec0' }]} onPress={() => setFavorite(f => !f)}>
            <Ionicons name={favorite ? 'heart' : 'heart-outline'} size={20} color="#fff" />
            <Text style={styles.buttonText}>Yêu thích</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.row}>
          <TouchableOpacity style={styles.navBtn} onPress={prev}><Ionicons name="chevron-back" size={24} color="#3182ce" /></TouchableOpacity>
          <TouchableOpacity style={styles.navBtn} onPress={next}><Ionicons name="chevron-forward" size={24} color="#3182ce" /></TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { 
    flex: 1, 
    backgroundColor: '#fff' 
  },
  image: { 
    width: '100%', 
    height: 320, 
    resizeMode: 'cover' 
  },
  info: { 
    padding: 24 
  },
  name: { 
    fontSize: 26, 
    fontWeight: 'bold', 
    color: '#2d3748', 
    marginBottom: 8 
  },
  price: { 
    color: '#38a169', 
    fontWeight: 'bold', 
    fontSize: 20, 
    marginBottom: 8 
  },
  desc: { 
    color: '#4a5568', 
    fontSize: 17, 
    marginBottom: 16 
  },
  row: { 
    flexDirection: 'row', 
    justifyContent: 'space-between', 
    marginBottom: 12 
  },
  button: { 
    flexDirection: 'row', 
    alignItems: 'center', 
    backgroundColor: '#3182ce', 
    paddingVertical: 14, 
    paddingHorizontal: 22, 
    borderRadius: 8, 
    marginRight: 8 
  },
  buttonText: { 
    color: '#fff', 
    fontSize: 17, 
    fontWeight: 'bold', 
    marginLeft: 6 
  },
  navBtn: { 
    backgroundColor: '#e2e8f0', 
    borderRadius: 20, 
    padding: 8, 
    marginHorizontal: 8 
  },
}); 