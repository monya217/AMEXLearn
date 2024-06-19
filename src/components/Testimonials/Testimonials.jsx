import React, { useRef, useEffect, useState } from 'react';
import './Testimonials.css';
import next_icon from './../../images/next-icon.png';
import back_icon from './../../images/back-icon.png';
import user_1 from './../../images/user-1.png';
import user_2 from './../../images/user-2.png';
import user_3 from './../../images/user-3.png';
import user_4 from './../../images/user-4.png';

const initialTestimonials = [
  {
    id: 1,
    img: user_1,
    name: 'Johanna S.',
    role: 'Financial Analyst',
    text: 'As a financial analyst, staying updated with the latest financial trends and concepts is crucial. AMEXLearn has become my go-to resource for quick, reliable, and insightful information. The interactive lessons and real-world examples make complex topics easy to understand. It\'s like having a financial library in my pocket!'
  },
  {
    id: 2,
    img: user_2,
    name: 'David M.',
    role: 'Small Business Owner',
    text: 'Running a small business means wearing many hats, and understanding finance is one of the most challenging aspects. AMEXLearn has been a game-changer for me. The app breaks down financial concepts into manageable pieces and offers practical advice that I can apply to my business immediately. It has given me the confidence to make better financial decisions.'
  },
  {
    id: 3,
    img: user_3,
    name: 'Emily R.',
    role: 'College Student',
    text: 'As a finance major, I was looking for a tool to supplement my studies, and AMEXLearn exceeded my expectations. The app\'s detailed modules and quizzes have helped reinforce what I learn in class. Plus, the real-life case studies are invaluable for understanding how financial principles work in practice. I highly recommend it to any student looking to excel in finance.'
  },
  {
    id: 4,
    img: user_4,
    name: 'Mike T.',
    role: 'Retired Engineer',
    text: 'Even in retirement, managing finances is important. AMEXLearn has been a fantastic resource for learning about investments, retirement planning, and managing expenses. The app is straightforward and provides practical tips that are easy to implement. It\'s never too late to improve your financial literacy, and AMEXLearn makes it possible.'
  },
  {
    id: 5,
    img: user_2,
    name: 'Emma',
    role: 'Teacher',
    text: 'Managing finances is important. It has been a fantastic platform for learning about investments and managing expenses. The app is straightforward and provides practical tips that are easy to implement.'
  }
];

const Testimonials = () => {
  const [testimonials, setTestimonials] = useState(initialTestimonials);
  const slider = useRef(null);
  let tx = 0;

  const slideForward = () => {
    if (tx > -75) {  // Adjusted for more items
      tx -= 25;
    } else {
      tx = 0; // Reset to the start
    }
    slider.current.style.transform = `translateX(${tx}%)`;
  };

  const slideBackward = () => {
    if (tx < 0) {
      tx += 25;
    } else {
      tx = -75; // Go to the end if at the start
    }
    slider.current.style.transform = `translateX(${tx}%)`;
  };

  return (
    <div className="testimonials-container">
      <div className='Testimonials'>
        <img src={next_icon} className='next-btn' onClick={slideForward} alt="Next" />
        <img src={back_icon} className='back-btn' onClick={slideBackward} alt="Back" />
        <div className='slider'>
          <ul ref={slider}>
            {testimonials.map((testimonial) => (
              <li key={testimonial.id}>
                <div className="slide">
                  <div className="user-info">
                    <img src={testimonial.img} alt={testimonial.name} />
                    <div>
                      <h3>{testimonial.name}</h3>
                      <span>{testimonial.role}</span>
                    </div>
                  </div>
                  <p>{testimonial.text}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;

/*old code
import React, { useRef } from 'react'
import './Testimonials.css'
import next_icon from './../../images/next-icon.png'
import back_icon from './../../images/back-icon.png'
import user_1 from './../../images/user-1.png'
import user_2 from './../../images/user-2.png'
import user_3 from './../../images/user-3.png'
import user_4 from './../../images/user-4.png'

const Testimonials = () => {
    const slider = useRef();
    let tx = 0;
    const slideForward = () =>{
        if(tx > -50){
            tx -= 25;
        }
        slider.current.style.transform = `translateX(${tx}%)`
    }
    const slideBackward= () =>{
        if(tx < 0){
            tx += 25;
        }
        slider.current.style.transform = `translateX(${tx}%)`
    }
  return (
    <div className="testimonials-container">
        <div className='Testimonials'>
                <img src = {next_icon} className ='next-btn' onClick={slideForward}/>
                <img src = {back_icon} className ='back-btn' onClick={slideBackward}/>
                <div className='slider'>
                    <ul ref = {slider}>
                        <li>
                            <div className="slide">
                                <div className="user-info">
                                    <img src = {user_1}/>
                                    <div>
                                        <h3>Johanna S.</h3>
                                        <span>Financial Analyst</span>
                                    </div>
                                </div>
                                <p>
                                As a financial analyst, staying updated with the latest financial trends
                                and concepts is crucial. AMEXLearn has become my go-to resource for quick,
                                reliable, and insightful information. The interactive lessons and 
                                real-world examples make complex topics easy to understand. It's like
                                having a financial library in my pocket!
                                </p>
                            </div>
                        </li>
                        <li>
                            <div className="slide">
                                <div className="user-info">
                                    <img src = {user_2}/>
                                    <div>
                                        <h3>David M.</h3>
                                        <span>Small Business Owner</span>
                                    </div>
                                </div>
                                <p>
                                Running a small business means wearing many hats, and understanding
                                finance is one of the most challenging aspects. AMEXLearn has been a
                                game-changer for me. The app breaks down financial concepts into 
                                manageable pieces and offers practical advice that I can apply to my 
                                business immediately. It has given me the confidence to make better 
                                financial decisions.
                                </p>
                            </div>
                        </li>
                        <li>
                            <div className="slide">
                                <div className="user-info">
                                    <img src = {user_3}/>
                                    <div>
                                        <h3>Emily R.</h3>
                                        <span>College Student</span>
                                    </div>
                                </div>
                                <p>
                                As a finance major, I was looking for a tool to supplement my studies, and
                                AMEXLearn exceeded my expectations. The app's detailed modules and quizzes 
                                have helped reinforce what I learn in class. Plus, the real-life case
                                studies are invaluable for understanding how financial principles work in 
                                practice. I highly recommend it to any student looking to excel in finance.
                                </p>
                            </div>
                        </li>
                        <li>
                            <div className="slide">
                                <div className="user-info">
                                    <img src = {user_4}/>
                                    <div>
                                        <h3>Mike T.</h3>
                                        <span>Retired Engineer</span>
                                    </div>
                                </div>
                                <p>
                                Even in retirement, managing finances is important. AMEXLearn has been a 
                                fantastic resource for learning about investments, retirement planning, and
                                managing expenses. The app is straightforward and provides practical tips 
                                that are easy to implement. It's never too late to improve your financial
                                literacy, and amexLearn makes it possible.
                                </p>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
    </div>
    
  )
}

export default Testimonials*/