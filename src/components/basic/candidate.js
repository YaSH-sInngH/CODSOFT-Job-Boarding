// src/components/basic/candidate.js
import React from 'react';
import { Link } from 'react-router-dom';
import './candidate.css';
import Navbar from './navbar';
import RegistrationPage from './registration'; // Import RegistrationPage

const CandidatePage = () => {
  // Define handleRegistrationSubmit
  const handleRegistrationSubmit = (formData) => {
    // Your logic to handle form submission
    console.log('Form data submitted:', formData);
  };

  // Assuming you have some state or logic to check if candidates are registered
  const isCandidatesRegistered = false; // Replace with your logic

  return (
    <>
      <Navbar />
      <div className='candidateWhole'>
        {isCandidatesRegistered ? (
          <div className='candiRegistered'>
            {/* Display candidate details here (Name, Education, etc.) */}
            <h2>Candidate Details</h2>
            {/* Add your candidate details components here */}

            {/* Example Links to navigate to different sections */}
            <Link to="/candidate/profile">Profile</Link>
            <Link to="/candidate/education">Education</Link>
            {/* Add more links for other sections as needed */}
          </div>
        ) : (
          <div className='candiNot'>
            <p>No candidate registered</p>
            <div className='logged'>
              {/* Login Button */}
              <Link to="/login">Login</Link>

              {/* New Candidate Registration Button */}
              {/* Pass the handleRegistrationSubmit function as onSubmit prop */}
              <RegistrationPage onSubmit={handleRegistrationSubmit} />
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default CandidatePage;
