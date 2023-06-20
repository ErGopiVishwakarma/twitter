import React, { createContext, useState } from 'react'

export const ContextProvider = createContext()

const ContextApi = ({children}) => {

    const [homeUpdate,setHomeUpdate] = useState(false)
    
  return (
    <ContextProvider.Provider value={{homeUpdate,setHomeUpdate}}>{children}</ContextProvider.Provider>
  )
}

export default ContextApi