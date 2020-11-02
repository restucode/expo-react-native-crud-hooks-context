import React from 'react'
import { View, Text } from 'react-native'
import { createStackNavigator } from '@react-navigation/stack';

// import screen
import ListSiswa from '../screens/siswa/ListSiswa'
import DetailSiswa from '../screens/siswa/DetailSiswa'
import UpdateSiswa from '../screens/siswa/UpdateSiswa'

// import shared
import Header from '../shared/header'


const Stack = createStackNavigator()

const SiswaStack = () => {
  return(
 	<Stack.Navigator>
   	<Stack.Screen 
   	  name='ListSiswa' 
   	  component={ListSiswa}
   	  options={({ navigation }) => ({
		 header: () => <Header navigation={navigation} title='Siswa' />
	  })}
   	/>
   </Stack.Navigator>
  )
  
}

export default SiswaStack
