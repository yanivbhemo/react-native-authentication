// Import libs for making a component
import React from 'react';
import { Image, View, Text } from 'react-native';

// Make a component
const Header = ({logoURI}) => {
    const { imageStyle, viewStyle } = styles;

    return (
        <View style={ viewStyle }>
            <Image source={logoURI} style={ imageStyle } />
        </View>
    );
};

const styles = {
    viewStyle: {
        justifyContent: 'center',
        alignItems: 'center',
        height: 160,
        paddingTop: 50,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 6},
        shadowOpacity: 0.2,
        elevation: 2,
        position: 'relative'
    },
    imageStyle: {
        width: 230,
        height: 170
    }
};

// Make the component available to other parts of the app
export  {Header};