import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View,Image} from 'react-native';
import I18n from '../../res/languages/I18n';
export default class StartScreenPage extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Image source={I18n.t('start_screen_image')}/>
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