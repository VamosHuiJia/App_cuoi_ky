import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image } from 'react-native';

export default function LoginScreen({ navigation }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <View style={styles.container}>
      <Image 
        source={require('../assets/Logo.png')} 
        style={styles.logo}
        resizeMode="contain" 
      />
      <Text style={styles.title}>Đăng nhập</Text>
      <TextInput
        style={styles.input}
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
        autoCapitalize="none"
      />
      <TextInput
        style={styles.input}
        placeholder="Mật khẩu"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
      />
      <TouchableOpacity style={styles.button} onPress={() => navigation.replace('MainTabs')}>
        <Text style={styles.buttonText}>Đăng nhập</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('Register')}>
        <Text style={styles.link}>Chưa có tài khoản? Đăng ký</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { 
    flex: 1, 
    alignItems: 'center', 
    backgroundColor: '#fff',
    paddingTop: 70
  },
  logo: {
    width: 150, 
    height: 150, 
    marginBottom: 46
  },
  title: { 
    fontSize: 28, 
    fontWeight: 'bold', 
    marginBottom: 24, 
    color: '#2d3748' 
  },
  input: { 
    width: '80%', 
    height: 48, 
    borderColor: '#ccc', 
    borderWidth: 1, 
    borderRadius: 8, 
    paddingHorizontal: 16, 
    marginBottom: 16, 
    fontSize: 16 
  },
  button: { 
    backgroundColor: '#3182ce', 
    paddingVertical: 12, 
    paddingHorizontal: 32, 
    borderRadius: 8, 
    marginBottom: 12 
  },
  buttonText: { 
    color: '#fff', 
    fontSize: 18, 
    fontWeight: 'bold' 
  },
  link: { 
    color: '#3182ce', 
    marginTop: 8, 
    fontSize: 16 
  },
});