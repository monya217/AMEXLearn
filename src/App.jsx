import React, { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { Provider } from "react-redux";
import { useAuthState } from "react-firebase-hooks/auth";
import Home from "./pages/home/Home";
import Contribute from "./pages/contribute/Contribute";
import GetInTouch from "./pages/getInTouch/GetInTouch";
import Dashboard from "./pages/dashboard/Dashboard";
import AuthPage from "./pages/authPage/AuthPage";
import NotFound from "./pages/notFound/NotFound";
import Navbar from "./components/Navbar/Navbar";
import { auth } from "./firebase/firebase";
import { CoursesProvider } from "./context/course_context";
import { CartProvider } from "./context/cart_context";
import LearnRoutes from "./LearnRoutes";
import PostBlog from "./components/Contribute/PostBlog.jsx";
import PrivateRoute from "./components/Contribute/PrivateRoute.jsx";
import ProfilePage from "./components/GetInTouch/Profile/ProfilePage.jsx";
import Blogpage from "./pages/contribute/Blogpage.jsx";
import Podcasts from './pages/podcast/Podcasts.jsx';
import { store } from "./redux/store"; 
import Sessions from "./components/Dashboard/Sessions.jsx";
import Activity from "./components/Dashboard/Activity.jsx";
import PlayandLearn from "./pages/learn/playandlearn.jsx"; 
import Livesessions from "./pages/learn/livesession.jsx"; 
import Chatbot from "./components/Chatbot.jsx";
import ScrollToTop from './components/ScrollToTop';
import { CoinsProvider } from './context/CoinsContext';  
import CoinsWidget from "./components/Dashboard/CoinsWidget.jsx";
import { useLocation } from "react-router-dom";
import { SpeedInsights } from "@vercel/speed-insights/react"
const App = () => {
  const [authUser] = useAuthState(auth);
  const [user, setUser] = useState(null);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        setUser(authUser);
      } else {
        setUser(null);
      }
    });

    return () => {
      unsubscribe();
    };
  }, []);

  return (
    
    <Provider store={store}>
      <SpeedInsights/>
      <BrowserRouter>
        <ScrollToTop />
        <Navbar />
        <CoinsProvider>
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
            <Route path="/playandlearn" element={<PlayandLearn />} />
            <Route path="/livesession" element={<Livesessions />} />
            <Route path="/get-in-touch" element={<GetInTouch />} />
            <Route path="/blogs" element={<Contribute />} />
            <Route
              path="/blogs/create"
              element={
                <PrivateRoute>
                  <PostBlog />
                </PrivateRoute>
              }
            />
            <Route path="/podcasts" element={<Podcasts />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route
              path="/dashboard/sessions"
              element={
                <PrivateRoute>
                  <Sessions />
                </PrivateRoute>
              }
            />
            <Route path="/dashboard/activity/:username" element={<Activity />} />
            <Route path="/auth" element={!authUser ? <AuthPage /> : <Navigate to="/" />} />
            <Route path="/:username" element={<ProfilePage />} />
            <Route path="/blog/:id" element={<Blogpage user={user} />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
          <Chatbot />
          <LocationListener />
        </CoinsProvider>
      </BrowserRouter>
    </Provider>
  );
};

const LocationListener = () => {
  const location = useLocation();

  if (location.pathname !== "/" && location.pathname !== "/auth") {
    return <CoinsWidget />;
  }

  return null;
};

export default App;
