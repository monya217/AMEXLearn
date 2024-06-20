import './notfound.css';
import { Link } from 'react-router-dom'; // If you're using react-router for navigation

const NotFound = () => {
  return (
    <div className="not-found-container">
      <h1 className="not-found-title">404</h1>
      <p className="not-found-message">Oops! The page you are looking for does not exist.</p>
      <Link to="/" className="not-found-link">Go back to Home</Link>
    </div>
  )
}

export default NotFound;
