import './Contact.css'
// import "https://kit.fontawesome.com/7f2b20e485.js"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleDoubleRight } from '@fortawesome/free-solid-svg-icons'
import { faTwitter, faFacebookF,faLinkedinIn,faInstagram, faFontAwesome } from '@fortawesome/free-brands-svg-icons'

const Contact = () => {
  return (
    <div className='contact' id='contact'>
        <div className='contact_left'>
            <h3>Connect socially</h3>

            <div className="container">

                    <FontAwesomeIcon className='icon-holder fab' icon= {faAngleDoubleRight} />
  
                <ul className="sm-list">
    
                <li>
                    <a className="link" href="">
                    <div className="icon-holder facebook">
                        <FontAwesomeIcon icon={faFacebookF}/><i className="fa fa-facebook"></i>
                    </div>
                    </a>
                </li>
        
                <li>
                    <a className="link" href="https://www.linkedin.com/in/iamijas14/">
                    <div className="icon-holder linkedin">
                        <FontAwesomeIcon icon={faLinkedinIn}/><i className="fa fa-linkedin"></i>
                    </div>
                    </a>
                </li>
        
                <li>
                    <a className="link" href="https://www.instagram.com/iamijas14/">
                    <div className="icon-holder instagram">
                        <FontAwesomeIcon icon={faInstagram}/><i className="fa fa-instagram"></i>
                    </div>
                    </a>
                </li>
        
                <li>
                    <a className="link" href="https://twitter.com/iamijas14">
                    <div className="icon-holder twitter">
                        <FontAwesomeIcon icon={faTwitter}/><i className="fa fa-twitter"></i>
                    </div>
                    </a>
                </li>
        
                </ul>
            </div>

        </div>
    </div>
  )
}

export default Contact;