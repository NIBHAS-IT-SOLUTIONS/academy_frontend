import './App.css';

import {  Route,BrowserRouter, Routes } from 'react-router-dom';

import Home from './pages/Home';
import Loginpage from './pages/Loginpage';
import Enrolls from './components/Enrolls/Enrolls';
import Classes from './components/Classes/Classes';
import Subject from './components/Subject/Subject';

function App() {
  return (
    <BrowserRouter>
    <Routes>

    <Route path='/login' element={<Loginpage/>} /> 
    <Route path='/' element={<Home/>} />
    <Route path='/enroll' element={  <Enrolls/>}/>
    <Route path='/classes' element={  <Classes/>}/>
    <Route path='/sub' element={  <Subject/>}/>
    
   </Routes>
   </BrowserRouter>

  );
}

export default App;
