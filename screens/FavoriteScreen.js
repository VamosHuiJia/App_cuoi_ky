import React from 'react';
import { View, Text, FlatList, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useApp } from '../components/AppContext';

const PRODUCTS = [
  { id: 1, name: 'Xe đạp thể thao Giant', price: '12.000.000đ', image: require('../assets/bike1.jpg'), desc: 'Khung nhôm siêu nhẹ, phanh đĩa, phù hợp cho mọi địa hình.' },
  { id: 2, name: 'Xe đạp địa hình Trek', price: '15.500.000đ', image: require('../assets/bike2.jpg'), desc: 'Xe địa hình mạnh mẽ, bám đường tốt, thích hợp leo núi.' },
  { id: 3, name: 'Xe đạp đua Merida', price: '18.200.000đ', image: require('../assets/bike3.jpg'), desc: 'Tốc độ cao, thiết kế khí động học, dành cho đua chuyên nghiệp.' },
  { id: 4, name: 'Xe đạp trẻ em Asama', price: '4.500.000đ', image: require('../assets/bike4.jpg'), desc: 'An toàn, chắc chắn, màu sắc tươi sáng cho trẻ nhỏ.' },
];

export default function FavoriteScreen({ navigation }) {
  const { favorites, removeFromFavorite } = useApp();
  const favoriteProducts = PRODUCTS.filter(p => favorites.includes(p.id));
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Sản phẩm yêu thích</Text>
      <FlatList
        data={favoriteProducts}
        keyExtractor={item => item.id.toString()}
        renderItem={({ item }) => (
          <View style={styles.card}>
            <TouchableOpacity style={{ flex: 1 }} onPress={() => navigation.navigate('ProductDetail', { product: item })}>
              <Image source={item.image} style={styles.image} />
              <Text style={styles.name}>{item.name}</Text>
              <Text style={styles.price}>{item.price}</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => removeFromFavorite(item.id)}>
              <Ionicons name="heart" size={24} color="#e53e3e" />
            </TouchableOpacity>
          </View>
        )}
        ListEmptyComponent={<Text style={{textAlign:'center',marginTop:32,color:'#a0aec0'}}>Chưa có sản phẩm yêu thích</Text>}
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
}); 