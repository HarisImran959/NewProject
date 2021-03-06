import React, { Component } from 'react';
import {View, Text} from 'react-native'
import {connect} from 'react-redux'
import {bindActionreators} from 'redux'
import {fetchUser} from '../components/Redux/Action/Index';
import { createMaterialBottomTabNavigatorBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import FeedScreen from './main/Feed'

import ProfileScreen from './main/Profile'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import { color } from 'react-native/Libraries/Components/View/ReactNativeStyleAttributes';
const Tab = createBottomTabNavigator();
const EmptyScreen = () => {
    return(null )
}
export default connect(null, mapDispatchProps(Main))
export class Main extends Component {
    componentDidMount(){
        this.props.fetchUser();

    }
  render() {
     
    return (
        <Tab.Navigator initialRouteName="Feed" labeled = {false}>
      <Tab.Screen name="Feed" component={FeedScreen} />
      options ={{
        tabBarIcon :({color, size}) => (
          <MaterialCommunityIcons name ="home " color ={color} size={26} />
          )

      }}
      <Tab.Screen name="AddContainer" component={EmptyScreen} />
      listeners={({navigation}) => ({
          tabPress : event => {
              event.preventDefault();
              navigation.navigate("Add")

          }
      })}
      options ={{
        tabBarIcon :({color, size}) => (
          <MaterialCommunityIcons name ="plus-box " color ={color} size={26} />
  
    )
  }}
  <Tab.Screen name="Profile" component={FeedScreen} />
      options ={{
        tabBarIcon :({color, size}) => (
          <MaterialCommunityIcons name ="account-circle " color ={color} size={26} />),
        
        
      }}
      </Tab.Navigator>
    )
      
const mapStateToProps = (store) => ({
    currentUser : store.userState.currentUser
})
const mapDispatchProps = (dispatch) =>bindActionreators({fetchUser}, dispatch)

}
}