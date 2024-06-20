import React from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import SingleCourse from './pages/SinglecoursePage/SingleCoursePage';
import CoursesPage from './pages/CoursesPage/CoursesPage';
import Learn from './pages/learn/Learn';

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
      
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Learn />} />
        <Route path="/courses/:id" element={<SingleCourse />} />
        <Route path="/category/:category" element={<CoursesPage />} />
      </Routes>
    </>
  );
};

export default LearnRoutes;

