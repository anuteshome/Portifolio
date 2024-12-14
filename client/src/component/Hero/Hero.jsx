import React, { useEffect } from 'react';
// import { Link } from 'react-router-dom';

import './Hero.css'

function Hero() {
  useEffect(() => {
    // Dynamically load the particles.js library and initialize it
    const script = document.createElement('script');
    script.src = 'https://cdn.jsdelivr.net/particles.js/2.0.0/particles.min.js';
    script.onload = () => {
      if (window.particlesJS) {
        window.particlesJS('particles-js', {
          particles: {
            number: {
              value: 80,
              density: {
                enable: true,
                value_area: 800
              }
            },
            color: { value: '#ffffff' },
            shape: {
              type: 'circle',
              stroke: { width: 0, color: '#000000' },
              polygon: { nb_sides: 5 }
            },
            opacity: {
              value: 0.5,
              anim: { enable: false }
            },
            size: {
              value: 3,
              random: true,
              anim: { enable: false }
            },
            line_linked: {
              enable: true,
              distance: 150,
              color: '#ffffff',
              opacity: 0.4,
              width: 1
            },
            move: {
              enable: true,
              speed: 6,
              out_mode: 'out'
            }
          },
          interactivity: {
            detect_on: 'canvas',
            events: {
              onhover: { enable: true, mode: 'grab' },
              onclick: { enable: true, mode: 'push' },
              resize: true
            }
          },
          retina_detect: true
        });
      }
    };
    document.body.appendChild(script);

    return () => {
      // Stop the particles and clean up
      if (window.pJSDom && window.pJSDom.length > 0) {
        window.pJSDom[0].pJS.fn.vendors.destroypJS();
        window.pJSDom = [];
      }
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div style={{ position: 'relative', height: '100vh', overflow: 'hidden' }}>
      {/* Particles container */}
      <div id="particles-js" style={{ position: 'absolute', width: '100%', height: '100%' }}></div>
{/* <div className="logo" style={{
  color:"chocolate",
  fontSize:"2rem",
  textAlign:"left",
  fontFamily: 'Arial, sans-serif',
  marginLeft:'2rem'
}}>
  AT.</div> */}
      {/* Navigation Bar */}
     

      {/* Content */}
      <div
        style={{
          position: 'relative',
          zIndex: 1,
          color: 'white',
          textAlign: 'center',
          fontFamily: 'Arial, sans-serif',
          marginTop: '14rem',
        }}
      >
        <h1 style={{
          fontSize:'3rem'
        }}>
          Hi, I'm <span style={{ color: 'chocolate' }}>Ananya Teshome</span>
        </h1><br />
        <p>
          <span style={{ color: 'chocolate',fontSize:'2rem' }}>Software</span> Engineer
        </p><br />
        <a href="https://drive.google.com/file/d/1jgOEa3d1llinWNuV08Br3VsDztBdzG20/view?usp=sharing" target='blank'><button >My Resume</button></a>
        {/* <button>Contact us</button> */}
      </div>
    </div>
  );
}

export default Hero;
