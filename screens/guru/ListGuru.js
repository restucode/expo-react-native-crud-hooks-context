<<<<<<< HEAD
import React, { useState } from 'react'
import { 
	View, Text, TouchableOpacity,
	StyleSheet, TouchableWithoutFeedback,
	Keyboard, FlatList, Modal
} from 'react-native'

// import global styles
import { globalStyles } from '../../styles/GlobalStyles'

// import contect
import { useGuruContext } from './../../contexts/GuruContext'

// import shared component
import Card from '../../shared/card'


// import screens
import TambahGuru from './TambahGuru'


// import icons
import { MaterialIcons } from '@expo/vector-icons'
import { AntDesign } from '@expo/vector-icons'
import { Feather } from '@expo/vector-icons'
import { MaterialCommunityIcons } from '@expo/vector-icons'



const ListGuru = ({ navigation }) => {
	const { dataGuru, dispatch } = useGuruContext()
	const [ modalOpen, setModalOpen ] = useState(false)

	
	const handlePressDelete = (key) => {
		dispatch({type: 'DELETE_GURU', key})
	}
	return (
		<View style={globalStyles.container}>
		 <Modal visible={modalOpen} animationType='slide'>
		 	<TouchableWithoutFeedback onPress={Keyboard.dismiss}>
		 	   <View style={styles.modalContent}>
				 <TouchableOpacity 
		 			style={globalStyles.addButton}
		 			onPress={() => setModalOpen(false)}
		 		 >
		 		   <MaterialIcons
		 	 	 	size={24}
		 	 	 	name='close'
		 	  	 	color='white'
		 	  	   />
 				 </TouchableOpacity>
				 
				 <TambahGuru setModalOpen={setModalOpen} />
		 	  </View>
		 	</TouchableWithoutFeedback>
		 </Modal>	

		 <View style={{...globalStyles.listCard, ...styles.cardGuru}}>
		  <FlatList
		   data={dataGuru}
		   renderItem={({ item, index }) => (
		   	<Card>
		   	<View style={globalStyles.circleNum}>
		   		<Text style={globalStyles.circleNumText}>{1 + index}</Text>
		   	</View>
		   	<View style={styles.cardGuruContent}>
		   		<Text>{ item.nama }</Text>
		   		<View style={styles.actionMenu}>
				   <TouchableOpacity
				    onPress={() => navigation.navigate('DetailGuru', item)}
				   >
					<MaterialCommunityIcons name="account-card-details-outline" style={{ marginRight: 20}}  size={24} color="#5587F9"/>
				   </TouchableOpacity>	
		   			
					<TouchableOpacity
					 onPress={() => navigation.navigate('UpdateGuru', item)}
					>	
						<AntDesign name="edit" size={24} style={{ marginRight: 20}} color="#4958EB"  />
					</TouchableOpacity>
		   			
					<TouchableOpacity
					 onPress={() => handlePressDelete(item.key)} 
					>
					  <Feather name="trash-2" size={24} color="#F92B2B" />
					</TouchableOpacity>
		   			
		   		</View>
		   	</View>
		   		
		   	</Card>
		   )}
		 />
		 </View>
		 <TouchableOpacity style={globalStyles.addButton}
		 onPress={() => setModalOpen(true)}>
		 		<MaterialIcons
		 	 	 size={24}
		 	 	 name='add'
		 	  	 color='white'
		 	  	 
		 		/>
 		</TouchableOpacity>
=======
import React from 'react'
import { View, Text } from 'react-native'

const ListGuru = () => {
	return (
		<View>
			<Text>Screen Guru</Text>
>>>>>>> 020f9522ee44714fdc9fd02eaa30c2bc5d81ec8c
		</View>
	)
}

<<<<<<< HEAD

const styles = StyleSheet.create({
	cardGuru : {
		maxHeight: '85%',
		padding: 15,
	},
	actionMenu: {
		flexDirection: 'row',
		alignSelf: 'flex-end',
		marginTop:15,
	},
	cardGuruContent: {
		flexDirection: 'column',
		justifyContent: 'space-between',
	},
	modalContent: {
		flex: 1,
	  }

})

=======
>>>>>>> 020f9522ee44714fdc9fd02eaa30c2bc5d81ec8c
export default ListGuru