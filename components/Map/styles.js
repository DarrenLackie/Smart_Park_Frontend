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
        borderRadius: 8,
        paddingVertical: 10,
        paddingHorizontal: 15,
        borderColor: 'black',
        borderWidth: 1,
        overflow: 'hidden',
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
        borderRadius: 8,
        paddingVertical: 10,
        paddingHorizontal: 15,
        borderColor: 'black',
        borderWidth: 1,
        overflow: 'hidden',
    },
});

export default styles