import { Polygon } from "react-native-maps";
import {useState, useEffect} from 'react'

const Zone1 = () => {

    const [parkingZoneCoordinates, setParkingZoneCoordinates] = useState([])

    useEffect(() => {
        fetch('http://localhost:8080/zonecoordinates')
            .then(res => res.json())
            .then(zoneData => setParkingZoneCoordinates(zoneData))
    }, [])

    const coordinateList = [];


    const parkingZoneItems = parkingZoneCoordinates.map((zoneItem) => {
        if (zoneItem.zoneId === 3) {
            const coordinate = {
                latitude: zoneItem.latitude, 
                longitude: zoneItem.longitude
            };
            coordinateList.push(coordinate);
        }

        return null;
    })

    return (
        <Polygon 
        coordinates={coordinateList}
        strokeWidth={2}
        strokeColor="#7800F0"
        />
    );
}

export default Zone1;
