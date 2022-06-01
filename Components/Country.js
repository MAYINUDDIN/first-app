import { View, Text, ScrollView, StyleSheet, TextInput } from 'react-native'

import React, { useState, useEffect } from 'react'
import SingleCountry from './SingleCountry';


export default function Country() {
    const [countries, setCountries] = useState([]);
    const [seacrh, setSearch] = useState([]);

    useEffect(() => {
        fetch('https://restcountries.com/v3.1/all')
            .then(Response => Response.json())
            .then(data => {
                setSearch(data);
                setCountries(data)
            });

    }, [])

    const handleSearch = (Text) => {
        const filtered = countries.filter(country => country.name.common.includes(Text));
        setSearch(filtered);
    }


    return (
        <View>
            <Text style={styles.input}> Country: {seacrh.length}</Text>
            <TextInput
                onChangeText={handleSearch}
                style={styles.input}></TextInput>
            <ScrollView>

                {
                    seacrh.map(country => <SingleCountry id={country.id} country={country}></SingleCountry>)
                }
            </ScrollView>
        </View>
    )
}
const styles = StyleSheet.create({

    input: {
        height: 40,
        margin: 12,
        borderWidth: 1,
        padding: 10,
        marginTop: 50,
    }
});