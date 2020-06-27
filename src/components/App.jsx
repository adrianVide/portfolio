import React, { useState, useEffect } from 'react';
import Hero from './Hero/Hero';
import About from './About/About';
import Projects from './Projects/Projects';
import Contact from './Contact/Contact';
import Footer from './Footer/Footer';
import Sticky from './Sticky/Sticky';
import './styles.css';

import { PortfolioProvider } from '../context/context';

import { heroData, aboutData, projectsData, contactData, footerData } from '../mock/data';
import { CallButton } from './CallButton/CallButton';

function App() {
  const [hero, setHero] = useState({});
  const [about, setAbout] = useState({});
  const [projects, setProjects] = useState([]);
  const [contact, setContact] = useState({});
  const [footer, setFooter] = useState({});

  useEffect(() => {
    setHero({ ...heroData });
    setAbout({ ...aboutData });
    setProjects([...projectsData]);
    setContact({ ...contactData });
    setFooter({ ...footerData });
  }, []);

  const sides = {
    // top: 0, // Sticks when it scrolls past the top edge
    bottom: 0, // Sticks when it scrolls past the bottom edge
    // left: 10, // Sticks 10px from the left edge
    // right: -20, // Sticks 20px past the right edge (useful for content that should stick only when it's fully out of the frame)
  };
  

  // const divStyle = { position: fixed; top: 0; left: 0; right: 0; };

  return (
    <PortfolioProvider value={{ hero, about, projects, contact, footer }}>
      <Hero />
      <About />
      <Sticky sides={sides}>
        <CallButton/>
      </Sticky>
      <Projects />
      <Contact />
      <Footer />
    </PortfolioProvider>
  );
}

export default App;
