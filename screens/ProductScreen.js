import React, { useState } from 'react';
import { View, Text, TextInput, FlatList, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useApp } from '../components/AppContext';

const PRODUCTS = [
  { id: 1, name: 'Xe đạp thể thao Giant', price: '12.000.000đ', type: 'Thể thao', image: require('../assets/bike1.jpg'), desc: 'Khung nhôm siêu nhẹ, phanh đĩa, phù hợp cho mọi địa hình.' },
  { id: 2, name: 'Xe đạp địa hình Trek', price: '15.500.000đ', type: 'Địa hình', image: require('../assets/bike2.jpg'), desc: 'Xe địa hình mạnh mẽ, bám đường tốt, thích hợp leo núi.' },
  { id: 3, name: 'Xe đạp đua Merida', price: '18.200.000đ', type: 'Đua', image: require('../assets/bike3.jpg'), desc: 'Tốc độ cao, thiết kế khí động học, dành cho đua chuyên nghiệp.' },
  { id: 4, name: 'Xe đạp trẻ em Asama', price: '4.500.000đ', type: 'Trẻ em', image: require('../assets/bike4.jpg'), desc: 'An toàn, chắc chắn, màu sắc tươi sáng cho trẻ nhỏ.' },
  { id: 5, name: 'Xe đạp thể thao Fornix', price: '10.000.000đ', type: 'Thể thao', image: require('../assets/bike1.jpg'), desc: 'Thiết kế trẻ trung, phù hợp tập luyện thể thao.' },
  { id: 6, name: 'Xe đạp địa hình Giant', price: '13.000.000đ', type: 'Địa hình', image: require('../assets/bike2.jpg'), desc: 'Khung hợp kim, giảm xóc tốt, bền bỉ.' },
  { id: 7, name: 'Xe đạp đua Twitter', price: '20.000.000đ', type: 'Đua', image: require('../assets/bike3.jpg'), desc: 'Siêu nhẹ, tốc độ vượt trội, dành cho dân chuyên.' },
  { id: 8, name: 'Xe đạp trẻ em Martin', price: '3.800.000đ', type: 'Trẻ em', image: require('../assets/bike4.jpg'), desc: 'Thiết kế nhỏ gọn, an toàn cho bé.' },
];

const FILTERS = ['Tất cả', 'Thể thao', 'Địa hình', 'Đua', 'Trẻ em'];

export default function ProductScreen({ navigation }) {
  const [search, setSearch] = useState('');
  const [filter, setFilter] = useState('Tất cả');
  const { favorites, addToFavorite, removeFromFavorite, addToCart } = useApp();

  const filteredProducts = PRODUCTS.filter(p =>
    (filter === 'Tất cả' || p.type === filter) &&
    p.name.toLowerCase().includes(search.toLowerCase())
  );

  const toggleFavorite = (id) => {
    if (favorites.includes(id)) removeFromFavorite(id);
    else addToFavorite(id);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Danh sách sản phẩm</Text>
      <TextInput
        style={styles.input}
        placeholder="Tìm kiếm sản phẩm..."
        value={search}
        onChangeText={setSearch}
      />
      <View style={styles.filterRow}>
        {FILTERS.map(f => (
          <TouchableOpacity key={f} style={[styles.filterBtn, filter === f && styles.filterBtnActive]} onPress={() => setFilter(f)}>
            <Text style={[styles.filterText, filter === f && styles.filterTextActive]}>{f}</Text>
          </TouchableOpacity>
        ))}
      </View>
      <FlatList
        data={filteredProducts}
        keyExtractor={item => item.id.toString()}
        renderItem={({ item }) => (
          <View style={styles.card}>
            <TouchableOpacity style={{ flex: 1 }} onPress={() => navigation.navigate('ProductDetail', { product: item })}>
              <Image source={item.image} style={styles.image} />
              <Text style={styles.name}>{item.name}</Text>
              <Text style={styles.price}>{item.price}</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => toggleFavorite(item.id)}>
              <Ionicons name={favorites.includes(item.id) ? 'heart' : 'heart-outline'} size={24} color={favorites.includes(item.id) ? '#e53e3e' : '#a0aec0'} />
            </TouchableOpacity>
            <TouchableOpacity style={styles.addCartBtn} onPress={() => addToCart(item) || navigation.navigate('MainTabs', { screen: 'Cart' })}>
              <Ionicons name="cart" size={22} color="#fff" />
            </TouchableOpacity>
          </View>
        )}
        style={{ marginTop: 8 }}
      />
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
    fontSize: 22, 
    fontWeight: 'bold', 
    marginBottom: 12, 
    marginTop: 20,
    color: '#2d3748' 
  },
  input: { 
    backgroundColor: '#fff', 
    borderRadius: 8, 
    paddingHorizontal: 16, 
    height: 44, 
    marginBottom: 12, 
    borderColor: '#ccc', 
    borderWidth: 1 
  },
  filterRow: { 
    flexDirection: 'row', 
    marginBottom: 12, 
    justifyContent: 'space-between' 
  },
  filterBtn: { 
    paddingVertical: 6, 
    paddingHorizontal: 12, 
    borderRadius: 16, 
    backgroundColor: '#e2e8f0', 
    marginRight: 8 
  },
  filterBtnActive: { 
    backgroundColor: '#3182ce' 
  },
  filterText: { 
    color: '#2d3748' 
  },
  filterTextActive: { 
    color: '#fff', 
    fontWeight: 'bold' 
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
  addCartBtn: { 
    backgroundColor: '#3182ce', 
    borderRadius: 20, 
    padding: 8, 
    marginLeft: 8 
  },
}); 