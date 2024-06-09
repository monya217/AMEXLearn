import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import './SingleCoursePage.css'; // Import the CSS file
import { useCoursesContext } from '../../context/course_context';
import StarRating from '../../components/StarRating';
import { MdInfo } from "react-icons/md";
import { TbWorld } from "react-icons/tb";
import { FaShoppingCart } from "react-icons/fa";
import { RiClosedCaptioningFill } from "react-icons/ri";
import { BiCheck } from "react-icons/bi";
import { Link } from 'react-router-dom';
import { useCartContext } from '../../context/cart_context';

const SingleCoursePage = () => {
  const { id } = useParams();
  const { fetchSingleCourse, single_course } = useCoursesContext();
  const { addToCart } = useCartContext();

  useEffect(() => {
    fetchSingleCourse(id);
  }, [id, fetchSingleCourse]);

  const { 
    id: courseID, 
    category, 
    image, 
    course_name, 
    description, 
    rating_count, 
    rating_star, 
    students, 
    creator, 
    updated_date, 
    lang, 
    actual_price, 
    discounted_price, 
    what_you_will_learn: learnItems, 
    content 
  } = single_course;

  return (
    <div className="single-course-page">
      <div className="course-intro mx-auto grid">
        <div className="course-img">
          <img src={image} alt={course_name} />
        </div>
        <div className="course-details">
          <div className="course-category bg-white text-dark text-capitalize fw-6 fs-12 d-inline-block">{category}</div>
          <div className="course-head">
            <h5>{course_name}</h5>
          </div>
          <div className="course-body">
            <p className="course-para fs-18">{description}</p>
            <div className="course-rating flex">
              <span className="rating-star-val fw-8 fs-16">{rating_star}</span>
              <StarRating rating_star={rating_star} />
              <span className="rating-count fw-5 fs-14">({rating_count})</span>
              <span className="students-count fs-14">{students}</span>
            </div>

            <ul className="course-info">
              <li>
                <span className='fs-14'>Created by <span className='fw-6 opacity-08'>{creator}</span></span>
              </li>
              <li className='flex'>
                <span><MdInfo /></span>
                <span className="course-info-txt fs-14 fw-5">Last updated {updated_date}</span>
              </li>
              <li className='flex'>
                <span><TbWorld /></span>
                <span className="course-info-txt fs-14 fw-5">{lang}</span>
              </li>
              <li className='flex'>
                <span><RiClosedCaptioningFill /></span>
                <span className="course-info-txt fs-14 fw-5">{lang} [Auto]</span>
              </li>
            </ul>
          </div>

          <div className="course-foot">
            <div className="course-price">
              <span className="new-price fs-26 fw-8">${discounted_price}</span>
              <span className="old-price fs-26 fw-6">${actual_price}</span>
            </div>
          </div>

          <div className="course-btn">
            <Link to="/cart" className="add-to-cart-btn d-inline-block fw-7 bg-purple" onClick={() => addToCart(courseID, image, course_name, creator, discounted_price, category)}>
              <FaShoppingCart /> Add to cart
            </Link>
          </div>
        </div>
      </div>

      <div className="course-full bg-white text-dark">
        <div className="course-learn mx-auto">
          <div className="course-sc-title">What you'll learn</div>
          <ul className="course-learn-list grid">
            {learnItems && learnItems.map((learnItem, idx) => (
              <li key={idx}>
                <span><BiCheck /></span>
                <span className='fs-14 fw-5 opacity-09'>{learnItem}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="course-content mx-auto">
          <div className="course-sc-title">Course content</div>
          <ul className="course-content-list">
            {content && content.map((contentItem, idx) => (
              <li key={idx}>
                <span>{contentItem}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default SingleCoursePage;
