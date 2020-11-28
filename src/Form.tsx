import React from 'react';
import { View, ImageBackground, Button } from 'react-native';
import { Formik } from 'formik';
import { Dimensions } from 'react-native';
import BaseForm from './Pages/BaseForm';
import ReportForm from './Pages/ReportForm';
import { createStackNavigator } from '@react-navigation/stack';
import GeneralForm from './Pages/GeneralForm';
import SoftTissueInjury from './Pages/SoftTissueInjury';
import HardTissueInjury from './Pages/HardTissueInjury';
import IntraOral from './Pages/IntraOral';
import FinalReport from './Pages/FinalReport';

const NestedStack = createStackNavigator();

export const MyReactNativeForm = (): JSX.Element => (
    <Formik
        initialValues={{ email: '' }}
        onSubmit={values => console.log(values)}
    >
        {({ handleSubmit, handleChange, handleBlur, values }) => (
            <NestedStack.Navigator>
                <NestedStack.Screen name="Base form" component={BaseForm} />
                <NestedStack.Screen name="Report form" component={ReportForm} />
            </NestedStack.Navigator>
        )}
    </Formik >
);

export default class Form extends React.Component {
    render() {
        return (
            <View style={{ flex: 1 }}>
                <ImageBackground source={require('../assets/images/trauma.png')} style={{ flex: 1, width: Dimensions.get('screen').width, height: Dimensions.get('screen').height }}>
                    <MyReactNativeForm />
                </ImageBackground>
            </View >
        )
    }
}