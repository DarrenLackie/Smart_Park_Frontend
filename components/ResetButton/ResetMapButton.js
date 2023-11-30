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
        // marginLeft: 340,
        position: 'absolute',
        right: 0,
        marginRight: 20,
        marginTop: 70,
        height: 50,
        width: 70,

        textAlign: 'center',
        fontSize: 16,
        color: '#000',
        backgroundColor: '#fff',

        position: 'absolute',
        paddingTop: 7,

        shadowColor: 'gray',
        shadowOffset: {width: 2, height: 2},
        shadowOpacity: 0.8,
        borderRadius: 5
    }
})

export default ResetMapButton;
