import React from 'react'
import './exp.css'
import skills from '../../data/skills.json'

const Exp = () => {
  return (
    <section id="experience">
      <h2 className='expTitle'>Experience</h2>
      <div className='expSkills'>
        {skills.map((skill, id) => {
          return (
            <div key={id}>
                <img className='expImg' src={require(`../../assets/${skill.imageSrc}`)} alt={skill.title} />
              <p>{skill.title}</p>
            </div>
          );
        })}
      </div>
    </section>
  )
}

export default Exp
