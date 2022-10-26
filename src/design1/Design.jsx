import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import Travelgo from './Travelgo'
import Arrow from './Arrow'
import {styles} from './style'

export default function Design() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Hei, Welcome to</Text>
        <Travelgo/>
      </View>
      <View style={styles.footer}>
        <TouchableOpacity onPress={() =>{}}>
          <Arrow />
        </TouchableOpacity>
      </View>
    </View>
  )
}