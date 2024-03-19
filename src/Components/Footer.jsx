import React from 'react';
import './Footer.css';
 const Footer =()=>{
    return(
<div>
    <div className='footer'>
       <div className='row footer-footer'>
         <div className='col-2 p-2'>
         <div id='contact'>
        <ul>
        <li><h4> Contact me</h4></li>
         <li>
           arunmartin123@gmail.com
         </li>
         <li>
           9876543233
         </li>
         <li>
           Office,109/34/87-2,
           California
         </li>
        </ul>
        </div>
        </div>
         <div className='col-2 p-2 w-100 '>
        <div className='footer-col2'>
        
        <ul>
         <li><h4> Journalism</h4></li>
           <li>Interactive Lectures</li>
             <li>Practical Workshops</li>
             <li>Industry Insights</li>
             <li>Portfolio Creation</li>
             <li>Ethics and Integrity</li>
             <li>Certification</li>
             <li>Career Guidance</li>
        </ul>
        </div>
        </div>
         <div className='col-2 p-2 w-100 '>
        <div className='footer-col3'>
        
         <ul>
           <li><h4>Support </h4></li>
           <li>Account</li>
           <li>Courses</li>
           <li>Payments</li>
           <li>Helpline</li>
           <li>support</li>
         </ul>
         </div>
         </div>
    </div>
    </div>
    <div className='final-footer p-2'>
     <div className='copyright'>
       Copyright @2024 All Rights Reseved | World of Journalism
     </div>
     <div className='terms-conditions'>
       <span>Terms |</span>
       <span> Conditions |</span>
       <span> Register</span>
     </div>
    </div>
    </div>
    );
 }
 export default Footer;