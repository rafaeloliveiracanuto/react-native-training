import React from 'react'
import { View, Text } from 'react-native'
import Pattern from '../styles/Pattern'

export default props =>
    <View>
        {
            props.number % 2 == 0 
            ? <Text style={Pattern.ex}>Par</Text>
            : <Text style={Pattern.ex}>Ímpar</Text>
        }

    </View>