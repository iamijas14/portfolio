import './Projects.css'
import ProjectCard from './ProjectCard';
import { useSelector } from 'react-redux';

const Project = () => {

    const {projectInfoPart1, projectInfoPart2} = useSelector(state => state.reducer);

  return (
    <div id='projects'>
        <section className='project'>
            <div className='project_heading'>
                <h2 >My Project</h2>
            </div>

            <div className='project_content'>
                {projectInfoPart1.map((item) => {
                    return <ProjectCard 
                    image={item.image}
                    title={item.title}
                    desc={item.desc}
                    link={item?.link}
                    gitLink={item?.gitLink}
                />
                })}
            </div>

            <div className='project_content'>
                {projectInfoPart2.map((item) => {
                    return <ProjectCard 
                    image={item.image}
                    title={item.title}
                    desc={item.desc}
                    link={item?.link}
                    gitLink={item?.gitLink}
                />
                })}
            </div>

        </section>
    </div>
  )
};

export default Project;
