import './App.css'
import HomeScreen from './Pages/HomeScreen'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import LoginScreen from './Pages/LoginScreen';

function App() {
  const user = null;

  return (
    <div className='App'>
      {
        !user ? <LoginScreen/> :
        <Router>
          <Routes>
                <Route path='/' element={<HomeScreen/>}/>
          </Routes>
        </Router>
      }
      
    </div>
  )
}

export default App
