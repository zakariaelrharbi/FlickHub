import './App.css'
import HomeScreen from './Pages/HomeScreen'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import LoginScreen from './Pages/LoginScreen';
import { useEffect } from 'react';
import { auth } from './firebase';
import { useDispatch } from 'react-redux';
import { login, logout } from './store/userSlice';

function App() {
  const user = null;
  const dispatch = useDispatch();

  useEffect(()=>{
    const unsubscribe = auth.onAuthStateChanged((userAuth)=>{
      if(userAuth){
        // login
        dispatch(login({
          uid: userAuth.uid,
          email: userAuth.email
        }))  
      }else{
        // logout
        dispatch(logout);
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
