import './Skills.css'
import html_logo from '../images/html-logo.svg'
import css_logo from '../images/css-logo.svg'
import js_logo from '../images/js-logo.svg'
import react_logo from '../images/react-logo.svg'
import mulesoft_logo from '../images/mulesoft-logo.svg'
import Card from './Card'

const Skills = () => {
  return (
    <div>
        <h2 className='skill_title'>Best skills on</h2>

      <div>
        <div className='skill_set'>
          <Card image={html_logo} title='HTML'/>
          <Card image={css_logo} title='CSS'/>
          <Card image={js_logo} title='JAVASCRIPT'/>
          <Card image={react_logo} title='REACT'/>
          <Card image={mulesoft_logo} title='MULESOFT'/>
        </div>
      </div>

    </div>
  )
}

export default Skills;