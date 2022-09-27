import amazonClone from './components/Project/amazon.png'
import netflixClone from './components/Project/netflix.png'
import spotify from './components/Project/spotify.png'
import Notes14 from './components/Project/to-do.jpg'
import Signal14 from './components/Project/Signal14.jpg'

import SchoolIcon from '@mui/icons-material/School';
import WorkIcon from '@mui/icons-material/Work';

export const projectInfoPart1 = [
    {
        id:1,
        image: amazonClone,
        title:"amazon-clone",
        desc:"e-commerce clone with payment functionality, add product to cart, login and create new account using ReactJs, stripeAPI",
        link: 'https://clone-41e93.web.app/',
        gitLink: 'https://github.com/iamijas14/amazon-clone'
    },
    {
        id:2,
        image: netflixClone,
        title:"video streaming wedsite(Netflix-clone-UI)",
        desc:"UI of video streaming wedsite",
        link: 'https://netflix-clone-ea10f.web.app/',
        gitLink: 'https://github.com/iamijas14/amazon-clone'
    },
    {
        id:3,
        image: spotify,
        title:"music-player(spotify-clone version)",
        desc:"Music player website with UI, create playlist and playlist view and list of songs functionality",
        link: 'https://netflix-clone-ea10f.web.app/',
        gitLink: 'https://github.com/iamijas14/spotify-clone'
    },
    {
        id:4,
        image: Notes14,
        title:"Notes14",
        desc:"A to-do list mobile application using React Native",
        // link: '',
        gitLink: 'https://github.com/iamijas14/to-do'
    }
];

export const projectInfoPart2 = [
    {
        id:5,
        image: Signal14,
        title:"Signal14",
        desc:"Chat application using React Native with realtime chat, create chate, login and register user",
        // link: '',
        gitLink: 'https://github.com/iamijas14/signal-clone'
    },
];


export const ResumeInfo = [

    //--------------------Education--------------------
    {
      id: 2,
      category: "education",
      year: "2019 - 2022",
      college: "Rajareswari college of Engineering, Bangalore",
      title: "Computer science",
      logo: <SchoolIcon />
    },
    {
        id: 1,
        category: "education",
        year: "2016 - 2019",
        college: "PES Polytechnic Bangalore",
        title: "Computer science",
        logo: <SchoolIcon />
      },

      //--------------------Skills--------------------
    {
        id:3,
        category: "skills",
        skill: "Programming with Javascript."
    },
    {
        id:4,
        category: "skills",
        skill: "Front-end Web Development: HTML, CSS, REACT_JS, Redux"
    },
    {
        id:5,
        category: "skills",
        skill: "Mobile Application Development: React Native"
    },
    {
        id:6,
        category: "skills",
        skill: "API development: API design, integrate and development using API led connectivity"
    },
    {
        id:7,
        category: "skills",
        skill: "Versioning – Github, Bitbucket"
    },

    //--------------------Work--------------------
    {
      id: 8,
      category: "experience",
      year: "Sep,2021 - present",
      company: "Apisero global integreted pvt ltd",
      designation: "Mulesoft Developer",
      logo: <WorkIcon />
    }
  ]