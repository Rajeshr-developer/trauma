import React from 'react';
import { Button, Text, View } from 'react-native';
import CheckBox from '@react-native-community/checkbox';

export default class ReportForm extends React.Component<any> {
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
                <CheckBox
                    disabled={false}
                />
                <Text>{'VOMITTING'}</Text>
                <CheckBox
                    disabled={false}
                />
                <Text>{'SEIZURE'}</Text>
                <Button onPress={() => { this.props.navigation.navigate('GeneralForm') }} title="Next" />
            </View>
        )
    }
}