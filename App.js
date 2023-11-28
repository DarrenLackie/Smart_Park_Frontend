import React, { useEffect, useState } from 'react';
import Map from './components/Map/Map';
import * as Location from 'expo-location';

export default function App() {
  const [userLocation, setUserLocation] = useState(null);

  useEffect(() => {
    const startLocationUpdates = async () => {
      try {
        let { status } = await Location.requestForegroundPermissionsAsync();

        if (status === 'granted') {
          console.log('Permission granted!');

          const initialLocation = await Location.getCurrentPositionAsync();
          setUserLocation(initialLocation);

          // start location updates
          Location.startLocationUpdatesAsync('locationUpdates', {
            accuracy: Location.Accuracy.Highest,
            distanceInterval: 10, // Update location every 10 meters
            timeInterval: 1000, // 1 second
          });

          // subscribe to location updates
          Location.EventEmitter.addListener('Expo.locationChanged', (event) => {
            console.log('New location:', event);
            setUserLocation(event);
          });
        } else {
          console.log('Permission was denied');
        }
      } catch (error) {
        console.error('Error getting location permissions:', error);
      }
    };

    startLocationUpdates();

    // stop location updates when the component unmounts
    return () => {
      Location.stopLocationUpdatesAsync('locationUpdates');
    };
  }, []);

  return (
    <Map userLocation={userLocation}/>
    // <View style={styles.container}>
    //   {location && (
    //     <MapView
    //       style={styles.map}
    //       provider={PROVIDER_GOOGLE}
    //       initialRegion={{
    //         latitude: location.coords.latitude,
    //         longitude: location.coords.longitude,
    //         latitudeDelta: 0.08,
    //         longitudeDelta: 0.08,
    //       }}
    //     >

    //       <Marker
    //         coordinate={{
    //           latitude: location.coords.latitude,
    //           longitude: location.coords.longitude,
    //         }}
    //         title="Your Location"
    //         description="This is where you are"
    //       />
    //     </MapView>
    //   )}
    // </View>
  );
}

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
//   map: {
//     flex: 1,
//     width: '100%',
//     height: '100%'
//   },
// });
