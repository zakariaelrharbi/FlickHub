import './App.css'
import HomeScreen from './Pages/HomeScreen'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

function App() {

  return (
    <div className='App'>
      <Router>
        <Routes>
              <Route path='/' element={<HomeScreen/>}/>
        </Routes>
      </Router>
    </div>
  )
}

export default App
