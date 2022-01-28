import React, { Component } from 'react';
//import { View } from 'react-native-web';
import {View, Button, TextInput} from 'react-native'
//import firebase from 'firebase';
//import * as firebase from 'firebase'
//import MainScreen from './componenets/Main'
export class register extends Component {
    constructor (props){
        super(props);
        this.state ={
            email: '',
            password:'',
          
        }
        this.onSignUp = this.onSignUp.bind(this)
    }
    onSignUp(){

        const {email, password, name} = this.state
         firebase.auth().createUserWithEmailAndPassword(email, password)   
         . then((result) => {
             firebase.firestore().collection("Users")
             .doc(firebase.auth().currentUser.uid)
             .set({
                 name,
                 email
             })
             console.log(result)
     })
         . catch((error) => {
            console.log(error)
    })
}
  render() {
    return <View>
        <TextInput
        placeholder='name'
        onChangeText ={(name)  => this.setState({name})}
/>
<TextInput
        placeholder='email'
        onChangeText ={(email)  => this.setState({email})}
/>
<TextInput
        placeholder='password'
        secureTextEntry ={(true)}
        onChangeText ={(password)  => this.setState({password})}
/>
<Button 
onPress={() => this.onSignUp()}
title = "Sign Up"
/>
    </View>;
  }
}

export default Login;