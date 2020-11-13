import React, { createContext, useReducer, useContext, useEffect, useState } from 'react'

import { SiswaReducer } from '../reducer/SiswaReducer'
import { globalState } from './globalState'

const SiswaContext = createContext(globalState)

export const useSiswaContext = () => {
  return useContext(SiswaContext)
}

const SiswaContextProvider = ({ children }) => {
	const [state, dispatch] = useReducer(SiswaReducer, globalState)

	const dataSiswaSort = state.dataSiswa.sort((a,b) => a.nama > b.nama)


	return (
		<SiswaContext.Provider value={{
			dispatch,
			dataSiswa: dataSiswaSort
		}}>
			{ children }
		</SiswaContext.Provider>
	)
}

export default SiswaContextProvider