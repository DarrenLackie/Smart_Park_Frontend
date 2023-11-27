import { GooglePlacesAutocomplete } from "react-native-google-places-autocomplete";
import APIKEY from '../../secrets'

    const LocationSearch = () => {

        const handlePlaceSelection = (data, details = null) => {
            const { lat, lng } = details.geometry.location
            console.log('Selected location:', { latitude: lat, longitude: lng })
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