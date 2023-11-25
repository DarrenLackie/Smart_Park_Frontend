import React, { useState, useEffect } from 'react';
import { View, Text } from 'react-native';
import { PROVIDER_GOOGLE, Marker } from 'react-native-maps';
import styles from './styles';
import MapView from 'react-native-map-clustering';

const Map = () => {

    const initialRegion = {
        latitude: 55.9533,
        longitude: -3.1883,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421
    }

    const [bicyclespots, setBicycleSpots] = useState([])

    useEffect(() => {
        fetch('http://localhost:8080/bicyclespots')
            .then(res => res.json())
            .then(spotData => setBicycleSpots(spotData))
    }, [])

    const bicycleItems = bicyclespots.map((spot) => (
        <Marker
            key={spot.council_identifier}
            coordinate={{ latitude: spot.latitude, longitude: spot.longitude }}
            title={`Capacity: ${spot.capacity}`}
        />
    ))

// ToDo: We can set showUserLocation on MapView and we need to look into react-native-permissions
    return (
        <View style={styles.container}>
            <MapView
                style={styles.map}
                provider={PROVIDER_GOOGLE}
                minPoints={2}
                region={initialRegion}
                radius={200}
                >
                {bicycleItems}
            </MapView>
        </View>
    )
}

export default Map;
