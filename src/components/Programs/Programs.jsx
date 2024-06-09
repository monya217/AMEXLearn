import React from 'react'
import './Programs.css'
import community_support_icon from '../../images/icons/community-support.png'
import contribute_icon from '../../images/icons/contribute.png'
import courses_icon from '../../images/icons/courses.png'
import econai_icon from '../../images/icons/econ-ai.png'
import dashboard_icon from '../../images/icons/personalised-finance-help.png'
import learn_icon from '../../images/icons/play-and-learn.png'
import community_support_bg from '../../images/bg/community-support.jpeg'
import contribute_bg from '../../images/bg/contribute.jpeg'
import courses_bg from '../../images/bg/courses.jpeg'
import econai_bg from '../../images/bg/econai.jpeg'
import dashboard_bg from '../../images/bg/personalised-finance-help.jpeg'
import learn_bg from '../../images/bg/play-and-learn.jpeg'

const Programs = () => {
  return (
    <div className = 'programs'>
      <div className='firstRow'>
        <div className='program'>
            <img src={community_support_bg}/>
            <div className='caption'>
              <img src = {community_support_icon}/>
              <h1>Community Support</h1>
              <p>Users can discuss about all things finance and book 
                sessions to connect with financial advisors for 
                personalized guidance.
              </p>
            </div>
        </div>
        <div className='program'>
            <img src={contribute_bg}/>
            <div className='caption'>
              <img src = {contribute_icon}/>
              <h1>Insight Enchange</h1>
              <p>Users can write articles to share their own experiences and insights.
              </p>
            </div>
        </div>
        <div className='program'>
            <img src={courses_bg}/>
            <div className='caption'>
              <img src = {courses_icon}/>
              <h1>Educational Courses</h1>
              <p>Learn essential financial skills with comprehensive, interactive courses.
              </p>
            </div>
        </div>
        <div className='program'>
            <img src={econai_bg}/>
            <div className='caption'>
              <img src = {econai_icon}/>
              <h1>Econ AI</h1>
              <p>Get expert financial advice using OpenAI's GPT-3 trained on financial documents for tailored insights.
              </p>
            </div>
        </div>
        <div className='program'>
            <img src={dashboard_bg}/>
            <div className='caption'>
              <img src = {dashboard_icon}/>
              <h1>Personalised Dashboard</h1>
              <p>Customize financial view for easy tracking and management.
              </p>
            </div>
        </div>
        <div className='program'>
            <img src={learn_bg}/>
            <div className='caption'>
              <img src = {learn_icon}/>
              <h1>Play and Learn</h1>
              <p>Engage with fun games while mastering financial concepts.</p>
            </div>
        </div>
      </div>
    </div>

    
  )
}

export default Programs