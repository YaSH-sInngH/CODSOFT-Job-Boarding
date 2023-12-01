// JobListingsPage.js
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './joblistingpage.css'; // Import the CSS file
import Navbar from './navbar';

const JobListingsPage = () => {
  const [jobListings, setJobListings] = useState([]);

  // Fetch job listings (you would typically fetch this from a server)
  useEffect(() => {
    // Sample data (replace with actual API call)
    const sampleJobListings = [
      { id: 1, title: "Web Developer", company: "Tech Co", location: "Remote", salary: "10 LPA" },
      { id: 2, title: "Data Scientist", company: "Data Corp", location: "City Center", salary: "12 LPA" },
      // Add more job listings as needed
    ];

    setJobListings(sampleJobListings);
  }, []);

  return (
    <>
      <Navbar/>
      <div className="JobListingsPage">
        <h1 className="JobListingsHeading">Currently Listed Jobs</h1>
        <div className="JobCardContainer">
          {jobListings.map(job => (
            <div key={job.id} className="JobCard">
              <Link to={`/jobdetails/${job.id}`}>
                <h3>{job.title}</h3>
                <p>Company: {job.company}</p>
                <p>Location: {job.location}</p>
                <p>Salary: {job.salary}</p>
              </Link>
            </div>
          ))}
        </div>
        <Link to="/jobListing" className="AddJobButton">Add a Job</Link>
      </div>
    </>
  );
}

export default JobListingsPage;
