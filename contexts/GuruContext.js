import React, { createContext, useContext, useReducer } from 'react'

import { GuruReducer } from '../reducer/GuruReducer'
import { globalState } from './globalState'

const GuruContext = createContext(globalState)

export const useGuruContext = () => {
	return useContext(GuruContext)
}


const GuruContextProvider = ({ children }) => {
	const [state, dispatch] = useReducer(GuruReducer, globalState)
	return (
	  <GuruContext.Provider value={{
	  	dataGuru: state.dataGuru,
	  	dispatch
	  }}>
	  	{children}
	  </GuruContext.Provider>
	)
}

export default GuruContextProvider