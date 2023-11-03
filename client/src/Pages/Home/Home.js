import React, { useContext, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthContext';

import { Sidebar } from '../../components/Sidebar/Sidebar';

export const Home = () => {
    return (
    <div className="container-fluid">
      <div className="row">
        <Sidebar></Sidebar>
      </div>
    </div>
    );
}