import React from 'react';
import { StyleSheet, View, ImageBackground, TouchableWithoutFeedback, Keyboard } from 'react-native';
import Header from './components/header';
import ScrollList from './components/scrollList';
import CountContextProvider from './context/countContextProvider';


export default function App() {



  return (
    <CountContextProvider>
      <ImageBackground
        source={{ uri: 'https://i.pinimg.com/originals/1d/a7/4e/1da74e3bc2233833fe96916a43458d98.gif' }}
        style={{ width: '100%', height: '100%' }}>
        <TouchableWithoutFeedback onPress={() => {
          Keyboard.dismiss();
        }}>

          <View style={styles.container}>

            <Header />

            <View style={styles.content}>

              <ScrollList />





            </View>
          </View>
        </TouchableWithoutFeedback>
      </ImageBackground>
    </CountContextProvider>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,

  },
  content: {
    padding: 40,
    flex: 1,
  },




});