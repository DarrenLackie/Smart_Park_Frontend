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
                title="Reset" 
                onPress={handleResetMap}>
            </Button>
        </View>
    );
};

const styles = StyleSheet.create({
    button: {
        marginLeft: 340,
        marginRight: 30,
        marginTop: 70,
        height: 50,
        width: 70,
        alignContent: 'center',
        textAlign: 'center',
        fontSize: 16,
        color: '#000',
        backgroundColor: '#fff',

        position: 'absolute',
        shadowColor: 'gray',
        shadowOffset: 2,
        shadowOpacity: 0.8,
        borderRadius: 5
    }
})

export default ResetMapButton;
