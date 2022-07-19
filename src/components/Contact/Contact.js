import './Contact.css'
import "https://kit.fontawesome.com/7f2b20e485.js"

import React from 'react'

const Contact = () => {
  return (
    <div className='contact' id='contact'>
        <div className='contact_left'>
            <h3>Connect socially</h3>

            <div class="container">
                <div class="icon-holder fab"> 
                    <i class="fa fa-angle-double-right"></i>
                </div>
  
                <ul class="sm-list">
    
                <li>
                    <div class="icon-holder facebook">
                    <a class="link" href=""><i class="fa fa-facebook"></i></a>
                    </div>
                </li>
        
                <li>
                <div class="icon-holder linkedin">
                <a class="link" href="https://www.linkedin.com/in/iamijas14/"><i class="fa fa-linkedin"></i></a>
                </div>
                </li>
        
                <li>
                <div class="icon-holder instagram">
                <a class="link" href=""><i class="fa fa-instagram"></i></a>
                </div>
                </li>
        
                <li>
                <div class="icon-holder twitter">
                <a class="link"  href=""><i class="fa fa-twitter"></i></a>
                </div>
                </li>
        
                </ul>
            </div>

        </div>
    </div>
  )
}

export default Contact;