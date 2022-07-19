import './resume.css'
import ResumeCard from './ResumeCard'
import { useSelector } from 'react-redux';

export const Resume = () => {

    const ResumeInfo = useSelector(state => state.reducer.ResumeInfo)
  return (
    <>
        <div className='resume'>
            <div className='resume_heading'>
                <h2 id='resume'>Resume</h2>
                <a href={require('./IjasResume.pdf')} download = "Ijas's Resume" target="_black"><button>Download</button></a>
            </div>

            <div className='resume_content'>
                <div className='resume_left'>
                    <h3>Education</h3>
                    {ResumeInfo.map((item) => {
                            if(item.category === "education"){
                                return <ResumeCard  year={item.year} cj={item.college} title={item.title} logo={item.logo} />
                            }
                    }) }
                </div>

                <div className='resume_center'>
                    <h3>Skills</h3>
                    {ResumeInfo.map((item) => {
                            if(item.category === "skills"){
                                return <ResumeCard  skill={item.skill} />
                            }
                    }) }
                </div>

                <div className='resume_right'>
                    <h3>Job experience</h3>
                    {ResumeInfo.map((item) => {
                            if(item.category === "experience"){
                                return <ResumeCard  year={item.year} cj={item.company} title={item.designation} logo={item.logo} />
                            }
                    }) }
                </div>
            </div>

        </div>
      
    </>
  )
}

export default Resume;
