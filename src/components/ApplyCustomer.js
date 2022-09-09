import React from "react";
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";
import { useState } from 'react'
import  "./ApplyCustomer.css";
import 'bootstrap/dist/css/bootstrap.min.css';

export default function ApplyCustomer() {
    const [ firstName, setFirstName ] = useState('')
    const [ lastName, setLastName] = useState('')
    const [ gender, setGender] = useState('')
    const [ email, setEmail] = useState('')
    const [ phone, setPhone ] = useState('')
    const [ address, setAddress] = useState('')
    const [ town, setTown ] = useState('')
    const [ jobType, setJobType ] = useState('')
    const [ jobDescription, setJobDescription ] = useState('')
    const [appointmentDate, setAppointmentDate] = useState(new Date());

    
    function handleSubmit(e){
      e.preventDefault()
      fetch("https://backend-host.herokuapp.com/customers", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          first_name: firstName,
          last_name: lastName,
          gender: gender,
          email: email,
          phone: phone,
          address: address,
          town: town,
          job_type: jobType,
          job_description: jobDescription,
          appointment_date: appointmentDate
        })
      })
      .then(res=> res.json())
      .then(data => {
        console.log(data)
        
        setFirstName('')
        setLastName('')
        setGender('')
        setEmail('')
        setPhone('')
        setAddress('')
        setTown('')
        setJobType('')
        setJobDescription('')
        setAppointmentDate('')
      })
      .catch(err => err.message)

      document.querySelector('form').reset() }
    return (
    <div className="container">
      <div className="contact-box">
        <div className="left"></div>
        <div className="right">
          <h2>SOLAR APPLICATION FORM💡</h2>
          <form onSubmit={handleSubmit}>
      
            <input
              type='text'
              required
              className ="field"
              placeholder='First Name'
              value={ firstName }
              onChange={(e) => setFirstName(e.target.value)}
            ></input>
            <input
              type='text'
              required
              className ="field"
              placeholder='Last Name'
              value={ lastName}
              onChange={(e) => setLastName(e.target.value)}
            ></input>
            <br />
            
            <input
              type='text'
              required
              className ="field"
              placeholder='Gender'
              value={ gender}
              onChange={(e) => setGender(e.target.value)}
            ></input>
            <br />
            <input
              type='text'
              required
              className='field'
              placeholder='Email'
              value={ email }
              onChange={(e) => setEmail(e.target.value)}
            ></input>
            <input
               type='text'
               required
               className='field'
               placeholder='Phone Number'
               value={ phone }
               onChange={(e) => setPhone(e.target.value)}
           ></input>
            <input
               type='text'
               value={ address }
               placeholder="Address"
               className='field'
               onChange={(e) => setAddress(e.target.value)}
            ></input>
           
           <input
               type='text'
               required
               className='field'
               placeholder='Town'
               value={ town }
               onChange={(e) => setTown(e.target.value)}
           ></input>
           
           <input
              type='text'
              required
              className ="field"
              placeholder='Job Type'
              value={ jobType}
              onChange={(e) => setJobType(e.target.value)}
            ></input>
            <br />
           
          <textarea placeholder="Job Description" className="field" value={ jobDescription }
               onChange={(e) => setJobDescription(e.target.value)}></textarea>
          <br />
          <label className='name'>Select Technician:</label>
            <select>
              <option value='Schafer' > Schafer</option>
              <option value='Arlie'>Arlie</option>
              <option value='Devin'>Devin</option>
              <option value='Youlanda'>Youlanda</option>
              <option value='Diedre'>Diedre</option>
              <option value='Alvaro'>Alvaro</option>
              <option value='Edgar'>Edgar</option>
              <option value='Wanda '>Wanda </option>
              <option value='King'>King</option>
              <option value='Lavern'>Lavern</option>
           </select>
            <br />
          <div class="flex items-center justify-center">
          <label className='name1'>Appointment Date:</label>
          <br />
          <DatePicker
            selected={appointmentDate}
            onChange={(date) => setAppointmentDate(date)}
            isClearable
            placeholderText="Appointment Date"
          />
          </div>
          <button className="btn2">Apply</button>
          </form>
        </div>
      </div>
	  </div>
    
    );
}