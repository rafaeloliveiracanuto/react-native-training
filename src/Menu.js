import React from 'react'
import { createDrawerNavigator } from 'react-navigation'
import Simple from './components/Simple'
import EvenAndOdd from './components/EvenAndOdd'
import Invert, { MegaSena } from './components/Multi'
import ValidateProps from './components/ValidateProps'
import Event from './components/Event'
import Grandfather from './components/DirectCommunication'

export default createDrawerNavigator({
    Grandfather: {
        screen: () => <Grandfather name='Nelson' lastName='Canuto'></Grandfather>
    },
    Event: {
        screen: Event
    },
    ValidateProps: {
        screen: () => <ValidateProps year={18} />
    },
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