import React from 'react';
import { Text, TouchableOpacity, Image } from 'react-native';

const Button = ( { type, onPress, imageURI, children } ) => {
    //const URI = '../img/addBtn.png';
    const { 
        BtnImageStyle,
        buttonStyle,
        textStyle 
    } = styles;
    
    if(type==='imageBtn') {
        return (
            <TouchableOpacity onPress={onPress} >
                <Image 
                    style={BtnImageStyle}
                    source={imageURI}
                />
            </TouchableOpacity>
        );
    } else {
        return (
            <TouchableOpacity onPress={onPress} style={buttonStyle}>
                <Text style={textStyle}>
                    {children}
                </Text>
            </TouchableOpacity>
        );
    }
};
const styles = {
    textStyle: {
        alignSelf: 'center',
        color: '#007aff',
        fontSize: 16,
        fontWeight: '600',
        paddingBottom: 10,
        paddingTop: 10
    },
    buttonStyle: {
        alignSelft: 'stretch',
        justifyContent: 'center',
    },
    BtnImageStyle: {
        height: 25,
        width: 25
    }
}
export {Button};