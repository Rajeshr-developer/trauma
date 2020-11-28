import React from 'react';
import { View, ImageBackground, Dimensions, Text } from 'react-native';

export default class HomePage extends React.Component<any, any> {

    private __id: NodeJS.Timeout;

    render(): JSX.Element {
        return (
            <View style={{ flex: 1, justifyContent: 'center', alignContent: 'center' }}>
                <ImageBackground source={require('../assets/images/trauma.png')} style={{ flex: 1, width: Dimensions.get('screen').width, height: Dimensions.get('screen').height }} blurRadius={0}>
                    <View style={{ flex: 1, justifyContent: 'center', alignContent: 'center', alignItems: 'center' }}>
                        <Text style={{ fontFamily: '', textDecorationStyle: 'dotted', fontSize: 70, color: '#fff' }}>{'Trauma'}</Text>
                    </View>
                </ImageBackground>
            </View>
        )
    }

    componentDidMount(): void {
        this.__id = setInterval((): void => {
            this.props.navigation.navigate('Form');
        }, 3000);
    }
}