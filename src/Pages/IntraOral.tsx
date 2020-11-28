import React from 'react';
import { Button, Text, View } from 'react-native';
import CheckBox from '@react-native-community/checkbox';
import { TextInput } from 'react-native-gesture-handler';

export default class IntraOral extends React.Component<any> {
    render() {
        return (
            <View>
                <CheckBox
                    disabled={false}
                />
                <Text>{'LOC'}</Text>
                <CheckBox
                    disabled={false}
                />
                <Text>{'ORAL BLEED'}</Text>
                <CheckBox
                    disabled={false}
                />
                <Text>{'EAR BLEED'}</Text>
                <TextInput />
                <Button onPress={() => { this.props.navigation.navigate('FinalReport') }} title="Next" />
            </View>
        )
    }
}