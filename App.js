/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';
import {createStackNavigator} from 'react-navigation'
import StartScreenPage from './src/pages/StartScreenPage';
import LoginPage from './src/pages/LoginPage';

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android:
    'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});
const RootNavigator = createStackNavigator({
    Home : {
      screen : StartScreenPage,
        navigationOptions : {
          header : null
        }
    },
    Login :{
      screen:  LoginPage
    }
});
export default class App extends Component {
  render() {
    return <RootNavigator/>
  }
}