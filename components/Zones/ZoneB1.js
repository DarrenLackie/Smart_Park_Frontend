import { Polygon } from "react-native-maps";
import {useState, useEffect} from 'react'

const ZoneB1 = () => {

    const [parkingZoneCoordinates, setParkingZoneCoordinates] = useState([])

    useEffect(() => {
        fetch('http://192.168.0.40:8080/zonecoordinates')
            .then(res => res.json())
            .then(zoneData => setParkingZoneCoordinates(zoneData))
    }, [])

    const coordinateList = [];


    const parkingZoneItems = parkingZoneCoordinates.map((zoneItem) => {
        if (zoneItem.zoneId === 20) {
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
        strokeColor="black" // fallback for when `strokeColors` is not supported by the map-provider
        strokeWidth={2} />
    );
}

export default ZoneB1;
