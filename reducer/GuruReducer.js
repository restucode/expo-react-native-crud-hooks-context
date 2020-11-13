export const GuruReducer = (state, action) => {
	switch(action.type) {
		case 'ADD_GURU' :
			return {
				...state,
				dataGuru: [action.values, ...state.dataGuru ]
			}
		case 'UPDATE_GURU' :
			return {
				...state,
				dataGuru: state.dataGuru.map(item => {
					if(action.values.key === item.key) {
					 return {
						 ...item,
						 key: action.values.key,
						 nip: action.values.nip,
						 nama: action.values.nama
					 }
					}
				return item
				})
			}
		case 'DELETE_GURU' :
			return {
				...state,
				dataGuru: state.dataGuru.filter(guru => action.key !== guru.key)
			}
		default :
		 return state
	}
}