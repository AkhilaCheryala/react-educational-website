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
  {/* Bootstrap CSS */}
  <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css" integrity="sha384-JcKb8q3iqJ61gNV9KGb8thSsNjpSL0n8PARn9HuZOnIxN0hoP+VmmDGMN5t9UJ0Z" crossOrigin="anonymous" />
     
     {/* Bootstrap Icons */}
     <link href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.8.1/font/bootstrap-icons.css" rel="stylesheet" />
     
     {/* jQuery (necessary for Bootstrap's JavaScript plugins) */}
     <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
     
     {/* Popper.js */}
     <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.16.0/umd/popper.min.js"></script>
     
     {/* Bootstrap JS */}
     <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/js/bootstrap.min.js" integrity="sha384-KyZXEAg3QhqLMpG8r+Knujsl5+gbg2Jj13KBOePhv7ta9tk+1O6wlsVdeux0lf1r" crossOrigin="anonymous"></script>

  </Router>
  );
}

export default App;
