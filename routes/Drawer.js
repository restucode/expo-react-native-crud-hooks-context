import React from 'react'
import { View, Text } from 'react-native'
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import SiswaContextProvider from '../contexts/SiswaContext'
import GuruContextProvider from '../contexts/GuruContext'
// import screen
import HomeStack from './HomeStack'
import SiswaStack from './SiswaStack'
<<<<<<< HEAD
import GuruStack from './GuruStack';
=======
>>>>>>> 020f9522ee44714fdc9fd02eaa30c2bc5d81ec8c



const Drawer = createDrawerNavigator()

const RootDrawerNavigation = () => {
  return (
  	<SiswaContextProvider>
  	<GuruContextProvider>
  	  <NavigationContainer>
	    <Drawer.Navigator initialRouteName="Home">
	      <Drawer.Screen name="Home" component={HomeStack} />
	      <Drawer.Screen name="Siswa" component={SiswaStack} />
<<<<<<< HEAD
		  <Drawer.Screen name="Guru" component={GuruStack} />
=======
>>>>>>> 020f9522ee44714fdc9fd02eaa30c2bc5d81ec8c
	    </Drawer.Navigator>
	  </NavigationContainer>
  	</GuruContextProvider>
  	</SiswaContextProvider>
 	
  )
 
}

export default RootDrawerNavigation