import React from 'react';
import { Button, View } from 'react-native';
import { StyleSheet } from 'react-native';

const ResetMapButton = ({ onResetMap }) => {
    const handleResetMap = () => {
        onResetMap();
    };

    return (
        <View style={styles.button}>
            <Button 
            title="Reset Map" 
            onPress={handleResetMap} 
            />
        </View>
    );
};

const styles = StyleSheet.create({
    button: {
        marginLeft: 10,
        marginRight: 10,
        marginTop: 200,
        height: 100,
        color: '#5d5d5d',
        position: 'absolute'
    }
})

export default ResetMapButton;
