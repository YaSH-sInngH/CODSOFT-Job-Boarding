// RegistrationPage.js
import React, { useState } from 'react';

const RegistrationPage = ({ onSubmit }) => {
  const [formData, setFormData] = useState({
    name: '',
    education: '',
    resume: '',
    experiences: '',
    projects: '',
  });

  // Define handleInputChange function
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({ ...prevFormData, [name]: value }));
  };

  // Handle form submission
  const handleFormSubmit = (e) => {
    e.preventDefault();
    // Perform registration logic here, e.g., send data to the server

    // For simplicity, just pass the form data to the callback
    onSubmit(formData);
  };

  return (
    <div>
      <h2>New Candidate Registration</h2>
      <form onSubmit={handleFormSubmit}>
        {/* ... your existing form inputs */}
        <label>
          Name:
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
          />
        </label>

        {/* Education Input */}
        <label>
          Education:
          <input
            type="text"
            name="education"
            value={formData.education}
            onChange={handleInputChange}
          />
        </label>

        {/* Resume Input */}
        <label>
          Resume:
          <input
            type="file"
            accept=".pdf, .doc, .docx"
            name="resume"
            onChange={handleInputChange}
          />
        </label>

        {/* Experiences Input */}
        <label>
          Experiences:
          <textarea
            name="experiences"
            value={formData.experiences}
            onChange={handleInputChange}
          />
        </label>

        {/* Projects Input */}
        <label>
          Projects:
          <input
            type="text"
            name="projects"
            value={formData.projects}
            onChange={handleInputChange}
          />
        </label>
        <button type="submit">Register</button>
      </form>
    </div>
  );
};

export default RegistrationPage;
