export const SiswaReducer = (state, action) => {
	switch(action.type) {
<<<<<<< HEAD

		case 'ADD_SISWA' :
			return {
				...state,
				dataSiswa : [ action.values, ...state.dataSiswa]
			}

		case 'UPDATE_SISWA' :
			return {
				...state,
				dataSiswa: state.dataSiswa.map(item => {
					if(action.values.key === item.key) {
						return {
							...item,
							key: action.values.key,
							nis: action.values.nis,
							nama: action.values.nama,
							kelas: action.values.kelas,
						}
					}
					return item
				})
			}
			
		case 'DELETE_SISWA' :
			return {
				...state,
				dataSiswa : state.dataSiswa.filter(siswa => siswa.key !== action.key)
			}
		
=======
>>>>>>> 020f9522ee44714fdc9fd02eaa30c2bc5d81ec8c
		default:
		return state
	}
}