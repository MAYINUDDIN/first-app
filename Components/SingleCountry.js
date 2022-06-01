import { View, Text, TextInput, Image, StyleSheet } from 'react-native'
import React from 'react'


export default function SingleCountry({ country }) {
    return (
        <View>
            <Text style={styles.header}>Country: {country.name.common}</Text>
            {/* <TextInput style={styles.input}></TextInput> */}
            <Image
                source={{
                    uri: country.flags.png
                }}
                style={{ width: 200, height: 200 }}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    header: {
        flex: 2,
        marginTop: 20,
        fontSize: 14,
        color: 'green'
    },
    input: {
        height: 40,
        margin: 12,
        borderWidth: 1,
        padding: 10,
    }
});