import React, { Component, PureComponent } from 'react'
import { Text, View } from 'react-native'

import CameraNow from './CameraTest';

export default class ScreenCamera extends React.PureComponent {
    render() {
        return (
            <View style={{flex:1}}>
                <CameraNow/>
            </View>
        )
    }
}
