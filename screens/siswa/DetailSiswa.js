import React from 'react'
import { View, Text } from 'react-native'
import { globalStyles } from '../../styles/GlobalStyles'
import Card from './../../shared/card';

const DetailSiswa = ({ route }) => {
    const { nis, nama, kelas } = route.params
    return (
        <View style={globalStyles.container}>
         <Card>
            <Text>NIS : {nis}</Text>
            <Text>Nama : {nama}</Text>
            <Text>Kelas : {kelas}</Text>  
         </Card>

        </View>
    )
}

export default DetailSiswa
