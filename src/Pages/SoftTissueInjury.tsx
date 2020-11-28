import CheckBox from '@react-native-community/checkbox';
import React from 'react';
import { Button, Text, View } from 'react-native';

export default class SoftTissueInjury extends React.Component<any> {
    render() {
        return (
            <View>
                <Text>{'Soft Tissue Injury'}</Text>
                <CheckBox
                    disabled={false}
                />
                <Text>{'Lacernation'}</Text>
                <CheckBox
                    disabled={false}
                />
                <Text>{'Abcrasion'}</Text>
                <CheckBox
                    disabled={false}
                />
                <Text>{'Tissue Less'}</Text>
                <CheckBox
                    disabled={false}
                />
                <Text>{'Edema'}</Text>
                <Button onPress={() => { }} title={'Upload Face Pic'}></Button>
                <Button onPress={() => { this.props.navigation.navigate('HardTissueInjury') }} title="Next" />
            </View>
        )
    }
}