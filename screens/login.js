import React from 'react';
import { Text, View, Image, ImageBackground, TextInput } from 'react-native';
import styles from './styles'
export default function Login() {
  state={
    username:"",
    password:""
  }
    return (
      

      <ImageBackground 
      source={{uri: 'https://i.pinimg.com/originals/1d/a7/4e/1da74e3bc2233833fe96916a43458d98.gif'}} 
      style={{width: '100%', height: '100%'}}>
      <View style={styles.container}>


          <Text style={styles.logo}>Froggo Login</Text>
          <Image source={require('./imgs/forg.png')} />
          <View style={styles.inputView} >
            <TextInput  
              style={styles.inputText}
              placeholder="Username..." 
              placeholderTextColor="#267326"
              onChangeText={text => this.setState({username:text})}/>
          </View>
          <View style={styles.inputView} >
            <TextInput  
              secureTextEntry
              style={styles.inputText}
              placeholder="Password..." 
              placeholderTextColor="#267326"
              onChangeText={text => this.setState({password:text})}/>
          </View>
          <View style={styles.loginBtn}>
            <Text style={styles.loginText}>Login</Text>
          </View>
          
        </View>
      </ImageBackground>
        
      
    );
  }