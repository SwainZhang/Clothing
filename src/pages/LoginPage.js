import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';

export default class LoginPage extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Text>LoginPage</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    }
});