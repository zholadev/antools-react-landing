import React from 'react'
import image from '../../../helpers/images'
import './partner.sass'

const Partner = () => {
  return (
    <div className="partner-container">
      <div className="title">Trusted more than 150+ brand</div>

      <div className="partner-list">
        <img src={image.microsoftLogo} alt="" />
        <img src={image.googleLogo} alt="" />
        <img src={image.slackLogo} alt="" />
        <img src={image.wordpressLogo} alt="" />
      </div>
    </div>
  )
}

export default Partner
