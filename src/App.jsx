import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Home from './pages/home/Home';
import Learn from './pages/learn/Learn';
import Contribute from './pages/contribute/Contribute';
import GetInTouch from './pages/getInTouch/GetInTouch';
import Dashboard from './pages/dashboard/Dashboard';
import AuthPage from './pages/authPage/AuthPage';
import NotFound from './pages/notFound/NotFound';
import Navbar from './components/Navbar/Navbar';
import useAuthStore from './store/authStore';
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from './firebase/firebase';
import { StockGeeks } from './components/GetInTouch/StockGeeks';
import ProfilePage from './pages/GetinTouchProfile/ProfilePage';
import { CoursesProvider } from './context/course_context';
import { CartProvider } from './context/cart_context';
import LearnRoutes from './LearnRoutes';
import PostBlog from './components/Contribute/PostBlog.jsx'
import PrivateRoute from './components/Contribute/PrivateRoute.jsx'
 

const App = () => {
  const [authUser] = useAuthState(auth);
  
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route 
          path="/learn/*" 
          element={
            <CoursesProvider>
              <CartProvider>
                <LearnRoutes />
              </CartProvider>
            </CoursesProvider>
          } 
        />
        <Route path="/get-in-touch" element={<GetInTouch />} />
        <Route path="/contribute" element={<Contribute />} />
        <Route 
          path="/contribute/post" 
          element={
            <PrivateRoute>
              <PostBlog />
            </PrivateRoute>
          } 
        />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/auth" element={!authUser ? <AuthPage /> : < Navigate to="/"/>} />
        <Route path="/username" element={<ProfilePage/>} /> {/* Update this to match your actual username route */}
        <Route path="/stocks" element={<StockGeeks/>} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;