import { GooglePlacesAutocomplete } from "react-native-google-places-autocomplete";
import APIKEY from '../../secrets'  
// import { StyleSheet } from "react-native";

// const styles = StyleSheet.create({
//     container: {
//         padding: 10,
//         height:'100%'
//     },
//     textInput: {
//         marginLeft: 10,
//         marginRight: 10,
//         marginTop: 50,
//         height: 50,
//         color: '#5d5d5d',
//         fontSize: 16,
//     },
// })

const LocationSearch = () => {
    return (
        <GooglePlacesAutocomplete
                placeholder="Search for a location"
                onPress={(data, details = null) => {
                    console.log(data, details)
                }}
                query={{
                    key: APIKEY,
                    language: 'en',
                }}
                fetchDetails={true}
                styles={{
                    textInputContainer: {
                        backgroundColor: 'rgba(0,0,0,0)',
                        borderTopWidth: 0,
                        borderBottomWidth: 0,
                    },
                textInput: {
                    marginLeft: 10,
                    marginRight: 10,
                    marginTop: 50,
                    height: 50,
                    color: '#5d5d5d',
                    fontSize: 16,
                },
                predefinedPlacesDescription: {
                    color: '#1faadb',
                }
            }}
        />
    )
}

export default LocationSearch