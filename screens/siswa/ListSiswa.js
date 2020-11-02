import React, { useState } from 'react'
import { 
	View, Text, StyleSheet,
	Modal, TouchableWithoutFeedback, 
	Keyboard, TouchableOpacity, FlatList
} from 'react-native'

// import global styles
import { globalStyles } from '../../styles/GlobalStyles'

// import contect
import { useSiswaContext } from '../../contexts/SiswaContext'

// import icons
import { MaterialIcons } from '@expo/vector-icons'
import { AntDesign } from '@expo/vector-icons'
import { Feather } from '@expo/vector-icons'
import { MaterialCommunityIcons } from '@expo/vector-icons';

// import shared component
import Card from '../../shared/card'

const ListSiswa = () => {
	const [modalOpen, setModalOpen] = useState(false)
	const [number, setNumber] = useState(1)
	const { dataSiswa } = useSiswaContext()
	const dataSiswaSort = dataSiswa.sort((a,b) => a.nama > b.nama)

	return (
		<View style={globalStyles.container}>
		 <Modal visible={modalOpen} animationType='slide'>
		 	<TouchableWithoutFeedback onPress={Keyboard.dismiss}>
		 	   <View>
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
		 		
		 		 <Text>Tambah Data Siswa</Text>
		 	  </View>
		 	</TouchableWithoutFeedback>
		 </Modal>

		 <View style={{...globalStyles.listCard, ...styles.cardSiswa}}>
		  <FlatList
		   data={dataSiswaSort}
		   
		   renderItem={({ item, index }) => (
		   	<Card>
		   	<View style={globalStyles.circleNum}>
		   		<Text style={globalStyles.circleNumText}>{number + index}</Text>
		   	</View>
		   	<View style={styles.cardSiswaContent}>
		   		<Text>{ item.nama }</Text>
		   		<View style={styles.actionMenu}>
		   			<MaterialCommunityIcons name="account-card-details-outline" style={{ marginRight: 20}}  size={24} color="#5587F9" />
		   			<AntDesign name="edit" size={24} style={{ marginRight: 20}} color="#4958EB" />
		   			<Feather name="trash-2" size={24} color="#F92B2B" />
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
			
		</View>
	)
}

const styles = StyleSheet.create({
	cardSiswa : {
		maxHeight: '85%',
		padding: 15,
	},
	actionMenu: {
		flexDirection: 'row',
		alignSelf: 'flex-end',
		marginTop:15,
	},
	cardSiswaContent: {
		flexDirection: 'column',
		justifyContent: 'space-between',
	}

})

export default ListSiswa