import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomePage from './src/HomePage';
import Form from './src/Form';
import KeepAwake from 'react-native-keep-awake';

const Stack = createStackNavigator();

export default class App extends React.Component<any, any> {

    componentDidMount() {
        KeepAwake.activate()
    }

    render(): JSX.Element {
        return (
            <NavigationContainer>
                <Stack.Navigator>
                    <Stack.Screen name="Home" component={HomePage} />
                    <Stack.Screen name="Form" component={Form} />
                </Stack.Navigator>
            </NavigationContainer>
        )
    }
}