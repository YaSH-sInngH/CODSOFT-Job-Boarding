// RegistrationPage.js
import React, { useState } from 'react';
import Navbar from './navbar';
import './employer.css';

const Employee = () => {
  // State to hold candidate registration form data
  const [formData] = useState({
    Company: '',
    Employees: '',
    Objective: '',
    Description: '',
    HR: '',
    Legal:'',
  });


  return (
    <>
     <Navbar/>
        <div className='emp-con'>
        <h2>Employer Registration</h2> 
        <form>
            {/* Name Input */}
            <label>
            Company:
            <input
                type="text"
                name="Company"
                value={formData.Company}
            />
            </label>

            {/* Education Input */}
            <label>
            Employees:
            <input
                type="text"
                name="Employees"
                value={formData.Employees}
            />
            </label>

            {/* Resume Input */}
            <label>
            Objective
            <input
                type="text"
                name="Objective"
                value={formData.Objective}
            />
            </label>

            {/* Experiences Input */}
            <label>
            Description
            <input
                type="text"
                name="Description"
                value={formData.Description}
            />
            </label>

            {/* Projects Input */}
            <label>
            HR
            <input
                type="text"
                name="HR"
                value={formData.HR}
            />
            </label>

            <label>
            Legal Letter
            <input
                type="text"
                name="legal"
                value={formData.Legal}
            />
            </label>

            {/* Submit Button */}
            <button type="submit">Register</button>
        </form>
        </div>
    </>
  );
};

export default Employee;