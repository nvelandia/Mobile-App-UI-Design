import {View, Text, TouchableOpacity, TextInput} from 'react-native';
import React from 'react';
import {styles} from './style';
import Input from './Input';
import IconEmail from '../assets/IconEmail';
import IconLock from '../assets/IconLock';

export default function Design() {
  return (
    <View style={styles.containerLogin}>
      <View style={styles.headerLogin}>
        <Text style={styles.titleLogin}>Let's go.</Text>
        <Text style={styles.subtitle}>Traveling around the world.</Text>
      </View>
      <View style={styles.footer}>
        {/* <TextInput
          style={styles.input}
          placeholder="E-mail"
          placeholderTextColor="#fff"
        />
        <TextInput
          style={styles.input}
          placeholder="Password"
          placeholderTextColor="#fff"
        /> */}
        <Input placeholder="Email">
          <IconEmail />
        </Input>
        <Input placeholder="Password">
          <IconLock />
        </Input>
        <TouchableOpacity onPress={() => {}} style={styles.btn}>
          <Text style={styles.btnText}>Log in</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.footerLogin}>
        <TouchableOpacity onPress={() => {}}>
          <Text style={styles.textLogin}>Create Account</Text>
        </TouchableOpacity>
        <View style={styles.hr}></View>
        <TouchableOpacity onPress={() => {}}>
          <Text style={styles.textLogin}>Forgot Password</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
