import React, { useEffect, useState } from 'react';
import { Box, Button } from '@chakra-ui/react'; // Replace with appropriate imports as per your UI library
import './Navbar.css';
import useAuthStore from '../../store/authStore';
import ProfileHeader from '../ProfileHeader/ProfileHeader';
import LoginButton from '../LoginButton/LoginButton';
import SearchBar from './SearchBar'; // Import the new SearchBar component
import { useNavigate, useLocation } from 'react-router-dom';

const Navbar = () => {
  const navigate = useNavigate();
  const [sticky, setSticky] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
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

  const isLearnPage = ['/learn', '/playandlearn', '/livesession', '/podcasts'].some(path => location.pathname.startsWith(path)) || location.pathname.startsWith('/courses/');

  return (
    <nav className={`container ${isHomePage && !sticky ? '' : 'dark-nav'}`}>
      <ul className="navbar-brand">
        <li onClick={() => navigate('/')}>AMEXLearn</li>
      </ul>
      <ul className={`navbar-links ${menuOpen ? 'show' : ''}`}>
        <li className={isLearnPage ? 'active' : ''}>
          <span onClick={() => navigate('/learn')}>
            Learn
          </span>
        </li>
        <li className={(location.pathname.startsWith('/blogs') || location.pathname.startsWith('/blog')) ? 'active' : ''} onClick={() => navigate('/blogs')}>
          Blogs
        </li>
        <li className={location.pathname === '/get-in-touch' ? 'active' : ''} onClick={() => navigate('/get-in-touch')}>
          Community
        </li>
      </ul>
      <SearchBar /> {/* Add the SearchBar component here */}
      <ul className={`navbar-auth ${menuOpen ? 'show' : ''}`}>
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
