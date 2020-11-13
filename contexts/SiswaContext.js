<<<<<<< HEAD
import React, { createContext, useReducer, useContext, useEffect, useState } from 'react'
=======
import React, { createContext, useReducer, useContext } from 'react'
>>>>>>> 020f9522ee44714fdc9fd02eaa30c2bc5d81ec8c

import { SiswaReducer } from '../reducer/SiswaReducer'
import { globalState } from './globalState'

const SiswaContext = createContext(globalState)

export const useSiswaContext = () => {
  return useContext(SiswaContext)
}

const SiswaContextProvider = ({ children }) => {
<<<<<<< HEAD
	const [state, dispatch] = useReducer(SiswaReducer, globalState)

	const dataSiswaSort = state.dataSiswa.sort((a,b) => a.nama > b.nama)


	return (
		<SiswaContext.Provider value={{
			dispatch,
			dataSiswa: dataSiswaSort
=======
	const [state, dispatch] = useReducer(SiswaReducer, globalState);
	return (
		<SiswaContext.Provider value={{
			dispatch,
			dataSiswa: state.dataSiswa
>>>>>>> 020f9522ee44714fdc9fd02eaa30c2bc5d81ec8c
		}}>
			{ children }
		</SiswaContext.Provider>
	)
}

export default SiswaContextProvider