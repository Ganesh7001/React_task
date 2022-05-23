import React from 'react';
import './bar.css';
import Icon6 from './Icons/Icon6';
import Icon7 from './Icons/Icon7';
import Icon8 from './Icons/Icon8';
import Group294 from './Icons/Group294';
import Icon9 from './Icons/Icon9';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap';
import 'bootstrap/dist/js/bootstrap.js';
import DropdownButton from 'react-bootstrap/DropdownButton';
import Dropdown from 'react-bootstrap/Dropdown'

function Bar() {
  return ( 
    
  <nav className="navbar navbar-expand-lg   " id='sticky1'>
  <div className="container-fluid " >
    
    {/* <a className="navbar-brand " >
    <span>
    <span className='group'><Group/></span>
    <span className='text'><h3>Pods</h3></span>
    </span>
    </a> */}
    {/* <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button> */}
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <a className="nav-link icon7">
          <span>
          <span className='icon7'><Icon7/></span>
          <span ><h7>All pods</h7></span>
          </span>
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link icon6" href="#/Toprated">
            <span>
            <span className='icon6'> <Icon6/></span>
            <span><h7>Feed</h7></span>
            </span>
         </a>
        </li>
        <li className="nav-item">
          <a className="nav-link group294" href="#/Upcoming">
            <span>
            <span className='group294'><Group294/></span>
            <span><h7>List</h7></span>
            </span>
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link icon8" href="#/Upcoming">
            <span>

            <span className='icon8'><Icon8/></span>
              <span><h7>Boards</h7></span>
            </span>
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link icon9" href="#/Upcoming">
            <span>
            <span className='icon9'> <Icon9/></span>
            <span><h7>Gantt</h7></span>
            </span>
         </a>
        </li>   
        <li >  
        <DropdownButton className='filter'
      alignRight     
      title="Filter"
      id="dropdown-menu-align-right"   
        >
       
        
              <Dropdown.Item eventKey="option-1">status</Dropdown.Item>
              <Dropdown.Item eventKey="option-2"><input type="checkbox" />Active</Dropdown.Item>
              <Dropdown.Item eventKey="option-3"><input type="checkbox" />In Progress</Dropdown.Item>
              <Dropdown.Item eventKey="option-3"><input type="checkbox" />On Hold</Dropdown.Item>
             
              <Dropdown.Divider />
              
              <Dropdown.Item eventKey="option-1">Task Type</Dropdown.Item>
              <Dropdown.Item eventKey="option-2"><input type="checkbox" />General</Dropdown.Item>
              <Dropdown.Item eventKey="option-3"><input type="checkbox" />Meeting</Dropdown.Item>
              <Dropdown.Item eventKey="option-3"><input type="checkbox" />Report</Dropdown.Item>
              
              <Dropdown.Divider />
              <Dropdown.Item eventKey="some link"><button  type="button" class="btn btn-secondary">Department</button></Dropdown.Item>
              <Dropdown.Item eventKey="some link"><button  type="button" class="btn btn-secondary">Member</button></Dropdown.Item>
              <Dropdown.Item eventKey="some link"><button type="button" class="btn btn-primary">Save</button></Dropdown.Item>
      </DropdownButton>
      </li> 
      <li>
      <DropdownButton className='filter2'
      alignRight    
      title="NewTask"
      id="dropdown-menu-align-right">
    
              <Dropdown.Item eventKey="option-1">status</Dropdown.Item>
              <Dropdown.Item eventKey="option-2"><input type="checkbox" />Active</Dropdown.Item>
              <Dropdown.Item eventKey="option-3"><input type="checkbox" />In Progress</Dropdown.Item>
              <Dropdown.Item eventKey="option-3"><input type="checkbox" />On Hold</Dropdown.Item>
             
              <Dropdown.Divider />
              
              <Dropdown.Item eventKey="option-1">Task Type</Dropdown.Item>
              <Dropdown.Item eventKey="option-2"><input type="checkbox" />General</Dropdown.Item>
              <Dropdown.Item eventKey="option-3"><input type="checkbox" />Meeting</Dropdown.Item>
              <Dropdown.Item eventKey="option-3"><input type="checkbox" />Report</Dropdown.Item>
              
              <Dropdown.Divider />
              <Dropdown.Item eventKey="some link"><button  type="button" class="btn btn-secondary">Department</button></Dropdown.Item>
              <Dropdown.Item eventKey="some link"><button  type="button" class="btn btn-secondary">Member</button></Dropdown.Item>
              <Dropdown.Item eventKey="some link"><button type="button" class="btn btn-primary">Save</button></Dropdown.Item>
      </DropdownButton>
      </li>
      </ul>
    </div>
  </div>
  </nav>
  

  )
   
  
}

export default Bar;