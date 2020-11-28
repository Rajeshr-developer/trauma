import { FormikHandlers, FormikState } from 'formik';
import React from 'react';
import { Button, Dimensions, ImageBackground, TextInput, View } from 'react-native';
export default class BaseForm extends React.Component<any> {
    render() {
        return (
            <ImageBackground source={require('../../assets/images/trauma.png')} style={{ flex: 1, width: Dimensions.get('screen').width, height: Dimensions.get('screen').height }}>
                <View>
                    <TextInput
                        placeholder={'Patient name'}
                        style={{ textDecorationLine: 'underline' }}
                    />
                    <TextInput
                        placeholder={'Op no'}
                    />
                    <TextInput
                        placeholder={'Age'}
                    />
                    <TextInput
                        placeholder={'Sex'}
                    />
                    <TextInput
                        placeholder={'Mode Of Trauma'}
                    />
                    <View style={{ width: '100%', alignItems: 'center', justifyContent: 'center', borderColor: 'yellow', backgroundColor: 'green' }}>
                        <Button onPress={() => { this.props.navigation.navigate('ReportForm') }} title="Next" />
                    </View>
                </View>
            </ImageBackground>
        )
    }
}