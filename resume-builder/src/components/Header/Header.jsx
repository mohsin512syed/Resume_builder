import React from 'react'
import Styles from './Header.module.css'
import resumeSvg from '../../assets/resume.svg'

function Header() {
  return (
    <div className={Styles.container}>
      <div className={Styles.left}>
        <p className={Styles.heading}>
          A <span>Resume</span> that stands out!
        </p>
        <p className={Styles.heading}>
          Make yor own resume. <span>Its free</span>
        </p>
      </div>
      <div className={Styles.right}>
        <img src={resumeSvg} alt="Resume" />
      </div>
    </div>
  )
}

export default Header
