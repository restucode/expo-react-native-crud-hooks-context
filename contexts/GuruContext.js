import React, { createContext, useContext, useReducer } from 'react'

import { GuruReducer } from '../reducer/GuruReducer'
import { globalState } from './globalState'

const GuruContext = createContext(globalState)

export const useGuruContext = () => {
	return useContext(GuruContext)
}


const GuruContextProvider = ({ children }) => {
	const [state, dispatch] = useReducer(GuruReducer, globalState)
<<<<<<< HEAD
	const dataGuruSort = state.dataGuru.sort((a,b) => a.nama > b.nama)
	return (
	  <GuruContext.Provider value={{
	  	dataGuru: dataGuruSort,
=======
	return (
	  <GuruContext.Provider value={{
	  	dataGuru: state.dataGuru,
>>>>>>> 020f9522ee44714fdc9fd02eaa30c2bc5d81ec8c
	  	dispatch
	  }}>
	  	{children}
	  </GuruContext.Provider>
	)
}

export default GuruContextProvider