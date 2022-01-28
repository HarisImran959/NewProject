import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import LandingScreen from './components/auth/Landing';
import { createStackNavigator } from '@react-navigation/stack';
//import * as firebase from 'firebase';
//import {Provider} from 'react-redux'
import {createStore, applyMiddleware} from 'redux'
import RegisterScreen from './components/auth/Register'
import thunk from 'redux-thunk'
//import rootReducer from 'redux/const' 
import AddScreen from './components/main/Add'
import React, { Component } from 'react';
import { Provider } from 'react-native/Libraries/Text/TextAncestor';
import MainScreen from './components/Main';
//export default App;

const store = createStore(rootReducer, applyMiddleware(thunk));

//[state, dispatch] = useReducer(first, second, third);
const firebaseConfig = {
  apiKey: "AIzaSyAtrQeTwgSzi6EVeI5sIyyZZB3neYALNU4",
  authDomain: "instagramdemo-f636e.firebaseapp.com",
  projectId: "instagramdemo-f636e",
  storageBucket: "instagramdemo-f636e.appspot.com",
  messagingSenderId: "683845909611",
  appId: "1:683845909611:web:d83f8686cc6e4031da452e",
  measurementId: "G-GFE1PNKXFJ"
};

if (firebase.apps.length === 0)
{
  firebase.intatializeApp(firebaseConfig)
}
const Stack = createStackNavigator();


//import React, { Component } from 'react';

export class App extends Component {
  constructor (props){
    super(props);
      this.state= {
        loaded :false,
      }
  }
  componentDidMount(){
    firebase.auth().onAuthStateChanged ((user) => {
      if(!user){
        this.setState({
          loggedIn: false,
          loaded:true,
        })
        }
        else{
          this.setState({
            loggedIn: true,
            loaded: true
          })
        }
      })
    }

  render() {
    const {loggedIn, loadedd} = this.state;
    if(!loaded){
      return(
<View > Style={{flex:1 , justofyContent: 'center'}}
<Text> Loading  </Text>
</View>)
    }
 if(!loggedIn){ 
      return ( 
  
      <NavigationContainer>
      <Stack.Navigator initialRouteName ="Landind">
        <Stack.Screen name ="Landing"component= {LandingScreen} options = {{headerShown: false}} />
        <Stack.Screen name ="Register"component= {RegisterScreen} />
   </Stack.Navigator>
   </NavigationContainer>
      )
    }
    return (
      <Provider store ={store}> 
      <NavigationContainer>
      <Stack.Navigator initialRouteName ="Main">
        
        <Stack.Screen name ="Main"component= {MainScreen} options = {{headerShown: false}} />
        <Stack.Screen name ="Add"component= {AddScreen}  />

   </Stack.Navigator>
   </NavigationContainer>
   </Provider>
   
    )
     }
    //return(
      //<View > Style={{flex:1 , justofyContent: 'center'}}
      //<Text> User Is logged IN  </Text>
      //</View>)
  
    }

export default App;



  




    