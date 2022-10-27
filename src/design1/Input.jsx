import {View, Text, TextInput} from 'react-native';
import React from 'react';
import {styles} from './style';
import IconEmail from '../assets/IconEmail';

const Input = ({children, placeholder}) => {
  return (
    <View style={styles.containerInput}>
      {children}
      <TextInput
        style={styles.input}
        placeholder={placeholder}
        placeholderTextColor="#fff"
      />
    </View>
  );
};

export default Input;
