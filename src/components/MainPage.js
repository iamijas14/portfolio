import './MainPage.css'
import UserInfo from './UserInfo'
import Skills from './Skills'
import Project from './Projects'
import Resume from './Resume/resume.js'


const MainPage = () => {
  return (
    <div className='mainPage'>
        <UserInfo />
        <Skills />
        <Project />
        <Resume />
    </div>
  )
}

export default MainPage;


