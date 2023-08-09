import React from 'react';
import mockup from '../../assets/illustration-mockups.svg' ;
import "./hero.css";

const Hero = () => {
  return (
    <div className='huddle__hero section__padding' id='home'>
      <div className='huddle__hero-image'>
       <img src={mockup} alt="logo" />
      </div>
      <div className='huddle__hero-content'>
        <h1>Build The Community Your Fans Will Love</h1>
        <p>Huddle re-imagines the way we build communities. You have a voice, but so does your audience. Create connections with. your users as you engage in genuine discussion</p>
        <button href="#">Register</button>
      </div>
    </div>
  )
}

export default Hero