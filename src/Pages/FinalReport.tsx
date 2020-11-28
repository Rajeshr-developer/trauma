import React from 'react';
import { Button, Text, View } from 'react-native';
import CheckBox from '@react-native-community/checkbox';
import { TextInput } from 'react-native-gesture-handler';

export default class FinalReport extends React.Component<any> {
    render() {
        return (
            <View>
                <TextInput />
                <Text>{'Diagnosis'}</Text>
                <TextInput />
                <Text>{'Treatment Done'}</Text>
            </View>
        )
    }
}