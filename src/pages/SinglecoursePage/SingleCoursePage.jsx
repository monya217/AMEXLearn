import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import styled from "styled-components";
import { useCoursesContext } from '../../context/course_context';
import StarRating from '../../components/StarRating';
import { MdInfo } from "react-icons/md";
import { TbWorld } from "react-icons/tb";
import { FaShoppingCart } from "react-icons/fa";
import { RiClosedCaptioningFill } from "react-icons/ri";
import { BiCheck } from "react-icons/bi";
import { useCartContext } from '../../context/cart_context';


const SingleCoursePage = () => {
  const { id } = useParams();
  const { fetchSingleCourse, single_course } = useCoursesContext();
  const { addToCart } = useCartContext();

  useEffect(() => {
    fetchSingleCourse(id);
  }, [id, fetchSingleCourse]);

  if (!single_course) {
    return <div>Loading...</div>; // Add loading state
  }

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
    content,
  } = single_course;

  return (
    <SingleCourseWrapper className="learn-holder">
      <div className='course-intro mx-auto grid'>
        <div className='course-img'>
          <img src={image} alt={course_name} />
        </div>
        <div className='course-details'>
          <div className='course-category bg-white text-dark text-capitalize fw-6 fs-12 d-inline-block'>{category}</div>
          <div className='course-head'>
            <h5>{course_name}</h5>
          </div>
          <div className='course-body'>
            <p className='course-para fs-18'>{description}</p>
            <div className='course-rating flex'>
              <span className='rating-star-val fw-8 fs-16'>{rating_star}</span>
              <StarRating rating_star={rating_star} />
              <span className='rating-count fw-5 fs-14'>({rating_count} Ratings)</span>
              <span className='students-count fs-14'>{students} Students</span>
            </div>

            <ul className='course-info'>
              <li>
                <span className='fs-14'>Created by <span className='fw-6 opacity-08'>{creator}</span></span>
              </li>
              <li className='flex'>
                <span><MdInfo /></span>
                <span className='fs-14 course-info-txt fw-5'>Last updated {updated_date}</span>
              </li>
              <li className='flex'>
                <span><TbWorld /></span>
                <span className='fs-14 course-info-txt fw-5'>{lang}</span>
              </li>
              <li className='flex'>
                <span><RiClosedCaptioningFill /></span>
                <span className='fs-14 course-info-txt fw-5'>{lang} [Auto]</span>
              </li>
            </ul>
          </div>

          <div className='course-foot'>
            <div className='course-price'>
              <span className='new-price fs-26 fw-8'>₹{discounted_price}</span>
              <span className='old-price fs-26 fw-6'>₹{actual_price}</span>
            </div>
          </div>

          <div className='course-btn'>
            <Link
              to="/cart"
              className='add-to-cart-btn d-inline-block fw-7 bg-purple'
              onClick={() => addToCart(courseID, image, course_name, creator, discounted_price, category)}
              style={{ background: 'var(--primary-hue)', color: '#fff', padding: '10px 20px', borderRadius: '5px' }}
            >
              
              Enroll Now
              
            </Link>
          </div>
        </div>
      </div>

      <div className='course-full bg-white text-dark'>
        <div className='course-learn mx-auto'>
          <div className='course-sc-title'>What you'll learn</div>
          <ul className='course-learn-list grid'>
            {learnItems && learnItems.map((learnItem, idx) => (
              <li key={idx}>
                <span><BiCheck /></span>
                <span className='fs-14 fw-5 opacity-09'>{learnItem}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className='course-content mx-auto'>
          <div className='course-sc-title'>Course content</div>
          <ul className='course-content-list'>
            {content && content.map((contentItem, idx) => (
              <li key={idx}>
                <span>{contentItem}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </SingleCourseWrapper>
  );
};

const SingleCourseWrapper = styled.div`
  background: var(--clr-dark);
  color: var(--clr-white);
  
  
  .course-intro {
    padding: 40px 16px;
    max-width: 992px;
    display: grid;
    grid-template-columns: 1fr;
    grid-gap: 20px;
    margin-top: 40px; /* Add top margin */

    @media screen and (min-width: 880px) {
      grid-template-columns: 1fr 1fr;
      column-gap: 40px;
      .course-img {
        order: 2;
      }
    }

    .course-img img {
      width: 100%;
      height: auto;
      margin-top: 70px;
      margin-left: 80px;
    }

    .course-details {
      padding-top: 20px;
    }

    .course-category {
      padding: 4px 8px;
      border-radius: 6px;
      background: var(--clr-white);
      color: var(--clr-dark);
      display: inline-block;
      margin-bottom: 8px;
    }

    .course-head {
      font-size: 38px;
      line-height: 1.2;
      padding: 12px 0 0 0;
      font-family: 'Actor', sans-serif; 
    }

    .course-para {
      padding: 12px 0;
      font-family: 'Gafata', sans-serif; 
    }

    .rating-star-val {
      margin-right: 7px;
      padding-bottom: 5px;
      color: var(--clr-orange);
    }

    .students-count {
      margin-left: 8px;
    }

    .rating-count{
      font-size: 12.5px;
      margin-left: 3px;
      font-weight: 500;
      opacity: 0.8;
    }

    .course-info {
      li {
        margin-bottom: 2px;
        &:nth-child(2) {
          margin-top: 10px;
        }
        font-family: 'Actor', sans-serif; 
      }

      .course-info-txt {
        text-transform: capitalize;
        margin-left: 8px;
        margin-bottom: 4px;
      }
    }

    .course-price {
      margin-top: 12px;

      .new-price {
        color: #ffffff;
      }

      .old-price {
        color: #eceb98;
        text-decoration: line-through;
        margin-left: 10px;
      }
    }

    .course-btn {
      margin-top: 16px;
      

      .add-to-cart-btn {
        padding: 10px 20px;
        font-family: 'Actor', sans-serif; 

        span {
          margin-left: auto;
        }
      }
    }
  }

  .course-full {
    padding: 40px 16px;

    .course-sc-title {
      font-size: 22px;
      font-weight: 700;
      margin: 12px 0;
    }

    .course-learn {
      max-width: 992px;
      border: 1px solid rgba(0, 0, 0, 0.2);
      padding: 12px 28px 22px 28px;

      .course-learn-list {
        li {
          margin: 5px 0;
          display: flex;
          span {
            &:nth-child(1) {
              opacity: 0.95;
              margin-right: 12px;
            }
          }
        }

        @media screen and (min-width: 992px) {
          grid-template-columns: repeat(2, 1fr);
        }
      }
    }

    .course-content {
      max-width: 992px;
      margin-top: 30px;
      border: 1px solid rgba(0, 0, 0, 0.2);
      padding: 12px 28px 22px 28px;

      .course-content-list {
        li {
          background-color: #f7f9fa;
          padding: 12px 18px;
          border: 1px solid rgba(0, 0, 0, 0.2);
          margin-bottom: 10px;
          font-weight: 800;
          font-size: 15px;
        }
      }
    }
  }
`;


export default SingleCoursePage;

