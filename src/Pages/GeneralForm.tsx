import React from 'react';
import { Button, Text, View } from 'react-native';
import CheckBox from '@react-native-community/checkbox';
import { TextInput } from 'react-native-gesture-handler';

export default class GeneralForm extends React.Component<any> {
    render() {
        return (
            <View>
                <TextInput />
                <Text>{'General Condition'}</Text>
                <CheckBox
                    disabled={false}
                />
                <Text>{'Present'}</Text>
                <Text>{'Absent'}</Text>
                <Text>{'Sluggish'}</Text>
                <CheckBox
                    disabled={false}
                />
                <Text>{'Present'}</Text>
                <Text>{'Absent'}</Text>
                <Text>{'Sluggish'}</Text>
                <Text>{'EAR BLEED'}</Text>
                <CheckBox
                    disabled={false}
                />
                <Text>{'VOMITTING'}</Text>
                <CheckBox
                    disabled={false}
                />
                <Text>{'SEIZURE'}</Text>
                <Button onPress={() => { this.props.navigation.navigate('SoftTissueInjury') }} title="Next" />
            </View>
        )
    }
}