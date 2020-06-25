import { v4 as uuidv4 } from 'uuid';

// HEAD DATA
export const headData = {
  title: 'Adrian | Full-Stack Developer',
  lang: 'en', 
  description: 'Hey, you found me!', 
};

// HERO DATA
export const heroData = {
  title: 'Full-Stack Developer',
  name: 'Adrian',
  subtitle: 'Digitally versatile ',
  cta: '',
};

// ABOUT DATA
export const aboutData = {
  img: 'profile.jpg',
  paragraphOne: 'I like creating visual communications to convey messages in an effective and aesthetically pleasing manner while keeping in mind marketing best practices of the digital world.',
  paragraphTwo: 'With a strong background in a range of digital skills and marketing, I can manage the development process through in its entirety.',
  paragraphThree: 'Making things work is what I enjoy the most. Smoothly, hassle free.',
  resume: '/static/FULLSTACKWEB_AdrianVideParis_ENG052020.pdf', // if no resume, the button will not show up
};

// PROJECTS DATA
export const projectsData = [
  {
    id: uuidv4(),
    img: 'palcony.jpg',
    title: 'Palcony',
    info: 'Info 1',
    info2: 'Info 2',
    url: 'https://palcony.com',
    repo: 'https://github.com/adrianVide/module-2-ironhack', // if no repo, the button will not show up
  },
  {
    id: uuidv4(),
    img: 'sun.jpg',
    title: 'U there, sun?',
    info: '',
    info2: '',
    url: 'https://sun.adrianvp.com',
    repo: 'https://github.com/adrianVide/project-IronHack-Module-1', // if no repo, the button will not show up
  },
  {
    id: uuidv4(),
    img: 'project.jpg',
    title: 'Github user search and display',
    info: '',
    info2: '',
    url: 'https://githubusers.adrianvp.com',
    repo: 'https://github.com/adrianVide/jfdtt', // if no repo, the button will not show up
  },
];

// CONTACT DATA
export const contactData = {
  cta: '',
  btn: '',
  email: '',
};

// FOOTER DATA
export const footerData = {
  networks: [
    {
      id: uuidv4(),
      name: 'twitter',
      url: '',
    },
    {
      id: uuidv4(),
      name: 'codepen',
      url: '',
    },
    {
      id: uuidv4(),
      name: 'linkedin',
      url: '',
    },
    {
      id: uuidv4(),
      name: 'github',
      url: '',
    },
  ],
};

// Github start/fork buttons
export const githubButtons = {
  isEnabled: true, // set to false to disable the GitHub stars/fork buttons
};
