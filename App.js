import { View, Text, ScrollView } from 'react-native'
import React from 'react'
import Design from './src/design1/Design.jsx'
import Login from './src/design1/Login.jsx'

const App = () => {
  return (
    <View style={{flex: 1}}>
      {/* <Design /> */}
      <Login />
    </View>
  )
}

export default App