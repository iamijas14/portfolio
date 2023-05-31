import './ProjectCard.css'
import KeyboardDoubleArrowRightIcon from '@mui/icons-material/KeyboardDoubleArrowRight';
import { useState } from 'react';

const ProjectCard = ({ image, title, desc, link, gitLink }) => {

  const [isPopup, setPopup] = useState(false);
  const togglePopup = () => setPopup(!isPopup);

  return (
    <>
      <div className='projectInfo' onClick={togglePopup}>
        <div className='project_img'>
          <img src={image} alt='project_image' />
        </div>
        <div>
          <h3>{title}</h3>
          <KeyboardDoubleArrowRightIcon />
        </div>
      </div>

      {isPopup && (
        <div className='projectCard_content' >

          <div className='projectcard_inner'>
            <div className='projectCard_right'>
              <img src={image} alt='' />
            </div>

            <div className='projectCard_left'>
              <h2>{title}</h2>
              <p>{desc}</p>
              <a href={link}><button>VIEW PROJECT</button></a>
              <a href={gitLink}><button>VIEW ON GITHUB</button></a>
            </div>

            <div>
              <button className='projectCard_close' onClick={togglePopup}>X</button>
            </div>

          </div>

        </div>
      )}
    </>
  )
};

export default ProjectCard;
