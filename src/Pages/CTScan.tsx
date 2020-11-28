import React from 'react';
import { Button, Text, View } from 'react-native';

export default class CTScan extends React.Component<any> {
    render() {
        return (
            <View>
                <Button onPress={() => { }} title="Upload your CT Scane"></Button>
                <Button onPress={() => { this.props.navigation.navigate('GeneralForm') }} title="Next" />
            </View>
        )
    }
}