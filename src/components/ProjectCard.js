import './ProjectCard.css'
import KeyboardDoubleArrowRightIcon from '@mui/icons-material/KeyboardDoubleArrowRight';

const ProjectCard = ({image, title}) => {
  return (
    <div className='projectInfo'> 
        <div className='project_img'>
            <img src={image} alt='project_image' />
        </div>
        <div>
            <h3>{title}</h3>
            <KeyboardDoubleArrowRightIcon />
        </div>
    </div>
  )
};

export default ProjectCard;
