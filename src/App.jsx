import './App.css'
import HomeScreen from './Pages/HomeScreen'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import LoginScreen from './Pages/LoginScreen';
import { useEffect } from 'react';
import { auth } from './firebase';

function App() {
  const user = null;

  useEffect(()=>{
    const unsubscribe = auth.onAuthStateChanged((userAuth)=>{
      if(userAuth){
        console.log(userAuth)
      }else{

      }
    })
    return unsubscribe;
  },[]);
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
