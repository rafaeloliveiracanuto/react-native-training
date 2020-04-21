import React, { Component } from 'react'
import { View, Text, TouchableHighlight } from 'react-native'

export default class Counter extends Component{
    state = {
        number: this.props.initialNumber
    }

    oneMore = () => {
        this.setState({
            numero: this.state.number + 1
        })
    }

    clean = () => {
        this.setState({
            number: this.props.initialNumber
        })
    }

    render(){
        return (
            <View>
                <TouchableHighlight 
                    onPress={this.oneMore}
                    onLongPress={this.clean}>
                    <Text>Incrementar/Zerar</Text>
                </TouchableHighlight>
                <Text style={{fontSize: 40}}>{this.state.number}</Text>
            </View>
        )
    }
}