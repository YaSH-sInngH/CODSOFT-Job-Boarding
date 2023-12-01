import React from 'react';
import { Link } from 'react-router-dom';
import './navbar.css';

const Navbar = () => {
  return (
    <nav>
      <ul>
        <li>
        <h2 className="logo">J<span>OBZY</span></h2>
        </li>
      </ul>
      <ul className="left">
        <li>
          <Link to="/">HOME</Link>
        </li>
        <li>
          <Link to="/joblistingpage">JOBS</Link>
        </li>
      </ul>

      <div className="middle">
        {/* Add your search bar here */}
        <input type="text" placeholder="Search Jobs" className='midduji' />
        <button type="button">Search</button>
      </div>

      <ul className="right">
        <li>
          <Link to="/candidate">CANDIDATE</Link>
        </li>
        <li>
          <Link to="/employer">EMPLOYER</Link>
        </li>
        <li className='login-container'>
          <Link to="/login"><img src="images/login.png" className='image' alt="Login" /></Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
