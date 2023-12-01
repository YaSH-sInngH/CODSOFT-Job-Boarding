import React from 'react';
import './home.css';
import {Link} from 'react-router-dom'
import Navbar from './navbar';
const home = () => {
  return (
    <div>
        <Navbar />
        <div className="container">
          <div className="left-con">
            <img src="images/bgimg.png" alt="" />
              <div className="left-con-sty">
                <p>Hey, <br/> Post a Job</p>
                <button><Link to="/jobListing">Post a Job <span>&#x27F6;</span></Link></button>
              </div>
          </div>
          <div className="right-con">
              <div className="left-con-sty">
                <p>Or, <br/> Get Hired</p>
                <button><Link to="/jobListingpage">Get Hired<span>&#x27F6;</span></Link></button>
              </div>
            <img src="images/bgimg.png" alt="" />
          </div>
        </div>
    </div>
  )
}

export default home