import React from 'react'
import './intro.css'
import bg from '../../assets/profile.png'

const Intro = () => {
  return (
    <section id='intro'>
        <div className='introContent'>
            <span className='hello'>Hey, </span>
            <span className='introText'>I'm <span className='introName'>Ha My</span><br/>Website Developer</span>
            <p className='introPara'> I'm an aspiring Media Informatics student at the University of Regensburg. <br/>Join me in creating cool things, one line of code at a time!</p>
        </div>
        <img src={bg} alt='Profile'className='bg'/>
    </section>
  )
} 

export default Intro
