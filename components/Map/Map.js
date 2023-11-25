import React, { useState, useEffect } from 'react';
import { View, Text } from 'react-native'; // Make sure to import Text from react-native
import MapView, { PROVIDER_GOOGLE, Marker } from 'react-native-maps';
import styles from './styles';

const Map = () => {
    const [bicyclespots, setBicycleSpots] = useState([]);

    useEffect(() => {
        fetch('http://localhost:8080/bicyclespots')
            .then(res => res.json())
            .then(spotData => setBicycleSpots(spotData))
    }, []);

    const bicycleItems = bicyclespots.map((spot, index) => (
        <Marker
            key={spot.council_identifier}
            coordinate={{ latitude: spot.latitude, longitude: spot.longitude }}
            title={`Capacity: ${spot.capacity}`}
            pinColor='blue'
        />
    ));

// ToDo: We can set showUserLocation on MapView and we need to look into react-native-permissions
    return (
        <View style={styles.container}>
            <MapView
                style={styles.map}
                provider={PROVIDER_GOOGLE}
                region={{
                    latitude: 55.9533,
                    longitude: -3.1883,
                    latitudeDelta: 0.0922,
                    longitudeDelta: 0.0421
                }}>
                {bicycleItems}
            </MapView>
        </View>
    );
}

export default Map;
