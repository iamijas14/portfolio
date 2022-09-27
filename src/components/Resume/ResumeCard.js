import './resume.css'

import React from 'react'

const ResumeCard = ({year, collegeWork, title, logo, skill,}) => {
    return (
      <>
        <div className='reumseCard'>
            <div className='resumeCard_logo'>
                {logo}
            </div>

            <div className='resumeCard_content'>
                { !skill ? ( 
                <div className='info'> 
                <h3>{collegeWork}</h3>
                <p>- {title}</p>
                <p>{year}</p>
                <hr></hr> 
                </div>
                ) :
                <div className='resumeCard_skill'>
                    <li>{skill}</li>
                </div>
                }
            </div>
        </div>
      </>
    )
  }

export default ResumeCard;
