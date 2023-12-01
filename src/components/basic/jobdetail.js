import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Navbar from './navbar';
import './jobdetails.css';

const JobDetailsPage = () => {
  const { id } = useParams();
  const [jobDetails, setJobDetails] = useState(null);
  const [resume, setResume] = useState(null);

  useEffect(() => {
    // Sample data (replace with actual API call)
    const sampleJobDetails = {
      id: 1,
      title: "Web Developer",
      company: "Tech Co",
      location: "Remote",
      salary: "10 LPA",
      description: `Job Title: Web Developer
      Responsibilities:
      - Outline specific tasks: front-end development, back-end development, database management, collaboration.
      
      Required Skills:
      - Proficiency in: HTML, CSS, JavaScript.
      - Experience with: frameworks, libraries, web development best practices.

      Experience Level:
      - Entry-level, mid-level, or senior.
      - Preferred experience: specify years.

      Education Requirements:
      - Degree in: computer science, web development, or related field.
      - Certifications or additional training: mentioned.

      Portfolio:
      - Request candidates to provide a portfolio showcasing previous projects.

      Collaboration and Communication:
      - Emphasize effective communication and collaboration skills.
      - Work closely with: designers, project managers, team members.

      Coding Standards:
      - Specify coding standards or practices for consistency.

      Adaptability:
      - Emphasize adaptability and willingness to learn new technologies.

      Company Culture and Values:
      - Describe company culture: remote work policies, team dynamics.

      `,
    };

    setJobDetails(sampleJobDetails);
  }, [id]);

  const handleResumeChange = (e) => {
    // Assuming you want to store the selected file
    const selectedResume = e.target.files[0];
    setResume(selectedResume);
  };

  const handleApplyClick = () => {
    // Implement your logic to submit the resume (e.g., send to a server)
    // For demonstration purposes, log the resume to the console
    console.log('Resume Submitted:', resume);
    // You can also send the resume to the server here
  };

  if (!jobDetails) {
    return <p>Loading...</p>;
  }

  return (
    <>
      <Navbar />
      <div className='detailspage'>
        <h1>{jobDetails.title} at {jobDetails.company}</h1>
        <p>{jobDetails.location} - {jobDetails.salary}</p>
        <div className="description">
          <h2>Description:</h2>
          <ul>{jobDetails.description.split('\n').map((point, index) => point.trim() !== '' && <li key={index}>{point.trim()}</li>)}</ul>
        </div>
        {/* Add more details as needed */}
        
        {/* File input for resume */}
        <input
          type="file"
          accept=".pdf"
          onChange={handleResumeChange}
        />

        {/* Button to apply */}
        <button onClick={handleApplyClick}>Apply</button>
      </div>
    </>
  );
}

export default JobDetailsPage;
