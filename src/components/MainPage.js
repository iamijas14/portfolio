import './MainPage.css'
import UserInfo from './UserInfo'
import Skills from './Skill/Skills'
import Project from './Projects/Projects'
import Resume from './Resume/resume.js'
import Contact from './Contact/Contact'


const MainPage = () => {
  return (
    <div className='mainPage'>
      <UserInfo />
      <Skills />
      <Project />
      <Resume />
      <Contact />
    </div>
  )
}

export default MainPage;


