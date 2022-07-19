import amazonClone from './components/Project/amazon.png'
import netflixClone from './components/Project/netflix.png'
import SchoolIcon from '@mui/icons-material/School';
import WorkIcon from '@mui/icons-material/Work';

export const projectInfo = [
    {
        id:1,
        image: amazonClone,
        title:"amazon-clone",
        desc:"e-commerce clone with payment functionality, add product to cart, login and create new account using ReactJs, stripeAPI",
        link: 'https://clone-41e93.web.app/'
    },
    {
        id:2,
        image: netflixClone,
        title:"Netflix-clone-UI",
        desc:"e-commerce clone with payment functionality, add product to cart, login and create new account using ReactJs, stripeAPI",
        link: 'https://netflix-clone-ea10f.web.app/'
    },
    {
        id:3,
        image: amazonClone,
        title:"amazon-clone",
        desc:"e-commerce clone with payment functionality, add product to cart, login and create new account using ReactJs, stripeAPI",
        link: 'https://netflix-clone-ea10f.web.app/'
    },
    {
        id:4,
        image: amazonClone,
        title:"amazon-clone",
        desc:"e-commerce clone with payment functionality, add product to cart, login and create new account using ReactJs, stripeAPI",
        link: 'https://netflix-clone-ea10f.web.app/'
    }
];


export const ResumeInfo = [
    {
      id: 1,
      category: "education",
      year: "2016 - 2019",
      college: "PES Polytechnic Bangalore",
      title: "Computer science",
      logo: <SchoolIcon />
    },
    {
      id: 2,
      category: "education",
      year: "2019 - 2022",
      college: "Rajareswari college of Engineering, Bangalore",
      title: "Computer science",
      logo: <SchoolIcon />
    },
    // {
    //     id:3,
    //     category: "skills",
    //     skills : { 
    //         skill1: "Programming with Javascript", 
    //         skill2: "Front-end Web Development: HTML, CSS, REACT_JS, Redux",
    //         skill3: "API development: API design, integrate and development using API led connectivity",
    //         skill4: "Salesforce and AWS",
    //         skill5: "Versioning – Github, Bitbucket"},
    // },
    {
        id:3,
        category: "skills",
        skill: "Programming with Javascript. Front-end Web Development: HTML, CSS, REACT_JS, Redux"
    },
    {
        id:4,
        category: "skills",
        skill: "API development: API design, integrate and development using API led connectivity"
    },
    {
        id:5,
        category: "skills",
        skill: "Salesforce and AWS"
    },
    {
        id:6,
        category: "skills",
        skill: "Versioning – Github, Bitbucket"
    },
    {
      id: 7,
      category: "experience",
      year: "Sep,2021 - present",
      company: "Apisero global integreted pvt ltd",
      designation: "Mulesoft Developer",
      logo: <WorkIcon />
    }
  ]