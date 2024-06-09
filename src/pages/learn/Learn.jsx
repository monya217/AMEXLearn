/*import './learn.css'
import Hero from "../../components/Hero";
import CoursesList from "../../components/CourseList";

const Learn = () => {
  return (
    <div className='holder'>
      <Hero />
      <CoursesList />
    </div>
  )
}*/



// Learn.jsx
import React from 'react';
import './learn.css';
import Hero from "../../components/Hero";
import CoursesList from "../../components/CourseList";
import { Link } from 'react-router-dom';

const Learn = () => {
  return (
    <div className='learn-holder'>
      <Hero />
      <CoursesList />
      <Link to="/learn/leaderboard">
        <button className="leaderboard-button">Leaderboard</button>
      </Link>
    </div>
  )
}
export default Learn
