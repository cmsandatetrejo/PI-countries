import { useState, useEffect } from 'react'
import './App.css'
import InitPage from './components/InitPage/InitPage'
import Home from './components/Home/Home'
import NavBar from './components/NavBar/NavBar'
import { Routes, Route, useLocation, useNavigate } from 'react-router-dom'


function App() {
  const [access,setAccess]=useState(false);
  const location=useLocation();
 const navigate=useNavigate();

  const login=(bool)=>{
    setAccess(bool);
    console.log(bool);    
  }

  useEffect(() => {
    if(!access) navigate("/");
    if(access) navigate("/home");    
    
 }, [access]);

  return (
    <>
      {
        location.pathname!=='/'
        ? <NavBar/>
        : null
      }

      <Routes>
        <Route path='/' element={<InitPage login={login}/>}/>
        <Route path='/home' element={<Home/>}/>
      </Routes>
    </>
  );
}

export default App
