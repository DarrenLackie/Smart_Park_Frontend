import Map from './components/Map/Map';
import { useState, useEffect } from 'react';
import { View, Text } from 'react-native';

export default function App() {

  const [bicyclespots, setBicycleSpots] = useState([])

  useEffect(() => {
    fetch('http://localhost:8080/bicyclespots')
    .then(res => res.json())
    .then(spotData => setBicycleSpots(spotData))
  }, [])

  const bicycleItems = bicyclespots.map((spot) =>
    spot.latitude
  )

  return (
    // <View>
    //     <Text>{bicycleItems.join(', ')}</Text>
    // </View>
    
    <Map />

  );
}