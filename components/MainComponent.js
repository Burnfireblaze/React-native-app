import React, { Component } from 'react';
import Menu from './MenuComponent';
import { DISHES } from '../shared/dishes';
import Dishdetail from './DishdetailComponent';
import { View, Platform } from 'react-native';
import {createStackNavigator} from 'react-navigation-stack';
import {createAppContainer} from 'react-navigation';
import ExpoStatusBar from 'expo-status-bar/build/ExpoStatusBar';
import { ListItem } from 'react-native-elements';
import Constants from 'expo-constants';
const barHeight = Constants.statusBarHeight;
const MenuNavigator = createStackNavigator({
  Menu: { screen: Menu },
  Dishdetail: {screen: Dishdetail}
}, {
  initialRouteName: 'Menu',
  navigationOptions: {
    headerStyle: {
      backgroundColor: '#512DA8'
    },
    headerTintColor: '#fff',
    headerTitleStyle: {
      color: '#fff'
    }
  }
})

class Main extends Component {
  render() {
    return (
    <View style={{ flex: 1, paddingTop: Platform.OS === 'ios' ? 0 : barHeight }}>
        <MenuNavigator /> 
    </View>
    );
  }
}
  
export default createAppContainer(MenuNavigator);