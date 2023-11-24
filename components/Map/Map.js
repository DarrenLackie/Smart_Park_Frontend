import { View } from 'react-native'
import MapView, { PROVIDER_GOOGLE } from 'react-native-maps'
import styles from './styles';

const Map = () => {
    return ( 
        <View style={styles.container}>
            <MapView 
            style={styles.map} 
            provider={PROVIDER_GOOGLE}                 
            region={{
                latitude: 55.9533,
                longitude: -3.1883,
                latitudeDelta: 0.0922,
                longitudeDelta: 0.0421
            }}>
            </MapView>
        </View>
    );
}

export default Map;