import { v4 as uuidv4 } from 'uuid';

// HEAD DATA
export const headData = {
  title: 'Adrian | Full-Stack Developer',
  lang: 'en',
  description: 'Full-Stack developer adrian vide paris',
};

// HERO DATA
export const heroData = {
  title: 'Full-Stack Developer',
  name: 'Adrian',
  subtitle: 'Digitally versatile ',
  cta: 'Scroll down to know more',
};

// ABOUT DATA
export const aboutData = {
  img: 'me.jpg',
  paragraphOne: 'Hi! I am Adrian Vide Paris, Full-Stack Developer.',
  paragraphTwo:
    'From my past roles I acquired some expertise in SEO good practices and a taste for a classy/minimalistic design.',
  paragraphThree:
    'With a strong background in a range of digital skills and marketing, I can manage the development process through in its entirety.',
  paragraphFour: 'Making things work is what I enjoy the most.',
  resume: 'https://drive.google.com/file/d/1Aqkv8qXSliKcm2tvsnLOR1w9CR-jOnh1/view?usp=sharing', // if no resume, the button will not show up
};

// PROJECTS DATA
export const projectsData = [
  {
    id: uuidv4(),
    img: 'palcony.jpg',
    title: 'Palcony',
    info:
      'As part of the #stayAtHome movement beacause of the Covid 19, Palcony aims to act as a hub for anyone that wants to share any activity with their neighborhood.',
    info2:
      'Publish any kind of event that will take place in your balcony. It will be geo positioned, and visible to your neighbours to join, chat and leave feedback.',
    techs: ['NodeJS', 'ExpressJS', 'MongoDB', 'Leaflet', 'Bootstrap', 'Handlebars', 'Git'],
    url: 'https://palcony.com',
    repo: 'https://github.com/adrianVide/module-2-ironhack', // if no repo, the button will not show up
  },
  {
    id: uuidv4(),
    img: 'masksrus.jpg',
    title: 'masksRus',
    info:
      'Hard times lead to great oportunities, and this one is no less. Taking advatage (not really, it is a fake shop) of the situational? world pandemic.',
    info2:
      'ReactJS based eCommerce where you can register, login, add to cart or wishlist and explore the never-ending universe of the masks. (mobile)',
    techs: ['ReactJS', 'NodeJS', 'ExpressJS', 'MongoDB', 'Bootstrap', 'Git'],
    url: 'https://masks-r-us.firebaseapp.com/',
    repo: 'https://github.com/unai6/Masks-r-us-client-side', // if no repo, the button will not show up
  },
  {
    id: uuidv4(),
    img: 'todo.jpg',
    title: 'Todo list',
    info: 'Just in case you are as forgetful as I am (or half) I created this todo list.',
    info2:
      'Created with ReactJS and Hooks, and connected to a MongoDB database through NodeJS, with some Google-feel styling. Plus, it grabs an image related to the title of each task from an external API.',
    techs: ['ReactJS', 'NodeJS', 'ExpressJS', 'MongoDB', '3rd Party APIs', 'Materialize', 'Git'],
    url: 'https://todo.adrianvp.com',
    repo: 'https://github.com/adrianVide/challenge-todo-app', // if no repo, the button will not show up
  },
  {
    id: uuidv4(),
    img: 'sun.jpg',
    title: 'U there, sun?',
    info:
      'No more disapointment when you arrive to the beach and it is raining... Just in case you could not notice in advance this tool will help you.',
    info2:
      'A simple yet useful weather checker through a 3rd party API that let you search for any city in the world and grab its picture from another API.',
    techs: ['HTML', 'CSS', 'JavaScript', '3rd party API', 'Git'],
    url: 'https://sun.adrianvp.com',
    repo: 'https://github.com/adrianVide/project-IronHack-Module-1', // if no repo, the button will not show up
  },
  {
    id: uuidv4(),
    img: 'githubusers2.jpg',
    title: 'Github user search and display',
    info:
      'A tool that searches on Github API for users and displays their repositories. If the user does not exist/has no repos, returns different messages. The plain slider was added for aesthetics :)',
    info2: 'All under the surveillance of Node and Express.',
    techs: ['NodeJS', 'ExpressJS', '3rd Party APIs', 'Git'],
    url: 'https://githubusers.adrianvp.com',
    repo: 'https://github.com/adrianVide/jfdtt', // if no repo, the button will not show up
  },
  {
    id: uuidv4(),
    img: 'oompaloompa.JPG',
    title: 'Oompa Loompa workers',
    info:
      'A tool to help the Chocolate Factory HR team to list and filter their Oompa Loompa workers. Storing the information in cache for 24hrs to avoid too many requests to the API. Endless scroll for smoother usability.',
    info2: 'All working on the front end with ReactJS.',
    techs: ['ReactJS', '3rd Party APIs', 'Git', 'Endless Scroll', 'Custom Cache usage'],
    url: 'https://oompaloompa.adrianvp.com',
    repo: 'https://github.com/adrianVide/napp', // if no repo, the button will not show up
  },
];

// CONTACT DATA
export const contactData = {
  cta: 'Sounds good to you?',
  btn: 'email',
  email: 'hi@adrianvp.com',
  phone: 'tel:+34 686478847',
  showPhone: '+34 686478847',
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
