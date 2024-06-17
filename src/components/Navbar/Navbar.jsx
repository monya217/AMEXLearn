import React, { useEffect, useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import './Navbar.css';
import useAuthStore from '../../store/authStore';
import ProfileHeader from '../ProfileHeader/ProfileHeader';
import LoginButton from '../LoginButton/LoginButton';

const Navbar = () => {
  const navigate = useNavigate();
  const [sticky, setSticky] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false); // State for dropdown
  const location = useLocation();
  const isHomePage = location.pathname === '/';
  const { user } = useAuthStore();

  useEffect(() => {
    const handleScroll = () => {
      window.scrollY > 50 ? setSticky(true) : setSticky(false);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  const handleOptionClick = (path) => {
    setDropdownOpen(false);
    navigate(path);
  };

  return (
    <nav className={`container ${isHomePage && !sticky ? '' : 'dark-nav'}`}>
      <ul className="navbar-brand">
        <li onClick={() => navigate('/')}>AMEXLearn</li>
      </ul>
      <ul className={`navbar-links ${menuOpen ? 'show' : ''}`}>
        <li className={`dropdown ${location.pathname.startsWith('/learn') ? 'active' : ''}`}>
          <span className="dropbtn" onClick={toggleDropdown}>
            Learn
            <i className={`arrow ${dropdownOpen ? 'up' : 'down'}`}></i>
          </span>
          <div className={`dropdown-content ${dropdownOpen ? 'show' : ''}`}>
            <span onClick={() => handleOptionClick('/learn')}>Courses</span>
            <span onClick={() => handleOptionClick('/podcasts')}>Podcasts</span>
          </div>
        </li>
        <li className={location.pathname === '/get-in-touch' ? 'active' : ''} onClick={() => navigate('/get-in-touch')}>
          Community
        </li>
        <li className={location.pathname.startsWith('/contribute') || location.pathname.startsWith('/blog') ? 'active' : ''} onClick={() => navigate('/contribute')}>
          Contribute
        </li>
      </ul>
      <ul className="navbar-auth">
        <li>{user ? <ProfileHeader /> : <LoginButton />}</li>
      </ul>
      <div className={`menu-icon ${menuOpen ? 'open' : ''}`} onClick={toggleMenu}>
        <i className="fas fa-bars"></i>
        <i className="fas fa-times"></i>
      </div>
    </nav>
  );
};

export default Navbar;
