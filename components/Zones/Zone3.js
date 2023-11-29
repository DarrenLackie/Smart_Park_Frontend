import { Polygon } from "react-native-maps";
import {useState, useEffect} from 'react'

const Zone3 = () => {

    const [parkingZoneCoordinates, setParkingZoneCoordinates] = useState([])

    useEffect(() => {
        fetch('http://localhost:8080/zonecoordinates')
            .then(res => res.json())
            .then(zoneData => setParkingZoneCoordinates(zoneData))
    }, [])

    const coordinateList = [];


    const parkingZoneItems = parkingZoneCoordinates.map((zoneItem) => {
        if (zoneItem.zoneId === 6) {
            const coordinate = {
                latitude: zoneItem.latitude, 
                longitude: zoneItem.longitude
            };
            coordinateList.push(coordinate);
        }

        return null;
    })

    // console.log(parkingZoneItems)



    return (
        <Polygon 
        coordinates={coordinateList}
        strokeColor="#7800F0" // fallback for when `strokeColors` is not supported by the map-provider
        strokeWidth={2} />
    );
}

export default Zone3;
