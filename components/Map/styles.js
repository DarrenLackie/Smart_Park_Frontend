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
        backgroundColor: 'white',
        marginTop: 130,
        marginLeft: 40,
        paddingLeft: 10,
        height: 40,
        position: 'absolute',
        flexDirection: 'row',
        alignItems: 'center',
        borderRadius: 5,
        paddingVertical: 10,
        paddingHorizontal: 15,
        shadowColor: 'gray',
        shadowOffset: {width: 2, height: 2},
        shadowOpacity: 0.8,
    },
    vehicletoggle: {
        backgroundColor: 'white',
        marginTop: 130,
        marginLeft: 200, 
        paddingLeft: 10,
        height: 40,
        position: 'absolute',
        flexDirection: 'row',
        alignItems: 'center',
        borderRadius: 5,
        paddingVertical: 10,
        paddingHorizontal: 15,
        shadowColor: 'gray',
        shadowOffset: {width: 2, height: 2},
        shadowOpacity: 0.8,
    },
});

export default styles