import { Polygon } from "react-native-maps";
import {useState, useEffect} from 'react'
import { Alert } from "react-native";

const Zone1 = () => {

    const [parkingZoneCoordinates, setParkingZoneCoordinates] = useState([])
    const [price, setPrice] = useState(0)
    const [hours, setHours] = useState(null)

    const parkingZoneId = 3

    useEffect(() => {
        fetch('http://localhost:8080/zonecoordinates')
            .then(res => res.json())
            .then(zoneData => setParkingZoneCoordinates(zoneData))

    // TODO FIX THIS!!!!!!
        // fetch('http://localhost:8080/parkingzones/{parkingZoneId}')
        //     .then(res => res.json())
        //     .then(zoneInfo => {
        //         setPrice(zoneInfo.price)
        //         setHours(zoneInfo.parkingHours)
        //     })

    }, [])

    // console.log(zoneInfo)

    const coordinateList = [];

    const parkingZoneItems = parkingZoneCoordinates.map((zoneItem) => {
        if (zoneItem.zoneId === parkingZoneId) {
            const coordinate = {
                latitude: zoneItem.latitude, 
                longitude: zoneItem.longitude
            };
            coordinateList.push(coordinate);
        }

        return null;
    })

    // TODO enter price and hours data
    const handlePress = () => {
        console.log('hours: ', hours, 'price: ', price)
        Alert.alert('Parking Info','hadgasdg' )
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

export default Zone1;
