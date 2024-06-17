import React, { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { Provider } from "react-redux";
import { useAuthState } from "react-firebase-hooks/auth";
import Home from "./pages/home/Home";
import Learn from "./pages/learn/Learn";
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
import { StockGeeks } from "./components/GetInTouch/StockGeeks";
import Podcasts from './pages/podcast/Podcasts.jsx';
import { store } from "./redux/store"; 
import Sessions from "./components/Dashboard/Sessions.jsx";
import Activity from "./components/Dashboard/Activity.jsx";
import PlayandLearn from "./pages/learn/playandlearn.jsx"; // Import playandlearn page
import Livesessions from "./pages/learn/livesession.jsx"; // Import livesession page

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
          <Route path="/playandlearn" element={<PlayandLearn />} /> {/* Route for playandlearn */}
          <Route path="/livesession" element={<Livesessions />} /> {/* Route for livesession */}
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

          {/* <Route
            path="/dashboard/activity"
            element={
              <PrivateRoute>
                <Activity />
              </PrivateRoute>
            }
          /> */}
          <Route path="/auth" element={!authUser ? <AuthPage /> : <Navigate to="/" />} />
          <Route path="/:username" element={<ProfilePage />} />
          <Route path="/blog/:id" element={<Blogpage user={user} />} />
          <Route path="/stocks" element={<StockGeeks />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </Provider>
  );
};

export default App;




/*
import React, { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Home from "./pages/home/Home";
import Learn from "./pages/learn/Learn";
import Contribute from "./pages/contribute/Contribute";
import GetInTouch from "./pages/getInTouch/GetInTouch";
import Dashboard from "./pages/dashboard/Dashboard";
import AuthPage from "./pages/authPage/AuthPage";
import NotFound from "./pages/notFound/NotFound";
import Navbar from "./components/Navbar/Navbar";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "./firebase/firebase";
import { CoursesProvider } from "./context/course_context";
import { CartProvider } from "./context/cart_context";
import LearnRoutes from "./LearnRoutes";
import PostBlog from "./components/Contribute/PostBlog.jsx";
import PrivateRoute from "./components/Contribute/PrivateRoute.jsx";
import ProfilePage from "./components/GetInTouch/Profile/ProfilePage.jsx";
import Blogpage from "./pages/contribute/Blogpage.jsx";
import { StockGeeks } from "./components/GetInTouch/StockGeeks";
import Podcasts from './pages/podcast/Podcasts.jsx'
import { store } from "./redux/store";

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
        <Route path="/podcasts" element={<Podcasts />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/auth" element={!authUser ? <AuthPage /> : <Navigate to="/" />} />
        <Route path="/:username" element={<ProfilePage />} />
        <Route path="/blog/:id" element={<Blogpage user={user} />} />
        <Route path="/stocks" element={<StockGeeks />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;*/
