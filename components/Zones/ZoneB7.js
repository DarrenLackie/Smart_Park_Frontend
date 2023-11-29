import { Polygon } from "react-native-maps";
import {useState, useEffect} from 'react'

const ZoneB7 = () => {

    const [parkingZoneCoordinates, setParkingZoneCoordinates] = useState([])

    useEffect(() => {
        fetch('http://localhost:8080/zonecoordinates')
            .then(res => res.json())
            .then(zoneData => setParkingZoneCoordinates(zoneData))
    }, [])

    const coordinateList = [];


    const parkingZoneItems = parkingZoneCoordinates.map((zoneItem) => {
        if (zoneItem.zoneId === 26) {
            const coordinate = {
                latitude: zoneItem.latitude, 
                longitude: zoneItem.longitude
            };
            coordinateList.push(coordinate);
        }

        return null;
    })

    const handlePress = () => {
        Alert.alert('Parking Info', 'Price: money')
    }

    return (
        <Polygon 
            coordinates={coordinateList}
            strokeWidth={2}
            strokeColor="#7800F0"
            onPress={handlePress}
            tappable={true}
        />
    );
}

export default ZoneB7;
