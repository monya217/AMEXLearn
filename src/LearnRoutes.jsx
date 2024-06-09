import { Routes, Route } from 'react-router-dom';
import SingleCourse from './pages/SinglecoursePage/SingleCoursePage';
import CoursesPage from './pages/CoursesPage/CoursesPage'; // Import CoursesPage correctly
import Learn from './pages/learn/Learn'; 

const LearnRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Learn />} /> {/* Change Home to Learn */}
      <Route path="/courses/:id" element={<SingleCourse />} />
      <Route path="/category/:category" element={<CoursesPage />} />
    </Routes>
  );
};

export default LearnRoutes;

