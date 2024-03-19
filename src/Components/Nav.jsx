import './Nav.css';
import untitledImage from '../assets/Untitled.png';
import Signup from "./Signup";
import { useState } from 'react';
function Nav(){
  const [showSignupForm, setShowSignupForm] = useState(false); 
  const[showMenu,setShowMenu] =useState(false);
    const toggleSignupForm = () => {
        setShowSignupForm(!showSignupForm);
    };
    const handleClose=()=>{
      setShowSignupForm(false);
    };
   
    const toggleMenu =()=>{
      setShowMenu(!showMenu);
    };
   return(
       <div className='nav'>
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
     <div className='hamburger-nav'>
       <img src={untitledImage} className='logo' alt='logo'/>
        <div>
        <button  onClick={toggleMenu} className='menu'><span className=' bi bi-list'></span></button>
        <ul className={showMenu ? 'menu-nav show' : 'menu-nav'}>
          <li>
            <a href='#about'> About</a>
          </li>
          <li>
            <a href='#course'>Course</a>
          </li>
          <li>
            <a href='#contact'>Contact</a>
          </li>
        </ul>
       </div>
      </div>
     </div>
      
   );
}
export default Nav;
