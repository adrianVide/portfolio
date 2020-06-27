import React, { useContext } from 'react';
import Fade from 'react-reveal/Fade';
import { Container } from 'react-bootstrap';
// import PortfolioContext from '../../context/context';
import Title from '../Title/Title';
import { contactData } from '../../mock/data'

const Contact = () => {
  // const { contact } = useContext(PortfolioContext);
  const { cta, btn, email, phone, showPhone } = contactData;

  return (
    <section id="contact">
      <Container>
        <Title title="Contact" />
        <Fade bottom duration={1000} delay={800} distance="30px">
          <div className="contact-wrapper">
            <p className="contact-wrapper__text">
              {cta || 'Would you like to work with me? Awesome!'}
            </p>
            <div><a
              target="_blank"
              rel="noopener noreferrer"
              className="cta-btn cta-btn--resume"
              href={email ? `mailto:${email}` : 'https://github.com/cobidev/react-simplefolio'}
            >
              {email}
            </a></div>
            
            <div className='mt-3'><a
              target="_self"
              rel="noopener noreferrer"
              className="cta-btn cta-btn--resume"
              href={phone}
            >
              {showPhone}
            </a></div>
            
          </div>
        </Fade>
      </Container>
    </section>
  );
};

export default Contact;
