import React from 'react'
import './about.css'
import UIDesign from '../../assets/ui-design.png'
import WebDevelop from '../../assets/website-design.png'
import AppDevelop from '../../assets/app-design.png'
 

const About = () => {
  return (
    <section id='about'>
        <span className='aboutTitle'>What I do</span>
        <span className='aboutDesc'>I am a passionate developer with experience in creating dynamic websites and mobile applications. My expertise encompasses a mastery of fundamental web technologies, including HTML, CSS, and JavaScript, as well as UI design tools such as Figma and Axure RP.</span>
        <div className='aboutBars'>
            <div className='aboutBar'>
                <img src={UIDesign} alt='UIDesign' className='aboutBarImg' />
                <div className='aboutBarText'>
                    <h2>UI/UX Design</h2>
                    <p>I specialize in designing visually stunning and user-friendly interfaces that guide users through a world of innovation with a keen eye for detail.</p>
                </div>
            </div>

            <div className='aboutBar'>
                <img src={WebDevelop} alt='WebDevelop' className='aboutBarImg' />
                <div className='aboutBarText'>
                    <h2>Website Develop</h2>
                    <p>My expertise lies in transforming ideas into interactive, responsive websites that perform seamlessly across various platforms, from front-end aesthetics to back-end functionality.</p>
                </div>
            </div>

            <div className='aboutBar'>
                <img src={AppDevelop} alt='AppDevelop' className='aboutBarImg' />
                <div className='aboutBarText'>
                    <h2>App Develop</h2>
                    <p>I'm dedicated to creating intuitive, feature-rich mobile applications for Android platforms, leveraging the latest technologies to provide exceptional user experiences.</p>
                </div>
            </div>
        </div>
    </section>
  )
}

export default About
