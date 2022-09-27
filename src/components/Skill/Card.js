import './Card.css'

import React from 'react'

const Card = ({title, image}) => {
  return (
    <div>
        <div className='skill_details'>
          <img className='logo' src={image} alt='' />
          <h4 className='title'>{title}</h4>
        </div>
    </div>
  )
}

export default Card;

