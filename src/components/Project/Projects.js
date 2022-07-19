import './Projects.css'
import ProjectCard from './ProjectCard';
import { useSelector } from 'react-redux';

const Project = () => {

    const projectInfo = useSelector(state => state.reducer.projectInfo);

  return (
    <div id='projects'>
        <section className='project'>
            <div className='project_heading'>
                <h2 >My Project</h2>
            </div>

            <div className='project_content'>
                {projectInfo.map((item) => {
                    return <ProjectCard 
                    image={item.image}
                    title={item.title}
                    desc={item.desc}
                    link={item?.link}
                />
                })}
            </div>

        </section>
    </div>
  )
};

export default Project;
