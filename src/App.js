import './App.css';

import {  Route,BrowserRouter, Routes } from 'react-router-dom';

import Home from './pages/Home';
import Loginpage from './pages/Loginpage';

import Scholarship_page from './pages/Scholarship_page';

import Iqtestpage from './pages/Iqtestpage';
import Exampage from './pages/Exampage';
import Infopedia from './components/Infopedia/Infopedia';

function App() {
  return (
    <BrowserRouter>
    <Routes>

    <Route path='/login' element={<Loginpage/>} /> 
    <Route path='/' element={<Home/>} />
    <Route path='/iqtest' element={ <Iqtestpage/> }/>
    <Route path='/scholarship' element={ <Scholarship_page/> }/>
    <Route path='/exams' element={ <Exampage/> }/>
    <Route path='/infopedia' element={<Infopedia/>}/>
    
   </Routes>
          
        

   </BrowserRouter>

  );
}

export default App;
