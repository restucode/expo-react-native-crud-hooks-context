import React, { useState } from 'react'
import { 
	View, Text, StyleSheet,
	FlatList, TouchableOpacity,
	ScrollView
} from 'react-native'

// import global styles
import { globalStyles } from '../../styles/GlobalStyles'

// import contect
import { useSiswaContext } from '../../contexts/SiswaContext'
import { useGuruContext } from '../../contexts/GuruContext'

// import icons
import { AntDesign } from '@expo/vector-icons'; 

// import shared components
import Card from '../../shared/card'

const Home = ({ navigation }) => {
	const { dataSiswa } = useSiswaContext()
	const { dataGuru } = useGuruContext()
	const [number, setNumber] = useState(1)
<<<<<<< HEAD
=======
	const dataSiswaSort = dataSiswa.sort((a,b) => a.nama > b.nama)
	const dataGuruSort = dataGuru.sort((a,b) => a.nama > b.nama)
>>>>>>> 020f9522ee44714fdc9fd02eaa30c2bc5d81ec8c

	return (
		<View style={globalStyles.container}>

		
		 <View style={styles.headerCard}>
		 	<Text style={styles.headerCardText}>Data Siswa</Text>
		 </View>
		 <View style={globalStyles.listCard}>
		  <FlatList
<<<<<<< HEAD
		   data={dataSiswa}
		   
		   renderItem={({ item, index }) => (
		   	<Card>
		   		<View style={globalStyles.circleNum}>
=======
		   data={dataSiswaSort}
		   
		   renderItem={({ item, index }) => (
		   	<Card>
		   				   	<View style={globalStyles.circleNum}>
>>>>>>> 020f9522ee44714fdc9fd02eaa30c2bc5d81ec8c
			   		<Text style={globalStyles.circleNumText}>{number + index}</Text>
			   	</View>
		   		<Text>{ item.nama }</Text>
		   	</Card>
		   )}
		 />
		 </View>
		 

		 <View style={styles.headerCard}>
		 	<Text style={styles.headerCardText}>Data Guru</Text>
		 </View>
		 <View style={globalStyles.listCard}>
		  <FlatList
<<<<<<< HEAD
		   data={dataGuru}
=======
		   data={dataGuruSort}
>>>>>>> 020f9522ee44714fdc9fd02eaa30c2bc5d81ec8c
		   
		   renderItem={({ item, index }) => (
		   	<Card>
			   	<View style={globalStyles.circleNum}>
			   		<Text style={globalStyles.circleNumText}>{number + index}</Text>
			   	</View>
		   		<Text>{ item.nama }</Text>
		   	</Card>
		   )}
		 />
		 </View>

		</View>
	)
}

const styles = StyleSheet.create({
	headerCard : {
	 	backgroundColor: '#4B78FA',
	 	width: 100,
	 	height:30,
	 	justifyContent: 'center',
	 	alignItems: 'center',
	 	borderTopLeftRadius: 10,
	 	borderBottomRightRadius: 10,
	 	marginVertical: 10,
	 	padding: 5
	},
	headerCardText : {
		color: 'white',
		fontWeight: 'bold',
		fontSize: 15
	},	

})

export default Home