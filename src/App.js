import './App.css';

import {  Route,BrowserRouter, Routes } from 'react-router-dom';

import Home from './pages/Home';
import Loginpage from './pages/Loginpage';

function App() {
  return (
    <BrowserRouter>
    <Routes>

    <Route path='/login' element={<Loginpage/>} /> 
    <Route path='/' element={<Home/>} />

   </Routes>
   </BrowserRouter>
  
  );
}

export default App;
