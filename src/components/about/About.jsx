import React from 'react'
import {FaAward} from 'react-icons/fa'
import {FaUsers} from 'react-icons/fa'
import {BsFolderSymlinkFill} from 'react-icons/bs'
import Thorin from '../../assets/Thorin.JPG'
import './about.css'

const About = () => {
  return (
    <section id='about'>
      <h5>Get To Know</h5>
      <h2>About Me</h2>
      <div className='container aboout__container'>
        <div className='about__me-image'>
        <img src={Thorin} alt="About Image" /> {/*Need to find a photo to add here*/}
        </div>
        <div className='about__content'>
          <div className="about__cards">
            <article className='about__card'>
              <FaAward className='about__icon'/>
              <h5>Experience</h5>
              <small>experience number</small>
            </article>
            <article className='about__card'>
              <FaUsers className='about__icon'/>
              <h5>Clients</h5>
              <small>client numbers wordlwide</small>
            </article>
            <article className='about__card'>
              <BsFolderSymlinkFill className='about__icon'/>
              <h5>Projects</h5>
              <small>number of projects completed</small>
            </article>
          </div>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio quo maiores modi consequatur eaque, ullam laudantium minus libero minima ea rerum doloribus totam. Voluptatum fugit repellendus unde odio. Beatae, eligendi.
          </p>

          <a href="#contact" className='btn btn-primary'>Let's Talk</a>
        </div>
      </div>
    </section>
  )
}

export default About
