import './resume.css'

import React from 'react'

const ResumeCard = ({year, cj, title, logo, skill}) => {
    return (
      <>
        <div className='reumseCard'>
            <div className='resumeCard_logo'>
                {logo}
            </div>

            <div className='resumeCard_content'>
                { !skill ? ( 
                <div className='info'> 
                <h3>{cj}</h3>
                <p>- {title}</p>
                <p>{year}</p>
                <hr></hr> 
                </div>
                ) : 
                <div className='resumeCard_skill'>
                    <li>{skill}</li>
                    {/* <li>{skill?.skill2}</li>
                    <li>{skill?.skill3}</li>
                    <li>{skill?.skill4}</li>
                    <li>{skill?.skill5}</li> */}
                </div>
                }
            </div>
        </div>
      </>
    )
  }

export default ResumeCard;
