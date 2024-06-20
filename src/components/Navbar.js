import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../logo.png';
import { useAuth0 } from '@auth0/auth0-react';
import { FaBars, FaTimes, FaUser } from "react-icons/fa";
import SearchForm from './SearchForm';
import './Navbar.css';

export default function Navbar() {
  const { loginWithRedirect, logout, isAuthenticated, user } = useAuth0();
  const [menuOpen, setMenuOpen] = useState(false);

  const handleMenuClick = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav className='navbar-main'>
      <div className='navbar-main-center'>
        <div className='navbar-main-header'>
          <Link to='/'>
            <img src={logo} alt='cocktail db logo' className='navbar-main-logo' />
          </Link>
          <div className='hamburger' onClick={handleMenuClick}>
            {menuOpen ? (
              <FaTimes size={20} style={{ color: "#fff" }} />
            ) : (
              <FaBars size={20} style={{ color: "#fff" }} />
            )}
          </div>
        </div>

        {/* Adjusting visibility based on menuOpen */}
        <ul className={`navbar-main-links ${menuOpen ? 'active' : ''}`}>
          <li>
            <Link to='/' onClick={handleMenuClick}>Home</Link>
          </li>
          <li>
            <Link to='/about' onClick={handleMenuClick}>About</Link>
          </li>
        </ul>

        <SearchForm />

        {/* Adjusting visibility based on menuOpen */}
        <div className={`navbar-main-buttons ${menuOpen ? 'active' : ''}`}>
          {!isAuthenticated ? (
            <button className='navbar-main-btn' onClick={() => loginWithRedirect()}>
              <FaUser className='navbar-main-login' size='25px' />
            </button>
          ) : (
            <div className='navbar-main-user'>
              <p className='navbar-main-welcome'>{user.name ? `Welcome, ${user.name}!` : 'Welcome!'}</p>
              <button className='navbar-main-btn' onClick={() => logout({ returnTo: window.location.origin })}>
                Logout
              </button>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
}
