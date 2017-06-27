import React, {Component} from 'react';
import {StyleSheet,View, Image,Text,KeyboardAvoidingView} from 'react-native';
import LoginForm from './LoginForm.js';

export default class Login extends Component {
  render() {
    return (
        <KeyboardAvoidingView behavior="padding" style={styles.container}>
       <View style={styles.container}>
          <View style={styles.logoContainer}>
            <Image
            style={styles.logo}
            source={require('../../images/vinclub_logo.png')}/>
            <Text style={styles.title}>Welcome to VINCLUB Mobile App</Text>
          </View>

          <View style={styles.formContainer}>
            <LoginForm/>
          </View>
       </View>
        </KeyboardAvoidingView>
    );
  }
}

const styles = StyleSheet.create({
    container: {
      flex:1,
      backgroundColor : '#000'
    },
    logoContainer:{
      alignItems:'center',
      flexGrow:1,
      justifyContent: 'center'
    },
    title:{
      color:'#FFF',
      textAlign:'center',
      opacity:0.9,
      width:160
    }
});
