import './App.css';

import {  Route,BrowserRouter, Routes } from 'react-router-dom';

import Login from './components/Home/Login';
import Navigation from './components/Navigation/Navigation';

function App() {
  return (
    <BrowserRouter>
    <Routes>

    {/* <Route path='login' element={<> <Login/></>} /> */}
    <Route path='navigation' element={<> <Navigation/></>} />

   </Routes>
   </BrowserRouter>
  
  );
}

export default App;
