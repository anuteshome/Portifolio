import React from 'react'
import './About.css'
import Skill from '../../assets/Skill.png'
import skill2 from '../../assets/skill5.png'


function About() {
  return (
    <div className='About-grid' id='about'>
        <div className='me'>
<h1 className='me_title'style={{
     fontFamily: 'Times New Roman',
}}>ABOUT ME</h1><br /><br />
<p className='p_me' style={{
     fontFamily: 'Arial, sans-serif',
}}>
👨‍💻 I'm a passionate Frontend Developer with a strong focus on creating seamless and visually appealing web applications. 
After completing an intensive 12-month Full-Stack Software Engineering program at ALX,
 I honed my skills in building responsive, user-friendly interfaces and mastering key technologies such as HTML, 
 CSS, JavaScript, and React. I'm dedicated to writing clean, efficient code and collaborating to deliver high-quality digital experiences. 
My goal is to contribute to innovative projects that enhance user interactions and make the web a more engaging place.
</p>
    <p className='p_me'style={{
     fontFamily: 'Arial, sans-serif',
}} >Github:anuteshome</p>
    <p className='p_me'style={{
     fontFamily: 'Arial, sans-serif',
}}>Linkedin:Ananya Teshome</p>
        </div>
        <div className='skill'>
{/* <h1 className='Skills'>Skills</h1> */}
<img src={Skill} alt="" />
<img style={{
    marginLeft:'7rem',
    marginTop:'-5rem'
}} src={skill2} alt="" />
        </div>
    </div>
  )
}

export default About