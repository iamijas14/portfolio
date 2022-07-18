import './Header.css'
import React, { useState } from 'react'
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';

const Header = () => {

    const[isScroll, setScroll] = useState(false);

    window.addEventListener("scroll", () => {
        window.scrollY > 100 ? setScroll(true) : setScroll(false)
    });

    //toggle menu for mobile version
    const [isMobile, setMobile] = useState(false)

  return (
    <div className={`header ${isScroll && 'header_scroll'}`}>

        <div className={isMobile ? 'header_navMobile': 'header_container desktop'} >
                <li>
                    Home
                </li>
                <li>
                    Resume
                </li>
                <li>
                    Projects                   
                </li>
                <li>
                    Contact me
                </li>
        </div>

        <div className='header_open_close' onClick={() => setMobile(!isMobile)}>
            {isMobile ? <i className='close'> <CloseIcon /> </i> :
            <i className='open'> <MenuIcon /> </i> 
            }     
        </div>

    </div>
  )
};

export default Header;


