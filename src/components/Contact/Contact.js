import './Contact.css'
import emailjs from '@emailjs/browser';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleDoubleRight } from '@fortawesome/free-solid-svg-icons'
import { faTwitter, faGithub, faFacebookF, faLinkedinIn, faInstagram, faFontAwesome } from '@fortawesome/free-brands-svg-icons'
import { useState } from 'react';

const Contact = () => {

    const [isResult, setResult] = useState(false);

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm(
            'service_ut0jh4u',
            'template_sc8y68e',
            e.target,
            'p9Jc_xbJQAAhLguLC')
            .then((result) => {
                console.log(result.text);
                console.log('message sent')
            }, (error) => {
                console.log(error.text);
            });
        e.target.reset();

        console.log(e)
        setResult(true)
    };

    setTimeout(() => setResult(false), 3000);

    return (
        <div className='contact'>

            <section id='contact'>
                <div className='contact_left'>
                    <h3>Connect socially</h3>
                    <div className="container">
                        <FontAwesomeIcon className='icon-holder fab' icon={faAngleDoubleRight} />

                        <ul className="sm-list">
                            {/* <li>
                    <a className="link" href="">
                    <div className="icon-holder facebook">
                        <FontAwesomeIcon icon={faFacebookF}/><i className="fa fa-facebook"></i>
                    </div>
                    </a>
                </li> */}

                            <li>
                                <a className="link" href="https://www.linkedin.com/in/iamijas14/">
                                    <div className="icon-holder linkedin">
                                        <FontAwesomeIcon icon={faLinkedinIn} /><i className="fa fa-linkedin"></i>
                                    </div>
                                </a>
                            </li>

                            <li>
                                <a className="link" href="https://github.com/iamijas14">
                                    <div className="icon-holder linkedin">
                                        <FontAwesomeIcon icon={faGithub} /><i className="fa fa-linkedin"></i>
                                    </div>
                                </a>
                            </li>

                            {/* <li>
                    <a className="link" href="https://www.instagram.com/iamijas14/">
                    <div className="icon-holder instagram">
                        <FontAwesomeIcon icon={faInstagram}/><i className="fa fa-instagram"></i>
                    </div>
                    </a>
                </li> */}

                            <li>
                                <a className="link" href="">
                                    <div className="icon-holder twitter">
                                        <FontAwesomeIcon icon={faTwitter} /><i className="fa fa-twitter"></i>
                                    </div>
                                </a>
                            </li>

                        </ul>
                    </div>
                </div>
            </section>

            <div className='contact_right'>
                <form onSubmit={sendEmail}>
                    <div className='form_name'>
                        <label>Name</label>
                        <input type="text" placeholder="Your Name" name="user_name" className='form_input' />
                    </div>

                    <div className='form_email'>
                        <label>Email</label>
                        <input type="email" placeholder="Your Email_Id" name="user_email" className='form_input' />
                    </div>
                    <div className='form_message'>
                        <label>Message</label>
                        <textarea placeholder="message" name="message" className='form_input' />
                    </div>

                    <div className='form_button'>
                        {isResult ? (<p>Message sent. Thank you for your time.</p>) : null}
                        <button type="submit" value="Send">Submit</button>
                    </div>
                </form>
            </div>
        </div>

    )
}

export default Contact;