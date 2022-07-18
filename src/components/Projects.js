import './Projects.css'
import ProjectCard from './ProjectCard';
import amazonClone from '../images/amazon.png'

const projectInfo = [
    {
        id:1,
        image:amazonClone,
        title:"amazon-clone",
        desc:"e-commerce clone with payment functionality, add product to cart, login and create new account using ReactJs, stripeAPI"
    },
    {
        id:2,
        image:amazonClone,
        title:"amazon-clone",
        desc:"e-commerce clone with payment functionality, add product to cart, login and create new account using ReactJs, stripeAPI"
    },
    {
        id:3,
        image:amazonClone,
        title:"amazon-clone",
        desc:"e-commerce clone with payment functionality, add product to cart, login and create new account using ReactJs, stripeAPI"
    },
    {
        id:4,
        image:amazonClone,
        title:"amazon-clone",
        desc:"e-commerce clone with payment functionality, add product to cart, login and create new account using ReactJs, stripeAPI"
    }
]

const Project = () => {
  return (
    <div>
        <section className='project'>
            <div className='project_heading'>
                <h2>My Project</h2>
            </div>

            <div className='project_content'>
                {projectInfo.map((item) => {
                    return <ProjectCard 
                    image={item.image}
                    title={item.title}
                    // desc={item.desc}
                />
                })}
            </div>

        </section>
    </div>
  )
};

export default Project;
