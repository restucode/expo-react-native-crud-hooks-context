import React, { createContext, useContext, useReducer } from 'react'

import { GuruReducer } from '../reducer/GuruReducer'
import { globalState } from './globalState'

const GuruContext = createContext(globalState)

export const useGuruContext = () => {
	return useContext(GuruContext)
}


const GuruContextProvider = ({ children }) => {
	const [state, dispatch] = useReducer(GuruReducer, globalState)
	const dataGuruSort = state.dataGuru.sort((a,b) => a.nama > b.nama)
	return (
	  <GuruContext.Provider value={{
	  	dataGuru: dataGuruSort,
	  	dispatch
	  }}>
	  	{children}
	  </GuruContext.Provider>
	)
}

export default GuruContextProvider