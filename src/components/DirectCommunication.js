import React from 'react'
import {View, Text} from 'react-native'

const font = { style: {fontSize: 30} }

function childrenWithProps(props){
    return React.Children.map(props.children,
        c => React.cloneElement(c, {...props, ...c.props}))
}

export const Son = props => 
    <View>
        <Text {...font}>Filho: {props.name} {props.lastName}</Text>
    </View>

export const Father = props =>
    <View>
        <Text {...font}>Pai: {props.name} {props.lastName}</Text>
        {childrenWithProps(props)}
    </View>

export const Grandfather = props =>
    <View>
        <Text {...font}>Avô: {props.name} {props.lastName}</Text>
        <Father name='Valter' lastName={props.lastName}>
            <Son name='Rafael'></Son>
            <Son name='Daniel'></Son>
            <Son name='Rodrigo'></Son>
        </Father>
        <Father {...props} name='Detinha'>
            <Son name='Marianka'></Son>
            <Son name='Flaviana'></Son>
        </Father>
    </View>

export default Grandfather
