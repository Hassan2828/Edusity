import React from 'react';
import './About.css';
import about_img from '../../assets/about.png';
import play_icon from '../../assets/play-icon.png';

const About = () => {
  return (
    <div className='about'>
      <div className="about-left">
        <img src={about_img} alt="" className='about_img' />
        <img src={play_icon} alt="" className='play_icon' />
      </div>
      <div className="about-right">
        <h3>ABOUT UNIVERSITY</h3>
        <h2>Nurturing Tommorrow's Leaders Today</h2>
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptates excepturi odio s ducimus eaque.</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi debitis sint, dita illo rem amet laudantium recusandae quos eos perspiciatis? Voluptatibus, cumque iusto?</p>
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Hic, ipsum quas minus expedita iure accusantium quaerat autem sequi ullam itaque neque nostrum soluta voluptates fuga! Repellendus dignissimos ut impedit harum.</p>
      </div>
    </div>
  )
}

export default About