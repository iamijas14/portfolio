import './UserInfo.css'
import { useTypewriter, Cursor } from 'react-simple-typewriter'
import { useSelector } from 'react-redux'
import banner from '../images/banner.svg'

const UserInfo = () => {

    const name = useSelector(state => state.reducer)

    const {text} = useTypewriter({
        words: ['Web developer', 'Mulesoft Developer', 'Reactjs Developer'],
        loop: 0, 
        typeSpeed: 70,
        deleteSpeed: 50,
        delaySpeed: 1000
        })

  return (
    <div className='user'>
        <div className='user_left'>
            <p>WELCOME TO MY PORTFOLIO</p>
            <h2 className='userDetails_name'>Hi, I'm {name?.userName}</h2>
            <h2 className='userDetails_domain'> {text}<Cursor /> </h2>
            <p className='userDetails_description'>
                I'm a web developer. I code and I learn, 
                practically every day, experimenting with HTML, CSS, JavaScript and reactjs.
                Create projects alongside to understand the concepts well and also implement all the learnings
            </p>
        </div>

        <div className='user_right'>
            <img 
            className='user_banner'
            src={banner} 
            alt='banner' />
        </div>
    </div>
  )
}

export default UserInfo;
