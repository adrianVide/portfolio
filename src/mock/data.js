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
  paragraphOne:
    'I like creating visual communications to convey messages in an effective and aesthetically pleasing manner while keeping in mind marketing best practices of the digital world.',
  paragraphTwo:
    'With a strong background in a range of digital skills and marketing, I can manage the development process through in its entirety.',
  paragraphThree: 'Making things work is what I enjoy the most. Smoothly, hassle free.',
  resume: '/static/FULLSTACKWEB_AdrianVideParis_ENG052020.pdf', // if no resume, the button will not show up
};

// PROJECTS DATA
export const projectsData = [
  {
    id: uuidv4(),
    img: 'palcony.jpg',
    title: 'Palcony',
    info: 'As part of the #stayAtHome movement beacause of the Covid 19, Palcony aims to act as a hub for anyone that wants to share any activity with their neighborhood.',
    info2: 'Publish any kind of event that will take place in your balcony. It will be geo positioned, and visible to your neighbours to join, chat and leave feedback.',
    techs: ['NodeJS', 'ExpressJS', 'MongoDB', 'Leaflet','Bootstrap', 'Handlebars', 'Git'],
    url: 'https://palcony.com',
    repo: 'https://github.com/adrianVide/module-2-ironhack', // if no repo, the button will not show up
  },
  {
    id: uuidv4(),
    img: 'masksrus.jpg',
    title: 'masksRus',
    info: 'Hard times lead to great oportunities, and this one is no less. Taking advatage (not really, it is a fake shop) of the situational? world pandemic.',
    info2: 'ReactJS based eCommerce where you can register, login, add to cart or wishlist and explore the never-ending universe of the masks. (mobile)',
    techs: ['ReactJS', 'NodeJS', 'ExpressJS', 'MongoDB','Bootstrap', 'Git'],
    url: 'https://masks-r-us.firebaseapp.com/',
    repo: 'https://github.com/unai6/Masks-r-us-client-side', // if no repo, the button will not show up
  },
  {
    id: uuidv4(),
    img: 'todo.jpg',
    title: 'Todo list',
    info: 'Just in case you are as forgetful as I am (or half) I created this todo list.',
    info2: 'Created with ReactJS and Hooks, and connected to a MongoDB databes through NodeJS, with some Google-feel styling.',
    techs: ['ReactJS', 'NodeJS', 'ExpressJS', 'MongoDB', '3rd Party APIs', 'Materialize', 'Git'],
    url: 'https://todo.adrianvp.com',
    repo: 'https://github.com/adrianVide/challenge-todo-app', // if no repo, the button will not show up
  },
  {
    id: uuidv4(),
    img: 'sun.jpg',
    title: 'U there, sun?',
    info: 'No more disapointment when you arrive to the beach and it is raining... Just in case you could not notice in advance this tool will help you.',
    info2: 'A simple yet useful weather checker through a 3rd party API that let you search for any city in the world and grab its picture from another API.',
    techs: ['HTML', 'CSS', 'JavaScript', '3rd party API', 'Git'],
    url: 'https://sun.adrianvp.com',
    repo: 'https://github.com/adrianVide/project-IronHack-Module-1', // if no repo, the button will not show up
  },
  {
    id: uuidv4(),
    img: 'githubusers.jpg',
    title: 'Github user search and display',
    info: '',
    info2: '',
    techs: ['NodeJS', 'ExpressJS', '3rd Party APIs', 'Git'],
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
      name: 'linkedin',
      url: 'https://www.linkedin.com/in/adrianvp/',
    },
    {
      id: uuidv4(),
      name: 'github',
      url: 'https://github.com/adrianVide/',
    },
  ],
};

// Github start/fork buttons
export const githubButtons = {
  isEnabled: false, // set to false to disable the GitHub stars/fork buttons
};
