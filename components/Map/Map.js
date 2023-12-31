import React, { useState, useEffect, useRef } from 'react';
import { View, Text, TouchableOpacity} from 'react-native';
import { PROVIDER_GOOGLE, Marker, Callout, CalloutSubview } from 'react-native-maps';
import styles from './styles';
import MapView from 'react-native-map-clustering';
import Zone1 from '../Zones/Zone1';
import Zone2 from '../Zones/Zone2';
import Zone3 from '../Zones/Zone3';
import Zone4 from '../Zones/Zone4';
import Zone5 from '../Zones/Zone5';
import Zone5A from '../Zones/Zone5A';
import Zone1A from '../Zones/Zone1A';
import Zone6 from '../Zones/Zone6';
import Zone7 from '../Zones/Zone7';
import Zone8 from '../Zones/Zone8';
import ZoneN1 from '../Zones/ZoneN1';
import ZoneN2 from '../Zones/ZoneN2';
import ZoneN4 from '../Zones/ZoneN4';
import ZoneN3 from '../Zones/ZoneN3';
import ZoneN5 from '../Zones/ZoneN5';
import ZoneB1 from '../Zones/ZoneB1';
import ZoneS1 from '../Zones/ZoneS1';
import ZoneS2 from '../Zones/ZoneS2';
import ZoneS3 from '../Zones/ZoneS3';
import ZoneS4 from '../Zones/ZoneS4';
import ZoneB2 from '../Zones/ZoneB2';
import ZoneB3 from '../Zones/ZoneB3';
import ZoneB4 from '../Zones/ZoneB4';
import ZoneB5 from '../Zones/ZoneB5';
import ZoneB6 from '../Zones/ZoneB6';
import ZoneB7 from '../Zones/ZoneB7';
import ZoneB8 from '../Zones/ZoneB8';
import ZoneB10 from '../Zones/ZoneB10';
import ZoneB9 from '../Zones/ZoneB9';
import LocationSearch from '../SearchBar/LocationSearch';
import ResetMapButton from '../ResetButton/ResetMapButton';

const Map = ({ userLocation }) => {
    const mapRef = useRef(null);

    const initialRegion = {
        latitude: userLocation?.coords.latitude || 55.9533,
        longitude: userLocation?.coords.longitude || -3.1883,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421
    }

    const [bicycleSpots, setBicycleSpots] = useState([])
    const [parkingSpots, setParkingSpots] = useState([])
    const [showBicycleSpots, setShowBicycleSpots] = useState(true);
    const [showParkingSpots, setShowParkingSpots] = useState(true);
    const [region, setRegion] = useState(initialRegion)
    const [currentLocation, setCurrentLocation] = useState({})


    useEffect(() => {
        setCurrentLocation(userLocation)
    }, [userLocation])

    useEffect(() => {
        const fetchBicycleSpots = fetch('http://localhost:8080/bicyclespots')
            .then((res) => res.json())

        const fetchParkingSpots = fetch('http://localhost:8080/parkingspots')
            .then((res) => res.json())

        Promise.all([fetchBicycleSpots, fetchParkingSpots])
            .then(([spotData, parkingSpotData]) => {
                const bicycleItems = spotData.map((spot) => (
                    <Marker
                        key={spot.council_identifier}
                        coordinate={{ latitude: spot.latitude, longitude: spot.longitude }}
                        title={`${spot.capacity} bicycle spots`}
                        pinColor="blue"
                        identifier='bikeSpots'
                    />
                ))

                const parkingSpotItems = parkingSpotData.map((parkingSpot) => (
                    <Marker
                        key={parkingSpot.councilBayIdentifier}
                        coordinate={{
                            latitude: parkingSpot.defaultLatitude,
                            longitude: parkingSpot.defaultLongitude,
                        }}
                        identifier='parkingSpots'
                    >
                        <Callout>
                            <Text style={styles.text}>{`Price: £${(parkingSpot.price/100).toFixed(2)} / hour`}</Text>
                            <Text style={styles.text}>See restrictions</Text>
                        </Callout>
                    </Marker>
                ))

                setBicycleSpots(bicycleItems);
                setParkingSpots(parkingSpotItems);
            })
            .catch((error) => {
                console.error('Error fetching data:', error.message);
            })
    }, [])


    useEffect(() => {
        handleResetMap()
    }, [userLocation])


    const handleLocationSelect = (selectedRegion) => {

        const aspectRatio = 1
        const latDelta = 0.01
        const lngDelta = latDelta * aspectRatio
        // TODO: fix 
        const newRegion = {
            ...selectedRegion,
            latitudeDelta: latDelta,
            longitudeDelta: lngDelta
        }
        mapRef.current.animateToRegion(selectedRegion, 0.5 * 1000)

        setRegion(selectedRegion)
    }

    const handleResetMap = () => {
        setRegion(initialRegion)
        mapRef.current.animateToRegion(initialRegion, 0.5 * 1000)

    };

    const handleRegionChange = (newRegion) => {

        if (!newRegion){
            return
        }

        if (!region) {
            setRegionToThis = newRegion
            
        } else {
            hasMovedLatitude = Math.abs(newRegion.latitude - region.latitude)
            hasMovedLongitude = Math.abs(newRegion.longitude - region.longitude)

            if ((hasMovedLatitude > 0.1 || hasMovedLongitude > 0.1)) {
                setRegionToThis = newRegion

            } else {
                return
            }
        }
        setRegion(setRegionToThis)
    }

    const toggleBicycleSpots = () => {
        setShowBicycleSpots(!showBicycleSpots);
    };

    const toggleParkingSpots = () => {
        setShowParkingSpots(!showParkingSpots);
    };

    return (
        <>
        <View style={styles.container}>
            <MapView
                style={styles.map}
                clu
                // minZoom={minZoom}
                // clusterColor='red'
                provider={PROVIDER_GOOGLE}
                ref={mapRef}
                initialRegion={initialRegion}
                onRegionChangeComplete={handleRegionChange}
                radius={150}
                showsUserLocation={true}
            >
                <TouchableOpacity onPress={toggleBicycleSpots}>
                    <Text style={styles.bicycletoggle}>
                        {showBicycleSpots ? 'Hide Bicycle Spots' : 'Show Bicycle Spots'}
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={toggleParkingSpots}>
                    <Text style={styles.vehicletoggle}>
                        {showParkingSpots ? 'Hide Parking Spots' : 'Show Parking Spots'}
                    </Text>
                </TouchableOpacity>
                <LocationSearch onSelectLocation={handleLocationSelect} />
                <Zone1 />
                <Zone1A />
                <Zone2 />
                <Zone3 />
                <Zone4 />
                <Zone5 />
                <Zone5A />
                <Zone6 />
                <Zone7 />
                <Zone8 />
                <ZoneN1 />
                <ZoneN2 />
                <ZoneN3 />
                <ZoneN4 />
                <ZoneN5 />
                <ZoneS1 />
                <ZoneS2 />
                <ZoneS3 />
                <ZoneS4 />
                <ZoneB1 />
                <ZoneB2 />
                <ZoneB3 />
                <ZoneB4 />
                <ZoneB5 />
                <ZoneB6 />
                <ZoneB7 />
                <ZoneB8 />
                <ZoneB9 />
                <ZoneB10 />
                {showBicycleSpots && bicycleSpots}
                {showParkingSpots && parkingSpots}
            </MapView>
            <ResetMapButton onResetMap={handleResetMap} />
        </View>
        </>
    )
}


export default Map;