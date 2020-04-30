import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import Simples from './components/Simple'
import EvenAndOdd from './components/EvenAndOdd'
import  Invert, { MegaSena } from './components/Multi'

export default class App extends React. Component{
  render(){
    return(
      <View style={styles.container}>
        <Simples text = 'Flexível!!!!'></Simples>
        <EvenAndOdd number={27}></EvenAndOdd>
        <Invert text='React Nativo!'></Invert>
        <MegaSena numbers={8}></MegaSena>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  f20: {
    fontSize: 40
  }
})