import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import React from 'react';
import Home from './pages/Home';
import Arunsjourney from './pages/Arunsjourney';
import Form from './Components/Form';
import Signup from './Components/Signup';
import Enroll from './Components/Enroll';
import './App.css';

const App=()=> {
  
  return (
<Router>
  <Routes>
  <Route exact path= '/' element={<Home/>}/>
  <Route exact path= '/Arunsjourney' element={<Arunsjourney/>}/>
  <Route exact path= '/Form' element={<Form/>}/>
  <Route exact path='/Signup' element={<Signup/>}/>
  <Route exact path='/Enroll' element={<Enroll/>}/>
  </Routes>
  </Router>
  );
}

export default App;
