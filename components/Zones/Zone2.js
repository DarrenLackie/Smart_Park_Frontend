import { Polygon } from "react-native-maps";
import {useState, useEffect} from 'react'
import { Alert } from "react-native";

const Zone2 = () => {

    const [parkingZoneCoordinates, setParkingZoneCoordinates] = useState([])
    const [price, setPrice] = useState(0)
    const [hours, setHours] = useState(null)

    const parkingZoneId = 5

    useEffect(() => {
        fetch('http://localhost:8080/zonecoordinates')
            .then(res => res.json())
            .then(zoneData => setParkingZoneCoordinates(zoneData))
        fetch(`http://localhost:8080/parkingzones/${parkingZoneId}`)
            .then(res => res.json())
            .then(zoneInfo => {
                setPrice(zoneInfo.price)
                setHours(zoneInfo.parkingHours)
            })
    }, [])

    const coordinateList = [];

    const pricePerHour = `£${(price / 100).toFixed(2)}`
    const weekdayHours = "08:30 - 18:30"
    const sundayHours = "12:30 - 18:30"

    const parkingZoneItems = parkingZoneCoordinates.map((zoneItem) => {
        if (zoneItem.zoneId === 5) {
            const coordinate = {
                latitude: zoneItem.latitude, 
                longitude: zoneItem.longitude
            };
            coordinateList.push(coordinate);
        }

        return null;
    })

    const handlePress = () => {
        Alert.alert(`${pricePerHour} per hour`, `Mon-Sat: ${weekdayHours} | Sun: ${sundayHours}`)
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

export default Zone2;
