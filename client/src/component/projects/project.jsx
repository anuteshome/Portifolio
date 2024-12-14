import React from 'react'
import './project.css'
import Delivery from '../../assets/1.png'
import apple from '../../assets/3.png'
import upcome from '../../assets/6.png'
import ak from '../../assets/ak.png'
import sabroso from '../../assets/sabroso.png'
import Book from '../../assets/anu.png'




function Project() {
  return (
    <div id='project'>
        <h1 className='pro_title' style={{
           fontFamily: 'Times New Roman'
        }}>PROJECTS</h1>
 <div className='card'>
    <div ><a href="https://dev-anudelivery.pantheonsite.io/ " target='blank'><img className='p_img' src={Delivery} alt="" /></a></div>
    <div> <a href="https://sabrosoo.netlify.app/" target='blank'><img className='p_img' src={sabroso} alt="" /></a></div>
    <div><a href="https://anubook.netlify.app/#home" target='blank'><img className='p_img' src={Book} alt="" /></a></div>
 </div><br />
 <div className='card'>
    <div ><a href="https://aksitess.netlify.app/#" target='blank'><img className='p_img' src={ak} alt="" /></a></div>
    <div><a href="https://anuapple.netlify.app/#" target='blank'><img className='p_img' src={apple} alt="" /></a></div>
    <div><img className='p_img' src={upcome} alt="" /></div>
 </div>
    </div>

  )
}

export default Project