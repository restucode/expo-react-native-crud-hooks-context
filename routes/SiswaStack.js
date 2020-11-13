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
<<<<<<< HEAD
		<Stack.Screen 
		name='ListSiswa' 
		component={ListSiswa}
		options={({ navigation }) => ({
			header: () => <Header navigation={navigation} title='Siswa' />
		})}
		/>
	   <Stack.Screen 
		 name='DetailSiswa'
		 component={DetailSiswa}  
		 options={{
			 title: 'Detail Siswa'
		 }}
	   />
	   <Stack.Screen 
		   name='UpdateSiswa'
		   component={UpdateSiswa}
		   options={{
			 title: 'Update Siswa'
		   }}
	   />
=======
   	<Stack.Screen 
   	  name='ListSiswa' 
   	  component={ListSiswa}
   	  options={({ navigation }) => ({
		 header: () => <Header navigation={navigation} title='Siswa' />
	  })}
   	/>
>>>>>>> 020f9522ee44714fdc9fd02eaa30c2bc5d81ec8c
   </Stack.Navigator>
  )
  
}

export default SiswaStack
