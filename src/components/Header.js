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

        <div className={isMobile ? 'header_navMobile': 'header_container'} >
                <a href='#home'>
                    <li>
                        Home
                    </li>
                </a>
                <a href='#resume'>
                    <li>
                        Resume
                    </li>
                </a>
                <a href='#projects'>
                    <li>
                        Projects
                    </li>
                </a>
                <a href='#contact'>
                    <li>
                        Contact me
                    </li>
                </a>
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


