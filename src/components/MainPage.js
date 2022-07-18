import './MainPage.css'
import UserInfo from './UserInfo'
import Skills from './Skills'
import Project from './Projects'


const MainPage = () => {
  return (
    <div className='mainPage'>
        <UserInfo />
        <Skills />
        <Project />
    </div>
  )
}

export default MainPage;


