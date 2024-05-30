import './App.css';

import {  Route,BrowserRouter, Routes } from 'react-router-dom';

import Home from './pages/Home';
import Loginpage from './pages/Loginpage';
import Enrolls from './components/Enrolls/Enrolls';
import Classes from './components/Classes/Classes';
import Subject from './components/Subject/Subject';
import Questions from './components/Questions/Questions';
import Aboutus from './components/Aboutus/Aboutus';
import Scholarship_page from './pages/Scholarship_page';

function App() {
  return (
    <BrowserRouter>
    <Routes>

    <Route path='/login' element={<Loginpage/>} /> 
    <Route path='/' element={<Home/>} />
    <Route path='/enroll' element={  <Enrolls/>}/>
    <Route path='/classes' element={  <Classes/>}/>
    <Route path='/sub' element={  <Subject/>}/>
    <Route path='/que' element={  <Questions/>}/>
    <Route path='/aboutus' element={ <Aboutus/> }/>
    <Route path='/scholarship' element={ <Scholarship_page/> }/>

    
   </Routes>
          
        

   </BrowserRouter>

  );
}

export default App;
