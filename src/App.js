import './App.css';

import {  Route,BrowserRouter, Routes } from 'react-router-dom';

import Home from './pages/Home';
import Loginpage from './pages/Loginpage';
import Enrolls from './components/Enrolls/Enrolls';
import Classes from './components/Classes/Classes';
import Subject from './components/Subject/Subject';
import Questions from './components/Questions/Questions';
import Patterns from './components/Questions/Patterns';

import AdminHome from './pages/Admin/AdminHome';
import AdminLayout from './pages/Admin/AdminLayout';

function App() {
  return (
    <BrowserRouter>
    <Routes>

    <Route path='/login' element={<Loginpage/>} /> 
    <Route path='/' element={<Home/>} />
    <Route path='/enroll' element={  <Enrolls/>}/>
    <Route path='/classes' element={  <Classes/>}/>

    <Route path="/admin" element={<AdminLayout />}>
          <Route index element={<AdminHome />} />
          <Route path="/admin/enrolls" element={<Enrolls/>} />
          <Route path='/admin/classes' element={<Classes/>}/>
          <Route path='/admin/subjects' element={  <Subject/>}/>
          <Route path='/admin/questions' element={  <Questions/>}/>
          <Route path='/admin/patterns' element={  <Patterns/>}/> 
    </Route>
    
    {/* <Route path='/admin' element={<AdminHome />} />
    <Route path="/admin/enrolls" element={<Enrolls/>} />
    <Route path='/admin/classes' element={<Classes/>}/>
    <Route path='/admin/subjects' element={  <Subject/>}/>
    <Route path='/admin/questions' element={  <Questions/>}/>
    <Route path='/admin/patterns' element={  <Patterns/>}/> */}
   </Routes>
          
        

   </BrowserRouter>

  );
}

export default App;
