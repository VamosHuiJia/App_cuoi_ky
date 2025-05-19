import React from 'react';
import { View, Text, StyleSheet, ScrollView, Image, TouchableOpacity, FlatList, Dimensions } from 'react-native';

const screenWidth = Dimensions.get('window').width;

const featuredBikes = [
  { id: 1, name: 'Xe đạp thể thao Giant', price: '12.000.000đ', image: require('../assets/bike1.jpg'), desc: 'Khung nhôm siêu nhẹ, phanh đĩa, phù hợp cho mọi địa hình.' },
  { id: 2, name: 'Xe đạp địa hình Trek', price: '15.500.000đ', image: require('../assets/bike2.jpg'), desc: 'Xe địa hình mạnh mẽ, bám đường tốt, thích hợp leo núi.' },
  { id: 3, name: 'Xe đạp đua Merida', price: '18.200.000đ', image: require('../assets/bike3.jpg'), desc: 'Tốc độ cao, thiết kế khí động học, dành cho đua chuyên nghiệp.' },
  { id: 4, name: 'Xe đạp trẻ em Asama', price: '4.500.000đ', image: require('../assets/bike4.jpg'), desc: 'An toàn, chắc chắn, màu sắc tươi sáng cho trẻ nhỏ.' },
];

const categories = [
  { id: 1, name: 'Thể thao', icon: require('../assets/bike1.jpg') },
  { id: 2, name: 'Địa hình', icon: require('../assets/bike2.jpg') },
  { id: 3, name: 'Đua', icon: require('../assets/bike3.jpg') },
  { id: 4, name: 'Trẻ em', icon: require('../assets/bike4.jpg') },
];

const newBikes = [
  { id: 5, name: 'Xe đạp thể thao Fornix', price: '10.000.000đ', image: require('../assets/bike1.jpg'), desc: 'Thiết kế trẻ trung, phù hợp tập luyện thể thao.' },
  { id: 6, name: 'Xe đạp địa hình Giant', price: '13.000.000đ', image: require('../assets/bike2.jpg'), desc: 'Khung hợp kim, giảm xóc tốt, bền bỉ.' },
];

const bestSellers = [
  { id: 7, name: 'Xe đạp đua Twitter', price: '20.000.000đ', image: require('../assets/bike3.jpg'), desc: 'Siêu nhẹ, tốc độ vượt trội, dành cho dân chuyên.' },
  { id: 8, name: 'Xe đạp trẻ em Martin', price: '3.800.000đ', image: require('../assets/bike4.jpg'), desc: 'Thiết kế nhỏ gọn, an toàn cho bé.' },
];

export default function HomeScreen({ navigation }) {
  return (
    <ScrollView style={styles.container}>
      <Image source={require('../assets/Background_login_2.jpg')} style={styles.banner} />
      <Text style={styles.sectionTitle}>Danh mục xe</Text>
      <FlatList
        data={categories}
        horizontal
        showsHorizontalScrollIndicator={false}
        keyExtractor={item => item.id.toString()}
        renderItem={({ item }) => (
          <View style={styles.categoryCard}>
            <Image source={item.icon} style={styles.categoryIcon} />
            <Text style={styles.categoryName}>{item.name}</Text>
          </View>
        )}
        contentContainerStyle={{ minWidth: screenWidth, justifyContent: 'center', alignItems: 'center', paddingLeft: 16, paddingRight: 8, flexDirection: 'row' }}
        style={{ marginBottom: 16 }}
      />
      <Text style={styles.sectionTitle}>Sản phẩm nổi bật</Text>
      <FlatList
        data={featuredBikes}
        horizontal
        showsHorizontalScrollIndicator={false}
        keyExtractor={item => item.id.toString()}
        renderItem={({ item }) => (
          <TouchableOpacity style={styles.card} onPress={() => navigation.navigate('ProductDetail', { product: item })}>
            <Image source={item.image} style={styles.image} />
            <Text style={styles.name}>{item.name}</Text>
            <Text style={styles.price}>{item.price}</Text>
          </TouchableOpacity>
        )}
        contentContainerStyle={{ minWidth: screenWidth, justifyContent: 'center', alignItems: 'center', paddingLeft: 16, paddingRight: 8, flexDirection: 'row' }}
        style={{ marginBottom: 16 }}
      />
      <Text style={styles.sectionTitle}>Sản phẩm mới</Text>
      <FlatList
        data={newBikes}
        horizontal
        showsHorizontalScrollIndicator={false}
        keyExtractor={item => item.id.toString()}
        renderItem={({ item }) => (
          <TouchableOpacity style={styles.card} onPress={() => navigation.navigate('ProductDetail', { product: item })}>
            <Image source={item.image} style={styles.image} />
            <Text style={styles.name}>{item.name}</Text>
            <Text style={styles.price}>{item.price}</Text>
          </TouchableOpacity>
        )}
        contentContainerStyle={{ minWidth: screenWidth, justifyContent: 'center', alignItems: 'center', paddingLeft: 16, paddingRight: 8, flexDirection: 'row' }}
        style={{ marginBottom: 16 }}
      />
      <Text style={styles.sectionTitle}>Bán chạy nhất</Text>
      <FlatList
        data={bestSellers}
        horizontal
        showsHorizontalScrollIndicator={false}
        keyExtractor={item => item.id.toString()}
        renderItem={({ item }) => (
          <TouchableOpacity style={styles.card} onPress={() => navigation.navigate('ProductDetail', { product: item })}>
            <Image source={item.image} style={styles.image} />
            <Text style={styles.name}>{item.name}</Text>
            <Text style={styles.price}>{item.price}</Text>
          </TouchableOpacity>
        )}
        contentContainerStyle={{ minWidth: screenWidth, justifyContent: 'center', alignItems: 'center', paddingLeft: 16, paddingRight: 8, flexDirection: 'row' }}
        style={{ marginBottom: 32 }}
      />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { 
    flex: 1, 
    backgroundColor: '#f7fafc' 
  },
  banner: { 
    width: '100%', 
    height: 200, 
    resizeMode: 'cover', 
    marginBottom: 16 
  },
  sectionTitle: { 
    fontSize: 20, 
    fontWeight: 'bold', 
    marginLeft: 16, 
    marginBottom: 8, 
    color: '#2d3748' 
  },
  card: { 
    backgroundColor: '#fff', 
    borderRadius: 16, 
    padding: 18, 
    alignItems: 'center', 
    width: 180, 
    height: 250,
    // elevation: 4, 
    marginRight: 16 
  },
  image: { 
    width: 120, 
    height: 120, 
    borderRadius: 12, 
    marginBottom: 10 
  },
  name: { 
    fontSize: 17, 
    fontWeight: 'bold', 
    color: '#2d3748', 
    textAlign: 'center' 
  },
  price: { 
    color: '#38a169', 
    fontWeight: 'bold', 
    marginTop: 6, 
    fontSize: 16 
  },
  categoryCard: { 
    alignItems: 'center', 
    marginRight: 18 
  },
  categoryIcon: { 
    width: 70, 
    height: 48, 
    borderRadius: 6, 
    marginBottom: 4 
  },
  categoryName: { 
    fontSize: 14, 
    color: '#2d3748' 
  },
}); 