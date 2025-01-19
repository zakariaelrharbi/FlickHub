import './App.css'
import HomeScreen from './Pages/HomeScreen'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import LoginScreen from './Pages/LoginScreen';
import { useEffect } from 'react';
import { auth } from './firebase';
import { useDispatch, useSelector } from 'react-redux';
import { login, logout, selectUser } from './store/userSlice';
import ProfileScreen from './Pages/ProfileScreen';

function App() {
  const user = useSelector(selectUser);
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
        dispatch(logout());
      }
    })
    return unsubscribe;
  },[dispatch]);
  return (
    <div className='App'>
      {
        !user ? <LoginScreen/> :
        <Router>
          <Routes>
                <Route path='/' element={<HomeScreen/>}/>
                <Route path='/profile' element={<ProfileScreen/>}/>
          </Routes>
        </Router>
      }
      
    </div>
  )
}

export default App
