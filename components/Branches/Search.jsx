import { View, Text, Image, TextInput } from 'react-native'
import React from 'react'
import Ionicons from '@expo/vector-icons/Ionicons';
import { Colors } from '@/constants/Colors'

export default function Search() {

    return (
        <View style={{
            padding: 20,
            paddingTop: 20,
        }}>

           

            <View style={{
                display: 'flex',
                flexDirection: 'row',
                gap: 10,
                alignItems: 'center',
                backgroundColor: '#fff',
                paddingLeft: 20,
                paddingRight: 30,
                marginTop: 10,
                marginBottom: 10,
                borderRadius: 99,
                
            }}>
                
                <TextInput style={{
                    fontFamily: 'Poppins_Medium',
                    fontSize: 14,
                    paddingLeft: 10,
                    width: '90%',
                    height: 60
                }} placeholder='Search for a car' />
                <Ionicons name="search" size={24} color="#212121" />
                
            </View>
        </View>
    )
}