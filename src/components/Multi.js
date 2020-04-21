import React from 'react'
import { Text } from 'react-native'
import Pattern from '../styles/Pattern'

export const Invert = props => {
    const invert = props.text.split('').reverse().join('')
    return <Text style={Pattern.ex}>{invert}</Text>
}

export const MegaSena = props => {
    const [min, max] = [1, 60]
    const numbers = Array(props.numbers || 6).fill(0)

    for(let i = 0; i < numbers.length; i++){
        let newNumber = 0
        while(numbers.includes(newNumber)){
            newNumber = Math.floor(Math.random() * (max - min + 1)) + min
        }
        numbers[i] = newNumber
    }

    numbers.sort((a, b) => a - b)
    return <Text style={Pattern.ex}>{numbers.join(', ')}</Text>
}

export default Invert