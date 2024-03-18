import React, { useState } from "react";
import './Enroll.css';
import Form from './Form';
const Enroll=()=>{
    const [showForm, setShowForm] =useState(false);
 const toggleForm = () => {
   setShowForm(!showForm);
 };
 const handleFormClose = () => {
    setShowForm(false); 
  };
    return(
        <div className="enroll">
           
         <button onClick={toggleForm}  className='enroll-btn'>Enroll Now<span className='bi bi-arrow-right'></span></button>
          {showForm && <Form onClose={handleFormClose}/>}
       
       </div>
    );
}
export default Enroll;