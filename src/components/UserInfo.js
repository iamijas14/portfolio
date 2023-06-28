import './UserInfo.css'
import { useTypewriter, Cursor } from 'react-simple-typewriter'
import { useSelector } from 'react-redux'
import banner from '../images/banner.svg'

const UserInfo = () => {

    const name = useSelector(state => state.reducer)

    const { text } = useTypewriter({
        words: ['Frontend Developer', 'React Native Developer'],
        loop: 0,
        typeSpeed: 70,
        deleteSpeed: 50,
        delaySpeed: 1000
    })

    return (
        <div className='user'>
            <div className='user_left'>
                <p>WELCOME TO MY PORTFOLIO</p>
                <h2 className='userDetails_name'>Hi, I am {name?.userName}</h2>
                <h2 className='userDetails_domain'>{text}<Cursor /> </h2>
                <p className='userDetails_description'>
                    Passionate about technology and actively seeking roles as a Frontend Developer and React Native Developer.
                    I'm a tech enthusiast, specializing in Frontend and mobile application development.
                    Proficient in JavaScript, HTML, CSS, ReactJS, Redux and React Native.
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
