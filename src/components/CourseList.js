import React from 'react';
import styled from 'styled-components';
import Tabs from "./Tabs";
import { useCoursesContext } from '../context/course_context';

const CourseList = () => {
  const { courses } = useCoursesContext();

  return (
    <CoursesListWrapper>
      <div className='container'>
        <div className='courses-list-top'>
          <h2>A Wealth of Financial Knowledge</h2>
          <p>Explore a wide range of online courses and interactive games designed to boost your financial literacy and money management skills</p>
        </div>

        <Tabs courses={courses} />
      </div>
    </CoursesListWrapper>
  );
}

const CoursesListWrapper = styled.div`
  padding: 40px 0;
  .courses-list-top p {
    font-size: 1.8rem;
  }
`;

export default CourseList;