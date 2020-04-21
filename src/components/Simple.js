import React from 'react'
import { View, Text } from 'react-native'
import Pattern from '../styles/Pattern'

//export default function(props){
//    return <Text>{props.text}</Text>
//}

//export default (props) => <Text>Arrow: {props.text}</Text>

//export default (props) => 
 //   <View>
 //       <Text>Arrow 1: {props.text}</Text>
 //       <Text>Arrow 2: {props.text}</Text>
 //   </View>

//export default props => [
 //   <Text key={1}>Arrow 1: {props.text} 1</Text>,
  //  <Text key={2}>Arrow 2: {props.text} 2</Text>
//]

export default props =>
    <Text style={Pattern.ex}>Arrow 1: {props.text} </Text>
