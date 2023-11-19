import { ReactNode, createContext, useContext, useEffect } from 'react'
import { useLocalStorageState } from '../helpers/hooks/useLocalStorageState'

interface ICurrentUserContextType {
  isDarkMode: boolean
  toggleDarkMode: () => void
}

interface IProps {
  children: ReactNode
}

const DarkModeContext = createContext<ICurrentUserContextType | undefined>(
  undefined
)

const DarkModelProvider = ({ children }: IProps) => {
  const [isDarkMode, setIsDarkMode] = useLocalStorageState<boolean>({
    initialState: window.matchMedia(' (prefers-color-scheme: dark  ) ').matches,
    key: 'isDarkMode',
  })

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add('dark-mode')
      document.documentElement.classList.remove('light-mode')
    } else {
      document.documentElement.classList.add('light-mode')
      document.documentElement.classList.remove('dark-mode')
    }
  }, [isDarkMode])

  function toggleDarkMode() {
    setIsDarkMode((prev) => !prev)
  }

  return (
    <DarkModeContext.Provider value={{ isDarkMode, toggleDarkMode }}>
      {children}
    </DarkModeContext.Provider>
  )
}

function useDarkMode() {
  const context = useContext(DarkModeContext)

  if (context === undefined)
    throw new Error('DarkModeContext was used outside of DarkModeProvider')
  return context
}

export { DarkModelProvider, useDarkMode }
