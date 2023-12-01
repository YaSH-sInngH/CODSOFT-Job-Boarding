// App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/basic/home';
import JobListingsPage from './components/basic/joblistingpage';
import JobDetailsPage from './components/basic/jobdetail';
import JobListing from './components/basic/jobListing';
import Login from './components/basic/login';
import SignUp from './components/basic/signup';
import CandidatePage from './components/basic/candidate';
import RegistrationPage from './components/basic/registration'; // Correct import path
import Employer from './components/basic/employer';
const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/jobdetails/:id" element={<JobDetailsPage />} />
        <Route path="/joblistingpage" element={<JobListingsPage />} />
        <Route path="/jobListing" element={<JobListing />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/candidate" element={<CandidatePage />} />
        <Route path="/registration" element={<RegistrationPage />} />
        <Route path="/employer" element={<Employer />} />
      </Routes>
    </Router>
  );
};

export default App;
