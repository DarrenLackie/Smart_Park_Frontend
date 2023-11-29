import React, { useEffect, useState } from 'react';
import Map from './components/Map/Map';
import * as Location from 'expo-location';
import Directions from './components/directionsattempt';


export default function App() {
  const [userLocation, setUserLocation] = useState({coords: {
    latitude: 55.9533,
    longitude: -3.1883,
    latitudeDelta: 0.0922,
    longitudeDelta: 0.0421
}})

  useEffect(() => {
    const startLocationUpdates = async () => {
      try {
        let { status } = await Location.requestForegroundPermissionsAsync()

        if (status === 'granted') {
          console.log('Permission granted!')

          const initialLocation = await Location.getCurrentPositionAsync()
          setUserLocation(initialLocation)

          // start location updates
          Location.startLocationUpdatesAsync('locationUpdates', {
            accuracy: Location.Accuracy.Highest,
            distanceInterval: 10, // Update location every 10 meters
            timeInterval: 1000, // 1 second
          })

          // subscribe to location updates
          Location.EventEmitter.addListener('Expo.locationChanged', (event) => {
            console.log('New location:', event)
            setUserLocation(event)
          })
        } else {
          console.log('Permission was denied')
        }
      } catch (error) {
        console.error('Error getting location permissions:', error)
      }
    }

    startLocationUpdates()

    // stop location updates when the component unmounts
    return () => {
      Location.stopLocationUpdatesAsync('locationUpdates')
    }
  }, [])

  return (
    // <Map userLocation={userLocation}/>
    <Directions userLocation={userLocation}/>
  )
}
