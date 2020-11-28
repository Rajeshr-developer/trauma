import CheckBox from '@react-native-community/checkbox';
import React from 'react';
import { Button, Text, View } from 'react-native';
import { ScrollView, TextInput } from 'react-native-gesture-handler';

export default class HardTissueInjury extends React.Component<any> {
    render() {
        return (
            <View>
                <ScrollView>
                    <Text>{'Step Deformity'}</Text>
                    <Text>{'Absent'}</Text>
                    <Text>{'Present'}</Text>
                    <Button onPress={() => { }} title={'Upload skull pic'}></Button>
                    <Text>{'Step Mobility'}</Text>
                    <Text>{'Absent'}</Text>
                    <Text>{'Present'}</Text>
                    <Text>{'Mouth Opening'}</Text>
                    <CheckBox
                        disabled={false}
                    />
                    <Text>{'Adequate'}</Text>
                    <Text>{'Restricted'}</Text>
                    <Text>{'Occlusion'}</Text>
                    <CheckBox
                        disabled={false}
                    />
                    <Text>{'Stable'}</Text>
                    <CheckBox
                        disabled={false}
                    />
                    <Text>{'Deranged'}</Text>
                    <TextInput />
                    <Text>{'Occlusion'}</Text>
                    <CheckBox
                        disabled={false}
                    />
                    <Text>{'Stable'}</Text>
                    <Text>{'Deranged'}</Text>
                    <TextInput />
                    <Text>{'TMJ'}</Text>
                    <CheckBox
                        disabled={false}
                    />
                    <Text>{'No Abnormalities detected'}</Text>
                    <CheckBox
                        disabled={false}
                    />
                    <Text>{'Stable'}</Text>
                    <Button onPress={() => { }} title={'Upload skull pic'}></Button>
                    <Button onPress={() => { this.props.navigation.navigate('IntraOral') }} title="IntraOral" />
                </ScrollView>
            </View>
        )
    }
}