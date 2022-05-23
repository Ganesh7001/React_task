import React from 'react';
import './Navbar.css';
import Globe from './Icons/Globe';
import Icon1 from './Icons/Icon1';
import Icon2 from './Icons/Icon2';
import Icon3 from './Icons/Icon3';
import Icon4 from './Icons/Icon4';
import Icon5 from './Icons/Icon5';
import Group from './Icons/Group';

function Navbar() {
  return ( 
    
  <nav className="navbar navbar-expand-lg   " id='sticky'>
  <div className="container-fluid " >
    
    <a className="navbar-brand " >
    <span>
    <span className='group'><Group/></span>
    <span className='text'><h3>Pods</h3></span>
    </span>
    </a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <a className="nav-link icon1" href="#/Popular"><Icon1/></a>
        </li>
        <li className="nav-item">
          <a className="nav-link icon" href="#/Toprated"><Globe/></a>
        </li>
        <li className="nav-item">
          <a className="nav-link icon2" href="#/Upcoming"><Icon2/></a>
        </li>
        <li className="nav-item">
          <a className="nav-link icon3" href="#/Upcoming"><Icon3/></a>
        </li>
        <li className="nav-item">
          <a className="nav-link icon4" href="#/Upcoming"><Icon4/></a>
        </li>
        <li className="nav-item">
          <a className="nav-link icon5" href="#/Upcoming"><Icon5/></a>
        </li>
        
      </ul>
    </div>
  </div>
  </nav>
  

  )
   
  
}

export default Navbar;