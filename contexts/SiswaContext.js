import React, { createContext, useReducer, useContext } from 'react'

import { SiswaReducer } from '../reducer/SiswaReducer'
import { globalState } from './globalState'

const SiswaContext = createContext(globalState)

export const useSiswaContext = () => {
  return useContext(SiswaContext)
}

const SiswaContextProvider = ({ children }) => {
	const [state, dispatch] = useReducer(SiswaReducer, globalState);
	return (
		<SiswaContext.Provider value={{
			dispatch,
			dataSiswa: state.dataSiswa
		}}>
			{ children }
		</SiswaContext.Provider>
	)
}

export default SiswaContextProvider