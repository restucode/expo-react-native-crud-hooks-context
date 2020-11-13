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

<<<<<<< HEAD

// import screens
import TambahSiswa from './TambahSiswa'

const ListSiswa = ({navigation}) => {
	const [modalOpen, setModalOpen] = useState(false)
	const [number, setNumber] = useState(1)
	const { dataSiswa, dispatch } = useSiswaContext()
	

	const handlePressDelete = (key) => {
		dispatch({type: 'DELETE_SISWA', key})
	}
=======
const ListSiswa = () => {
	const [modalOpen, setModalOpen] = useState(false)
	const [number, setNumber] = useState(1)
	const { dataSiswa } = useSiswaContext()
	const dataSiswaSort = dataSiswa.sort((a,b) => a.nama > b.nama)
>>>>>>> 020f9522ee44714fdc9fd02eaa30c2bc5d81ec8c

	return (
		<View style={globalStyles.container}>
		 <Modal visible={modalOpen} animationType='slide'>
		 	<TouchableWithoutFeedback onPress={Keyboard.dismiss}>
<<<<<<< HEAD
		 	   <View style={styles.modalContent}>
=======
		 	   <View>
>>>>>>> 020f9522ee44714fdc9fd02eaa30c2bc5d81ec8c
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
<<<<<<< HEAD
				 
				 <TambahSiswa setModalOpen={setModalOpen} />
		 	  </View>
		 	</TouchableWithoutFeedback>
		 </Modal>
		 

		 <View style={{...globalStyles.listCard, ...styles.cardSiswa}}>
		  <FlatList
		   data={dataSiswa}
=======
		 		
		 		 <Text>Tambah Data Siswa</Text>
		 	  </View>
		 	</TouchableWithoutFeedback>
		 </Modal>

		 <View style={{...globalStyles.listCard, ...styles.cardSiswa}}>
		  <FlatList
		   data={dataSiswaSort}
>>>>>>> 020f9522ee44714fdc9fd02eaa30c2bc5d81ec8c
		   
		   renderItem={({ item, index }) => (
		   	<Card>
		   	<View style={globalStyles.circleNum}>
		   		<Text style={globalStyles.circleNumText}>{number + index}</Text>
		   	</View>
		   	<View style={styles.cardSiswaContent}>
		   		<Text>{ item.nama }</Text>
		   		<View style={styles.actionMenu}>
<<<<<<< HEAD
				   <TouchableOpacity
				    onPress={() => navigation.navigate('DetailSiswa', item)}
				   >
					<MaterialCommunityIcons name="account-card-details-outline" style={{ marginRight: 20}}  size={24} color="#5587F9"/>
				   </TouchableOpacity>	
		   			
					<TouchableOpacity
					 onPress={() => navigation.navigate('UpdateSiswa', item)}
					>	
						<AntDesign name="edit" size={24} style={{ marginRight: 20}} color="#4958EB"  />
					</TouchableOpacity>
		   			
					<TouchableOpacity
					 onPress={() => handlePressDelete(item.key)} 
					>
					  <Feather name="trash-2" size={24} color="#F92B2B" />
					</TouchableOpacity>
		   			
=======
		   			<MaterialCommunityIcons name="account-card-details-outline" style={{ marginRight: 20}}  size={24} color="#5587F9" />
		   			<AntDesign name="edit" size={24} style={{ marginRight: 20}} color="#4958EB" />
		   			<Feather name="trash-2" size={24} color="#F92B2B" />
>>>>>>> 020f9522ee44714fdc9fd02eaa30c2bc5d81ec8c
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
<<<<<<< HEAD
	},
	modalContent: {
		flex: 1,
	  }
=======
	}
>>>>>>> 020f9522ee44714fdc9fd02eaa30c2bc5d81ec8c

})

export default ListSiswa