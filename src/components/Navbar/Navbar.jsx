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
  const pathname = useLocation().pathname;
  const isHomePage = pathname === '/';
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

  return (
    <nav className={`container ${isHomePage && !sticky ? '' : 'dark-nav'}`}>
      <ul className="navbar-brand">
        <li onClick={() => navigate('/')}>AMEXLearn</li>
      </ul>
      <ul className={`navbar-links ${menuOpen ? 'show' : ''}`}>
        <li onClick={() => navigate('/learn')}>Learn</li>
        <li onClick={() => navigate('/get-in-touch')}>Community</li>
        <li onClick={() => navigate('/contribute')}>Contribute</li>
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


/*
original
import React, { useEffect, useState } from 'react'
import { useNavigate,useLocation } from 'react-router-dom';
import './Navbar.css'
import useAuthStore from '../../store/authStore';
import ProfileHeader from '../ProfileHeader/ProfileHeader';
import LoginButton from '../LoginButton/LoginButton';


const Navbar = () => {
  const navigate = useNavigate();
  const [sticky,setSticky] = useState(false);
  const pathname = useLocation().pathname;
  const isHomePage = pathname === '/';
  const { user } = useAuthStore();


  useEffect(() => {
    window.addEventListener('scroll',() =>{
      window.scrollY > 50 ? setSticky(true) : setSticky(false);
    })
  },[]);

  return (
<nav className={`container ${isHomePage && !sticky ? '' : 'dark-nav'}`}>
<ul className='navbar-brand'>
        <li onClick={() => navigate('/')}>AMEXLearn</li>
      </ul>
      <ul className='navbar-links'>
        <li onClick={() => navigate('/learn')}>Learn</li>
        <li onClick={() => navigate('/get-in-touch')}>Get In Touch</li>
        <li onClick={() => navigate('/contribute')}>Contribute</li>
      </ul>
      <ul className='navbar-auth'>
        <li>
        {user ? <ProfileHeader /> : <LoginButton />}
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;*/

