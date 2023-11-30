import React from 'react';
import MapView, { Marker, PROVIDER_GOOGLE } from 'react-native-maps';
import MapViewDirections from 'react-native-maps-directions';
import styles from './Map/styles';
import APIKEY from '../secrets';

const Directions = ({ userLocation }) => {
    const origin = {latitude: userLocation.coords.latitude, longitude: userLocation.coords.longitude}
    const destination = { latitude: 55.942422, longitude: -3.265933 };

    return (
        <MapView
            style={styles.map}
            provider={PROVIDER_GOOGLE}
            initialRegion={{
                latitude: userLocation.coords.latitude,
                longitude: userLocation.coords.longitude,
                latitudeDelta: 0.0922,
                longitudeDelta: 0.0421,
            }}
        >
            <MapViewDirections
                origin={origin}
                destination={destination}
                apikey={APIKEY}
                strokeWidth={4}
                strokeColor="blue"
            />
            <Marker coordinate={origin} title="Origin" />
            <Marker coordinate={destination} title="Destination" />
        </MapView>
    );
};

export default Directions;