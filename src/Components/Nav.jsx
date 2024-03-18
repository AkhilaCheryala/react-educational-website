import './Nav.css';
import untitledImage from '../assets/Untitled.png';
import Signup from "./Signup";
import { useState } from 'react';
function Nav(){
  const [showSignupForm, setShowSignupForm] = useState(false); 
    const toggleSignupForm = () => {
        setShowSignupForm(!showSignupForm);
    };
    const handleClose=()=>{
      setShowSignupForm(false);
    }

   return(
       <div>
        <nav>
          
         <ul>
          <li>
          <img src={untitledImage}  className='logo' alt='logo'/>
          </li>
         <li>
           <a href="#about">About</a>
         </li>
         <li>
           <a href="#course">Course</a>
         </li>
         <li>
           <a href="#contact">Contact</a>
         </li>
         <li>
        <button onClick={toggleSignupForm} className='SignUp'>SignUp</button>
        {showSignupForm && <Signup onClose={handleClose}/>} 
       </li>
       </ul>    
     </nav>
     </div>
      
   );
}
export default Nav;
