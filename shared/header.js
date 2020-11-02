import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { MaterialIcons } from '@expo/vector-icons'


const Header = ({ navigation, title }) => {

	const openMenu = () => {
	  navigation.openDrawer()
	}

	return (
		<View style={styles.header}>
		  <MaterialIcons name='menu' size={32} onPress={openMenu} color='#fff' style={styles.icon} />
		  <View style={styles.headerTitle}>
		  	<Text style={styles.headerText}>{ title }</Text>
		  </View>
		</View>
	)
}

const styles = StyleSheet.create({
	header: {
		width: '100%',
		height: 70,
		flexDirection: 'row',
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: '#4B78FA',
	
	},
	headerText : {
		fontWeight: 'bold',
		fontSize: 20,
		color: '#fff',
		letterSpacing: 1,
		paddingTop:20
	},
	icon: {
	    position: 'absolute',
	    left: 16,
	    paddingTop:20
	},
	headerTitle : {
		flexDirection: 'row'
	},

})

export default Header