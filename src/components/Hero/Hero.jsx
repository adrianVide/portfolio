import React, { useContext, useState, useEffect } from 'react';
import { Container } from 'react-bootstrap';
import Fade from 'react-reveal/Fade';
// import PortfolioContext from '../../context/context';
import { heroData } from '../../mock/data.js';

// import ParticlesBg from 'particles-bg';

import Particles from 'react-particles-js';

const Header = () => {
  // const { hero } = useContext(PortfolioContext);
  const { title, name, subtitle, cta } = heroData;

  const [isDesktop, setIsDesktop] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    if (window.innerWidth > 769) {
      setIsDesktop(true);
      setIsMobile(false);
    } else {
      setIsMobile(true);
      setIsDesktop(false);
    }
  }, []);

  return (
    <section id="hero" className="jumbotron">
      <Container>
        {/* <div className="particle-canvas"></div> */}

        <Fade left={isDesktop} bottom={isMobile} duration={200} delay={1000} distance="30px">
          <h1 className="hero-title">
            {title || 'Hi, my name is'}{' '}
            <span className="text-color-main">{name || 'Your Name'}</span>
            <br />
            {subtitle || "I'm the Unknown Developer."}
          </h1>
        </Fade>
        <Fade left={isDesktop} bottom={isMobile} duration={1000} delay={1000} distance="30px">
          <p className="hero-cta zindex">
            <a className="cta-btn cta-btn--hero " href="#about">
              {cta || 'Know more'}
            </a>
          </p>
        </Fade>
        <div>
          <Particles className='particle-canvas'
            params={{
              particles: {
                line_linked: {
                  shadow: {
                    enable: true,
                    color: '#03b897',
                    blur: 1,
                  },
                },
              },
            }}
            style={{
              width: '100%',
              // backgroundImage: `url(${logo})`
            }}
          />
        </div>
      </Container>
    </section>
  );
};

export default Header;
