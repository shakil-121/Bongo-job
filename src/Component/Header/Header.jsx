import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css'

const Header = () => {
    return (
        <nav className='navbar'>
            <div className="logo">
                <h2>BONGO-JOB</h2>
                </div> 
            <div className="manu">
            <Link to='/'>Home</Link>
            <Link to='/statistics'>Statistics</Link>
            <Link to='/appliedjob'>Applied Job</Link>
            <Link to='/blog'>Blog</Link> 
            </div>  
            <div className='apply-btn'>
            <button><Link to='/'>Start Applying</Link></button>
            </div>

        </nav>
    );
};

export default Header;