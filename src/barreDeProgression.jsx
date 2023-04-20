import React from 'react';
import './skillListe.css';

const SkillList = () => {
  const skills_web = [
    { name: 'HTML', level: 900},
    { name: 'CSS', level: 800},
    { name: 'ReactJS', level: 780},
    { name: 'PHP', level: 800 },
  ];

  const skills_soft = [
    { name: 'Python', level: 500 },
    { name: 'VBA', level: 640 },
    { name: 'C#', level: 200 },
  ];

  return (
    <div className='flex-wrap sm:ml-5 sm:mr-64'>
      <div className='flex-2'>
        {skills_web.map((skill_web) => (
          <div className='skill' key={skill_web.name}>
            <h3 className='skill-name'>{skill_web.name}</h3>
            <div className='skill-bar-web' style={{ width: `${skill_web.level}%` }}>
              <span className='skill-progress'>{skill_web.level/10}%</span>
            </div>
          </div>
        ))}
      </div>
      <div className='flex-2'>
        {skills_soft.map((skill_soft) => (
          <div className='skill' key={skill_soft.name}>
            <h3 className='skill-name'>{skill_soft.name}</h3>
            <div className='skill-bar' style={{ width: `${skill_soft.level}%` }}>
              <span className='skill-progress'>{skill_soft.level/10}%</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SkillList;
