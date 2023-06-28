import amazonClone from './components/Projects/amazon.png'
import netflixClone from './components/Projects/netflix.png'
import spotify from './components/Projects/spotify.png'
import Notes14 from './components/Projects/to-do.jpg'
import Signal14 from './components/Projects/Signal14.jpg'

import SchoolIcon from '@mui/icons-material/School';
import WorkIcon from '@mui/icons-material/Work';

export const projectInfoPart1 = [
    {
        id: 1,
        image: amazonClone,
        title: "Amazon eCommerce clone",
        desc: "e-commerce clone with payment functionality, add product to cart, login and create new account using ReactJs, stripeAPI",
        link: 'https://clone-41e93.web.app/',
        gitLink: 'https://github.com/iamijas14/amazon-clone'
    },
    {
        id: 2,
        image: netflixClone,
        title: "Video streaming wedsite (Netflix UI)",
        desc: "UI of video streaming wedsite",
        link: 'https://netflix-clone-ea10f.web.app/',
        gitLink: ''
    },
    {
        id: 3,
        image: spotify,
        title: "Music player (spotify clone)",
        desc: "Music player website with UI, create playlist and playlist view and list of songs functionality",
        link: '',
        gitLink: 'https://github.com/iamijas14/spotify-clone'
    },
    {
        id: 4,
        image: Notes14,
        title: "Notes14",
        desc: "A to-do list mobile application using React Native",
        link: '',
        gitLink: 'https://github.com/iamijas14/to-do'
    }
];

export const projectInfoPart2 = [
    {
        id: 5,
        image: Signal14,
        title: "Signal14",
        desc: "Chat application using React Native with realtime chat, create chate, login and register user",
        link: '',
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
        id: 3,
        category: "skills",
        skill: "Programming with Javascript."
    },
    {
        id: 4,
        category: "skills",
        skill: "Frontend Web Development: HTML, CSS, REACT, Redux"
    },
    {
        id: 5,
        category: "skills",
        skill: "Mobile Application Development: React Native"
    },
    {
        id: 6,
        category: "skills",
        skill: "API development: API design, integrate and development using Mulesoft"
    },
    {
        id: 7,
        category: "skills",
        skill: "Versioning – Github, Bitbucket"
    },
    {
        id: 8,
        category: "skills",
        skill: "Cloud integration"
    },

    //--------------------Work--------------------
    {
        id: 9,
        category: "experience",
        year: "Sep,2021 - present",
        company: "Apisero global integreted pvt ltd",
        designation: "Mulesoft Developer",
        logo: <WorkIcon />
    }
]