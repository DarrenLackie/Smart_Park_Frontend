import React from 'react';
import MapView, { Marker, PROVIDER_GOOGLE } from 'react-native-maps';
import MapViewDirections from 'react-native-maps-directions';
import styles from './Map/styles';
import APIKEY from '../secrets';

const Directions = () => {
    const origin = { latitude: 37.78825, longitude: -122.4324 };
    const destination = { latitude: 37.7749, longitude: -122.4194 };

    return (
        <MapView
            style={styles.map}
            provider={PROVIDER_GOOGLE}
            initialRegion={{
                latitude: 37.78825,
                longitude: -122.4324,
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