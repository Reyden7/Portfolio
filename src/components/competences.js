import React from 'react'
import Navbare from '../navbar'
import Dev from '../img/Dev.png'
import SkillList from '../barreDeProgression'
import Tools from '../lesOutils'

export default function competences() {
  return (
    <div>
      <div className=' lg:-mt-36'><Navbare/></div>
       <div className="title">Mes compétences</div>
       <div className="subtitle"></div>
       <div id= "dev" className=' lg:flex lg:mt-24 lg:w-1/2'>
          <img src={Dev} className= "flex-1"></img>
          <SkillList/>
       </div>
       <div>
        <Tools/>
       </div>
        
    </div>
  )
}
