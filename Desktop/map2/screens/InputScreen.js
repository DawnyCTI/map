// Dawny Chalas telemaco 2022-1014
import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet, Alert } from 'react-native';

export default function InputScreen({ navigation }) {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [latitude, setLatitude] = useState('');
    const [longitude, setLongitude] = useState('');

    const handlePress = () => {
        if (!firstName || !lastName || !latitude || !longitude) {
            Alert.alert("Todos los campos son obligatorios.");
            return;
        }

        if (isNaN(latitude) || isNaN(longitude)) {
            Alert.alert("Latitud y Longitud deben ser números.");
            return;
        }

        navigation.navigate('Map', {
            firstName,
            lastName,
            latitude: parseFloat(latitude),
            longitude: parseFloat(longitude),
        });
    };

    return (
        <View style={styles.container}>
            <TextInput
                style={styles.input}
                placeholder="Nombre"
                value={firstName}
                onChangeText={setFirstName}
            />
            <TextInput
                style={styles.input}
                placeholder="Apellido"
                value={lastName}
                onChangeText={setLastName}
            />
            <TextInput
                style={styles.input}
                placeholder="Latitud"
                value={latitude}
                onChangeText={setLatitude}
                keyboardType="numeric"
            />
            <TextInput
                style={styles.input}
                placeholder="Longitud"
                value={longitude}
                onChangeText={setLongitude}
                keyboardType="numeric"
            />
            <Button title="Siguiente" onPress={handlePress} />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        padding: 16,
    },
    input: {
        height: 40,
        borderColor: 'gray',
        borderWidth: 1,
        marginBottom: 12,
        padding: 8,
    },
});
