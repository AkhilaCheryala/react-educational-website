import React, { useState} from "react";
import "./Home.css";
import Nav from '../Components/Nav';
import Footer from "../Components/Footer";
import { useNavigate } from "react-router-dom";
import Enroll from "../Components/Enroll";

const Home=()=>{
    const navigate = useNavigate ()
 function GoTOArunsourney(){
  window.scrollTo(0,0);
   navigate("./Arunsjourney")
 };
 

 const[showSignup,setShowSignup]=useState(false);
 const toggleSignup =()=>{
  setShowSignup(!showSignup);
 } ;
 

return(
    <div className={showSignup ? 'dark-overlay':''}>
    <div className="Welcome-class">
    <img src='/banner2.jpg' className='board' alt='board'/>
    <div className='shadow'></div>
    <Nav/>
  
 <div className='intro-line'>
     <h1>Get the Best Journalism Course!!</h1>
     <p> I'm Mr. Arun, your guide to the captivating world of journalism. 
     Join me on a transformative journey where storytelling meets integrity, 
     and together, let's uncover the power of the press. With my wealth of experience and your 
     passion for truth, we'll embark on an adventure that transcends headlines, shaping narratives
      that resonate for generations to come.</p>
     </div>
    </div>
   
    <div id='course'>
     <h2> Join Our Journalism Course Today!</h2>
     <p>Are you ready to embark on a transformative journey into the world of 
       journalism? Join us now and unlock the secrets to impactful storytelling and ethical reporting. Enroll today and take the first step towards shaping narratives that resonate for generations to come.</p>
    </div>
    <div className='input-box'>
       <input type='email' id="email" placeholder='Enter your email'/>
       <button  type='submit' className='login'>Login</button>
     
      </div>
    <div className='brocher'>
     <div className='brocher-text'>
       <h4>Journalism Crash Course</h4>
       <div className='brocher-grid'>
         <div className='Features'>
           <ul>
             <li><h5>Includes</h5></li>
             <li>Interactive Lectures</li>
             <li>Practical Workshops</li>
             <li>Industry Insights</li>
             <li>Portfolio Creation</li>
             <li>Ethics and Integrity</li>
             <li>Certification</li>
             <li>Career Guidance</li>
           </ul>
         </div>
         <div className='duration'>
           <h6>Duration</h6>
           <p>2 Weeks</p>
           <h6> Course Fee</h6>
            <p> $399</p>
            <Enroll/>
         </div>
        
         <div>
       
           <img src='/course.jpg' className='course-pic' alt='course-img'/>
           
         </div>

       </div>
     </div>
    </div>
    <h2 id='about'>Meet MR.Arun</h2>
    <div className='About'>
     <div className='about-arun'>
     
       
       <h4>Retired Journalist,14 years of Experience</h4>
        <p>After decades of chasing stories, I've amassed a wealth of
        experience in the ever-evolving world of journalism. Witnessing 
        the enthusiasm of new aspirants and recognizing the gaps in traditional
         training methods inspired me to launch this course. I'm passionate about 
          insights and guiding the next generation of journalists toward ethical and impactful 
          storytelling. In my journey, I've navigated through the highs and lows of the industry, learning invaluable lessons along the way. Now, it's my mission to empower budding journalists with practical skills and ethical principles, ensuring they're well-equipped to make their mark in the field. Join me on this transformative journey, where we'll explore the depths of journalism's 
         potential</p>      
         
        
     <button onClick={GoTOArunsourney} className="read-more">Read More..</button>
     

       </div>
       <div>
         <img src='/mrarun.jpg' className='arun-pic'  alt=''/>
       </div>
    </div>
    <h2 className='reviews'>Course Reviews</h2>
    <div className="feedbacks  d-flex justify-content-center ">
     <div className='row'>
       <div className='col-1'>
       <div className='card  p-2 '>
       <span className='bi bi-person-circle'></span>
         <span>Ankita</span>
         <div className='card-body'>Lorem ipsum dolor sit amet
          consectetur adipisicing elit. Ab, ducimus.</div>
        <div className='card-text'><span className='bi bi-star-fill'></span> 4.5</div>
       </div>
       </div>
       <div className='col-1'>
       <div className='card  p-2  '>
       <span className='bi bi-person-circle'></span>
         <div className='card-text'>Anjali</div>
         <div className='card-body'>Lorem ipsum dolor sit amet
          consectetur adipisicing elit. Ab, ducimus.</div>
        <div className='card-text'><span className='bi bi-star-fill'></span> 4.9</div>
       </div>
       </div>
       <div className='col-1'>
       <div className='card p-2 '>
       <span className='bi bi-person-circle'></span>
         <div className='card-text'>Akhila</div>
         <div className='card-body'>Lorem ipsum dolor sit amet
          consectetur adipisicing elit. Ab, ducimus.</div>
        <div className='card-text'><span className='bi bi-star-fill'></span> 4.7</div>
       </div>
       </div> 
       </div>
      </div>
      <h5 className='quote'>"In the ink of truth, journalism writes history's authentic tale."</h5>
      
    <Footer/>
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

   
{showSignup && <div className="signup-overlay"><Signup onClose={toggleSignup}/></div>}
 </div> 
);
}
export default Home;