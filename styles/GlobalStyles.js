import { StyleSheet } from 'react-native'

export const globalStyles = StyleSheet.create({
	container: {
	flex: 1,
	padding: 20,
	backgroundColor: '#fff'
	},
	text: {
		color: 'red'
	},
	listCard: {
			position: 'relative',
			flex: 1,
			backgroundColor: '#f2f2f2',
			padding: 10,
			borderRadius: 10
	},
	addButton: {
		width:50,
		height:50,
		marginTop: 20,
		backgroundColor: '#4B78FA',
		borderRadius: 100,
		alignSelf: 'center',
		justifyContent: 'center',
		alignItems: 'center',
		shadowOffset: { width: 1, height: 30 },
		shadowColor: 'black',
		shadowOpacity: 0.1,
		shadowRadius: 10,
		elevation: 10
	},
	circleNum: {
		position: 'absolute',
		width:20,
		height:20,
		borderRadius: 1000,
		transform: [
			{translateX: -25}, 
			{translateY: -20},
		],
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: '#4B78FA',

	},
	circleNumText: {
		color: 'white',
	},
	input : {
		borderWidth: 1,
		borderColor: '#ddd',
		padding: 10,
		fontSize: 18,
		borderRadius: 6,
		marginVertical: 10
	},
	errorText: {
		color: 'crimson',
		fontWeight: 'bold',
		marginBottom: 10,
		marginTop: 6,
		textAlign: 'center',
	  },
})