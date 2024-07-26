// Dawny Chalas telemaco 2022-1014
import React, { useState, useEffect } from 'react';
import { View, StyleSheet, Alert } from 'react-native';
import MapView, { Marker } from 'react-native-maps';
import * as Location from 'expo-location';

export default function MapScreen({ route }) {
    const { firstName, lastName, latitude, longitude } = route.params;
    const [address, setAddress] = useState('');

    useEffect(() => {
        (async () => {
            try {
                const geocode = await Location.reverseGeocodeAsync({
                    latitude,
                    longitude,
                });
                if (geocode.length > 0) {
                    const place = geocode[0];
                    setAddress(`${place.city}, ${place.country}`);
                }
            } catch (error) {
                Alert.alert("Error obteniendo la ubicación.");
            }
        })();
    }, [latitude, longitude]);

    return (
        <View style={styles.container}>
            <MapView
                style={styles.map}
                initialRegion={{
                    latitude,
                    longitude,
                    latitudeDelta: 0.0922,
                    longitudeDelta: 0.0421,
                }}
            >
                <Marker
                    coordinate={{ latitude, longitude }}
                    title={`${firstName} ${lastName}`}
                    description={address}
                    onPress={() => Alert.alert(`Nombre: ${firstName} ${lastName}\nUbicación: ${address}`)}
                />
            </MapView>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    map: {
        ...StyleSheet.absoluteFillObject,
    },
});
