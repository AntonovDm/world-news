import Header from './components/Header/Header'
import Main from './pages/Main/Main'
import { DarkModeProvider } from './context/DarkModelContext'

function App() {
  return (
    <DarkModeProvider>
      <div className="app">
        <Header />
        <div className="container">
          <Main />
        </div>
      </div>
    </DarkModeProvider>
  )
}

export default App
