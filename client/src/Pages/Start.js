import React from 'react';
import { NavLink } from 'react-router-dom';
import './Start.css';
import RentOutCar from './RentOutCar';
import Host from './Host';
import { Sidebar } from '../components/Sidebar/Sidebar';


const Start = () => (
  <div className="main-content">

    <div className="container-fluid">
      <div className="row">
        <Sidebar></Sidebar>
      </div>
    </div>
    <div className="content-item">
      <NavLink to="/start/rent-out-car" className="large" activeClassName="active-link">
        Rent Out Car
      </NavLink>
      
      <img className="circular-image" src="book.PNG" alt="Book car" />
    </div>
    <div className="content-item_2">
      <img className="circular-image_1" src="host.PNG" alt="Host ac" />
      <NavLink to="/rental-form" className="lg1" activeClassName="active-link">
        Host 🗝️
      </NavLink>
    </div>

  </div>

);

export { Start };
