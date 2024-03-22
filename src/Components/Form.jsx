import React, { useState } from 'react';
import './Form.css'
 const Form =({onClose})=>{
    const [formData, setFormData] = useState({
       name:'',
       age:'',
       email:'',
       gender:'',
       course:'',
       mobileNo:''

    });
    const caluculatePrice=()=>{
        const selectedCourse = formData.course;
        if(selectedCourse ==='journalism'){
            return  399;
        } 
            return 0;
        };
    
    
    const handleChange =(e)=>{
        const{ name, value} = e.target;
        setFormData(prevstate =>({...prevstate,[name]:value

        }));
    };
    const [alert, setAlert] = useState('');
   
    const handleSubmit =(e)=>{
        e.preventDefault();
        const { name, age, mobileNo, gender, course } = formData;

        if (name.trim() === '' || age.trim() === '' || gender.trim() === '' || mobileNo.trim() === '' || course.trim() === '') {
            setAlert('Please fill in all fields');
        } else {
        alert("payment is successfull");
        setFormData({
      name:'',
       age:'',
       email:'',
       gender:'',
       course:'',
       mobileNo:''
        });
        onClose();}
    };
    const handleClose =()=>{
        setFormData({
            name: '',
            age: '',
            email:'',
            gender: '',
            course: '',
            mobileNo: ''
          });
          onClose(); // Close the form
        };
        const handleFormCloseNow = () => {
           onClose();
          };
          
 return(
    <div className='form-container'>
    <form  onSubmit={handleSubmit}>
        <h2>Enrollment Form</h2>
<div>
<input type="text" placeholder='Name' name="name" value={formData.name} onChange={handleChange}/>
</div>
<div>
<input type="email" placeholder='Email' name="email" value={formData.email} onChange={handleChange}/>
</div>
<div>    
<input type='text' placeholder='Mobile' name='mobileNo' value={formData.mobileNo} onChange={handleChange}/>
</div>
<div>
<input type="number" placeholder='Age' name="age" value={formData.age} onChange={handleChange}/>
</div>
<div className='gender'>
<label htmlFor='gender'>Gender </label>
<select name='gender' value={formData.gender} onChange={handleChange}>
<option value="">Select</option>
<option value="male">Male</option>
<option value="female">Female</option>
<option value="other">Other</option>
</select>
</div>
<div>
    <label htmlFor='course'>Course </label>
    <select name='course' value={formData.course} onChange={handleChange}>
    <option value="">Select</option>
    <option value="journalism">Journalism</option>
    
     </select>
</div>
<p>Pay ${caluculatePrice()}</p>

<button type='submit' onClick={handleFormCloseNow} className='pay'>Pay now</button>
<button type='button' className='x'onClick={handleClose}><span className='bi bi-x'></span></button>
</form>
{alert && <p>{alert}</p>}
</div>
 );
 }
 export default Form;