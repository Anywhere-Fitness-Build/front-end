import React from 'react';
import {BrowserRouter as Router, Link} from 'react-router-dom';

const Header = () => {
    return(
    <div className="header">
        <Link to="/"><h2>Home</h2></Link>
        <Link to="/dashboarduser"><h2>Dashboard</h2></Link>
        <Link to="/login"><h2>Logout</h2></Link>
    </div>
    )
}

export default Header;