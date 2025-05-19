import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image, FlatList } from 'react-native';

const user = {
  name: 'Nguyễn Gia Huy',
  email: 'huydeptraikhongaisanhbang@email.com',
  avatar: require('../assets/supercute.png'),
};

const orders = [
  { id: 1, date: '2024-05-10', total: '12.000.000đ', status: 'Đã giao', items: 1 },
  { id: 2, date: '2024-04-22', total: '15.500.000đ', status: 'Đang giao', items: 2 },
];

export default function UserScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Image source={user.avatar} style={styles.avatar} />
      <Text style={styles.name}>{user.name}</Text>
      <Text style={styles.email}>{user.email}</Text>
      <TouchableOpacity style={styles.editBtn}>
        <Text style={styles.editText}>Chỉnh sửa thông tin</Text>
      </TouchableOpacity>
      <Text style={styles.sectionTitle}>Đơn hàng gần đây</Text>
      <FlatList
        data={orders}
        keyExtractor={item => item.id.toString()}
        renderItem={({ item }) => (
          <View style={styles.orderCard}>
            <Text style={styles.orderText}>Mã đơn: #{item.id}</Text>
            <Text style={styles.orderText}>Ngày: {item.date}</Text>
            <Text style={styles.orderText}>Tổng: {item.total} ({item.items} sản phẩm)</Text>
            <Text style={[styles.orderStatus, item.status === 'Đã giao' ? {color:'#38a169'} : {color:'#3182ce'}]}>{item.status}</Text>
          </View>
        )}
        ListEmptyComponent={<Text style={{color:'#a0aec0',textAlign:'center'}}>Chưa có đơn hàng nào</Text>}
        style={{width:'100%',marginTop:12}}
      />
      <TouchableOpacity style={styles.logoutBtn} onPress={() => navigation.replace('Login')}>
        <Text style={styles.logoutText}>Đăng xuất</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { 
    flex: 1, 
    alignItems: 'center', 
    backgroundColor: '#f7fafc', 
    paddingTop: 32 
  },
  avatar: { 
    width: 150, 
    height: 150, 
    borderRadius: 100, 
    marginTop: 20 ,
    marginBottom: 12 
  },
  name: { 
    fontSize: 22, 
    fontWeight: 'bold', 
    color: '#2d3748', 
    marginBottom: 2 
  },
  email: { 
    fontSize: 16, 
    color: '#4a5568', 
    marginBottom: 8 
  },
  editBtn: { 
    backgroundColor: '#3182ce', 
    borderRadius: 8, 
    paddingVertical: 6, 
    paddingHorizontal: 18, 
    marginBottom: 18 
  },
  editText: { 
    color: '#fff', 
    fontSize: 15 
  },
  sectionTitle: { 
    fontSize: 18, 
    fontWeight: 'bold', 
    color: '#2d3748', 
    marginTop: 8, 
    marginBottom: 4, 
    alignSelf: 'flex-start', 
    marginLeft: 32 
  },
  orderCard: { 
    backgroundColor: '#fff', 
    borderRadius: 10, 
    padding: 14, 
    marginBottom: 10, 
    width: '90%', 
    alignSelf: 'center', 
    elevation: 2 
  },
  orderText: { 
    fontSize: 15, 
    color: '#2d3748' 
  },
  orderStatus: { 
    fontWeight: 'bold', 
    marginTop: 4 
  },
  logoutBtn: { 
    backgroundColor: '#e53e3e', 
    paddingVertical: 12, 
    paddingHorizontal: 32, 
    borderRadius: 8, 
    marginTop: 24,
    marginBottom: 24 
  },
  logoutText: { 
    color: '#fff', 
    fontSize: 18, 
    fontWeight: 'bold' 
  },
}); 