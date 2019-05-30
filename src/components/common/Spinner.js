import React from 'react';
import { View, ActivityIndicator } from 'react-native';

const Spinner = () => {
    return (
        <View style={styles.spinnerStyle}>
            <ActivityIndicator size="large" ></ActivityIndicator>
        </View>
    );
}

const styles = {
    spinnerStyle: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    imageStyle: {
        width: 100,
        height: 100
    }
};

export { Spinner };