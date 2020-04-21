import React from 'react'
import { createDrawerNavigator } from 'react-navigation'
import Simple from './components/Simple'
import EvenAndOdd from './components/EvenAndOdd'
import Invert, { MegaSena } from './components/Multi'

export default createDrawerNavigator({
    Counter: {
        screen: () => <Counter initialNumber={100}></Counter>
    },
    MegaSena: {
        screen: () => <MegaSena numbers={8}></MegaSena>,
        navigationOptions: { title: 'Mega Sena' }
    },
    Invert: {
        screen: () => <Invert text="React Nativo"></Invert>
    },
    EvenAndOdd: {
        screen: () => <EvenAndOdd number={30}></EvenAndOdd>,
        navigationOptions: { title: 'Par e Ímpar' }
    },
    Simple: {
        screen: () => <Simple text="Flexível!!"></Simple>
    }
}, { drawerWidth: 300 })