import React from 'react'
<<<<<<< HEAD
=======
import { View, Text } from 'react-native'
>>>>>>> 020f9522ee44714fdc9fd02eaa30c2bc5d81ec8c
import { createStackNavigator } from '@react-navigation/stack';

// import screen
import Home from '../screens/home/Home'


// import shared
import Header from '../shared/header'

const Stack = createStackNavigator()

const HomeStack = () => {
	return(
	 <Stack.Navigator>
		<Stack.Screen 
	 		name='Home' 
	 		component={Home} 
	 		options={({ navigation }) => ({
	 		 	header: () => <Header navigation={navigation} title='Home' />
	 		 })}
		 />
	 </Stack.Navigator>
	)
 
}

export default HomeStack