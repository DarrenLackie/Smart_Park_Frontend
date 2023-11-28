import { GooglePlacesAutocomplete } from "react-native-google-places-autocomplete"; 
import { StyleSheet, useWindowDimensions } from "react-native";
import APIKEY from '../../secrets'

const LocationSearch = ({ onSelectLocation }) => {

    const handlePlaceSelection = (data, details = null) => {

        const { lat, lng } = details.geometry.location
        const latDelta = 0.008;
        const lngDelta = latDelta

        const selectedLocation = {
            latitude: lat,
            longitude: lng,
            latitudeDelta: latDelta,
            longitudeDelta: lngDelta,
        };
        onSelectLocation(selectedLocation)
    }

    return (
        <GooglePlacesAutocomplete
            placeholder="Search for a location"
            debounce={100}
            minLength={2}
            query={{
                key: APIKEY,
                language: 'en',
            }}
            onPress={handlePlaceSelection}
            fetchDetails={true}
            returnKeyType={"search"}
            enablePoweredByContainer={false}
            

            // style={[styles.textInput, styles.textInputContainer]}
            styles={{
                textInputContainer: {
                    backgroundColor: 'rgba(0,0,0,0)',
                    borderTopWidth: 0,
                    borderBottomWidth: 0,
                },
                textInput: {
                    marginLeft: 20,
                    marginRight: 20,
                    marginTop: 70,
                    height: 50,
                    color: '#000',
                    fontSize: 16,
                    // position: "absolute",
                    // marginBottom: useWindowDimensions - 40,
                },
                predefinedPlacesDescription: {
                    color: '#000',
                }
            }}
        />
    )
}

export default LocationSearch