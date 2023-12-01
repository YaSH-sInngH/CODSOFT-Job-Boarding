import React, { useState } from 'react';
import './jobListing.css';
import Navbar from './navbar';
const JobListing = () => {
  const [formData, setFormData] = useState({
    companyName: '',
    jobRole: '',
    salary: '',
    jobDetails: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Implement your logic to submit the form data (e.g., send to a server)

    // For demonstration purposes, log the form data to the console
    console.log('Form Data Submitted:', formData);
  };

  return (
    <div>
        <Navbar/>
        <div className='jobListing'>
        <h1>Add a Job</h1>
        <form onSubmit={handleSubmit}>
            <label>
            Company Name:
            <input
                type="text"
                name="companyName"
                value={formData.companyName}
                onChange={handleChange}
                required
            />
            </label>

            <label>
            Job Role:
            <input
                type="text"
                name="jobRole"
                value={formData.jobRole}
                onChange={handleChange}
                required
            />
            </label>

            <label>
            Salary:
            <input
                type="text"
                name="salary"
                value={formData.salary}
                onChange={handleChange}
                required
            />
            </label>

            <label>
            Job Details:
            <textarea
                name="jobDetails"
                value={formData.jobDetails}
                onChange={handleChange}
                required
            />
            </label>

            <button type="submit">Submit</button>
        </form>
        </div>
    </div>
  );
}

export default JobListing;
