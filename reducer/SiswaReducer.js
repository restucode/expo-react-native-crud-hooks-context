export const SiswaReducer = (state, action) => {
	switch(action.type) {

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
		
		default:
		return state
	}
}