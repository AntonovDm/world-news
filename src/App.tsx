import Header from './components/Header/Header'
import Main from './pages/Main/Main'
import { DarkModelProvider } from './context/DarkModelContext'

function App() {
  return (
    <DarkModelProvider>
      <div className="app">
        <Header />
        <div className="container">
          <Main />
        </div>
      </div>
    </DarkModelProvider>
  )
}

export default App
