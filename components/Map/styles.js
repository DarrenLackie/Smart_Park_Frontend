import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        
    },
    map: {
        width: '100%',
        height: '100%',
    },
    marker: {
        fontSize: 16,
    },

    text: {
        fontSize: 16,
        color: 'black',
    },

    bicycletoggle: {
        color: 'black',
        backgroundColor: 'white',
        marginTop: 100,
        marginLeft: 20,
        paddingLeft: 10,
        height: 50,
        position: 'absolute',
    },

    vehicletoggle: {
        color: 'black',
        backgroundColor: 'white',
        marginTop: 100,
        marginLeft: 20,
        paddingLeft: 10,
        height: 50,
        position: 'absolute',
    },

    // callout: {
    //     height: 50,
    // }


    //don't think you can style pins here
    // carPin: {
    //     pinColor: 'blue'
    // },
    // bicyclePin: {
    //     pinColor: 'green'
    // },
});

export default styles