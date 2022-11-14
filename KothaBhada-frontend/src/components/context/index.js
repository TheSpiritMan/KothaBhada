import { createContext, useContext } from 'react'

const AppContext = createContext()

export const AppProvider = ({ children }) => {
  const access_token =
    typeof window !== 'undefined' && window.localStorage.getItem('access_token')

  const isAuthenticated = access_token ? true : false

  return (
    <AppContext.Provider value={{ isAuthenticated, access_token }}>
      {children}
    </AppContext.Provider>
  )
}

export function useAppContext() {
  return useContext(AppContext)
}
