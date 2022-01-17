import React, { useState } from 'react';
import { Text, View, Image, ImageBackground, TextInput, TouchableOpacity } from 'react-native';
import styles from '../styles'
export default function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  return (


    <ImageBackground
      source={{ uri: 'https://i.pinimg.com/originals/1d/a7/4e/1da74e3bc2233833fe96916a43458d98.gif' }}
      style={{ width: '100%', height: '100%' }}>
      <View style={styles.container}>


        <Text style={styles.logo}>Froggy Login</Text>
        <Image source={require('../imgs/forg.png')} />
        <View style={styles.inputView} >
          <TextInput
            style={styles.inputText}
            placeholder="Username..."
            placeholderTextColor="#267326"
            onChangeText={(value) => setUsername(value)} />

        </View>
        <View style={styles.inputView} >
          <TextInput
            secureTextEntry
            style={styles.inputText}
            placeholder="Password..."
            placeholderTextColor="#267326"
            onChangeText={(value) => setPassword(value)} />

        </View>
        <TouchableOpacity style={styles.loginBtn}>
          <Text style={styles.loginText}>Login</Text>
        </TouchableOpacity>
        <Text style={styles.inputText}>name: {username}, pwd: {password}</Text>

      </View>
    </ImageBackground>


  );
}