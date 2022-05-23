import React from 'react';
import './Sidebar.css';
import Home from './Icons/Home';
import Mytask from './Icons/Mytask';
import Group from './Icons/Group';
import Goals from './Icons/Goals';
import Project from './Icons/Project';
import Profile from './Icons/Profile';

function Sidebar() {
  return (
    <div className='first'>
    <nav>
    <a href=" ">
    <i className="fa fa-home fa-lg"></i>
    <span ><h1>Teamlease</h1></span>
  </a>

  
<div className="scrollbar" id="style-1">
  <a href=" ">
    <i className="fa fa-home fa-lg"></i>
    <span><span className='home'><Home/></span>
    <span ><h3>Home</h3></span></span>
  </a>

  <a href=" ">
    <i className="fa fa-user fa-lg"></i>
    <span><span className='mytask'><Mytask/></span>
    <span ><h3>My Tasks</h3></span></span>
  </a>
  
  <a href=" ">
      <i className="fa fa-envelope-o fa-lg"></i>
      <span>
    <span className='group'><Group/></span>
    <span className='text'><h3>Pods</h3></span>
    </span>
  </a>
  
    <a href=" ">
     <i className="fa fa-html5 fa-lg"></i>
     <span><span className='goals'><Goals/></span>
      <span><h3> Goals</h3></span></span>
  </a>
  
  <a  href=" ">
  <i className="fa fa-css3 fa-lg"></i>
  <span><span className='project'><Project/></span>
  <span><h3>Projects</h3></span></span>
  </a>

  <a  href=" ">
    <i className="fa fa-flask fa-lg"></i>
    <span><span className='profile'><Profile/></span>
    <span ><h3>Profile</h3></span></span>
  </a>

  <a  href=" ">
    <i className="fa fa-picture-o fa-lg"></i>
    <span><h3>Holden Mcgroin </h3></span>
  </a>
</div>

</nav>
</div>
  )
}

export default Sidebar;