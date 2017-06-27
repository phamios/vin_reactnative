import React, {Component} from 'react';
import {
  StyleSheet,
    View,
    TextInput,
    TouchableHighlight,
    Text,
    StatusBar
} from 'react-native';


class LoginForm extends Component {

  render() {
    return (
       <View style={styles.container}>
         <StatusBar barStyle="light-content" />
          <TextInput returnKeyType="Tiếp" style={styles.input} placeholder="Username or email"
          onSubmitEditing={() => this.passwordInput.focus()}
          keyboardType="email-address"
          autoCapitalize="none"
          autoCorrect={false}/>
          <TextInput returnKeyType="Đăng nhập" style={styles.input} placeholder="your password"  secureTextEntry
                     ref={ (input) => this.passwordInput = input }/>
         <TouchableHighlight style={styles.buttonContainer}>
           <Text style={styles.buttonText}>Login</Text>
         </TouchableHighlight>
       </View>
    );
  }
}

const styles = StyleSheet.create({
    mainbody:{
      flex:0,
    },
    header:{
      flex:1,
    },
    container: {
      padding:20
    },
  input: {
    height:40,
    backgroundColor:'#ecf0f1',
    marginBottom:20,
    color:'#FFF',
    paddingHorizontal:10
  },
  buttonContainer:{
    backgroundColor: '#2980b9',
      paddingVertical:15
  },
  buttonText:{
    textAlign:'center',
      color:'#FFF',
      fontWeight:'700'
  }
});


module.exports = LoginForm;