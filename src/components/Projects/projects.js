import React from 'react';
import './projects.css';
import projects from '../../data/projects.json'

const Projects = () => {
  return (
    <section id='projects'>
        <h2 className='projectsTitle'>Projects</h2>
        <span className='projectsDesc'>Here are some highlighted projects I completed during my university studies</span>
        <div className='projectCards'>
          {projects.map((project, id) => {
          return (
            <div className='projectCard' key={id}>
                <img className='projectImg' src={require(`../../assets/${project.imageSrc}`)} alt={project.title} />
                <h3 className='projectCardTitle'>{project.title}</h3>
                <p className='projectCardDesc'>{project.description}</p>
                <ul className='projectSkills'>
                    {project.skills.map((skill, id) => {
                        return (
                            <li key={id} className='projectSkill'>
                                {skill}
                            </li>
                        );
                    })}
                </ul>
                <div className='projectLinkContainer'>
                    <a className='projectLink' href={project.source}>Source Code</a>
                </div>
            </div>
        )
        })}
      </div>
    </section>
  )
}

export default Projects
