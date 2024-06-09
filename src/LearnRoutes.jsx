import React from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import SingleCourse from './pages/SinglecoursePage/SingleCoursePage';
import CoursesPage from './pages/CoursesPage/CoursesPage'; // Import CoursesPage correctly
import Learn from './pages/learn/Learn';
import LeaderBoard from './pages/leaderboard/LeaderBoard'; 

const ScrollToTop = () => {
  const location = useLocation();

  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return null;
};


const LearnRoutes = () => {
  return (
    <>
      {/* Render ScrollToTop outside of Routes */}
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Learn />} />
        <Route path="/courses/:id" element={<SingleCourse />} />
        <Route path="/category/:category" element={<CoursesPage />} />
        <Route path="/leaderboard" element={<LeaderBoard />} />  
      </Routes>
    </>
  );
};

export default LearnRoutes;

