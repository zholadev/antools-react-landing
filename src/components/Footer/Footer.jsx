import React from 'react'
import image from '../../helpers/images'
import Container from '../Partials/Container'
import './styles.sass'
import Heading from './../Heading/Heading'

const Footer = () => {
  return (
    <div className="footer-container">
      <Container>
        <div className="center-group">
          <div className="logo-box">
            <img src={image.LogoPrimary} alt="logo" className="logo-img" />
            <div className="logo-text">antools.</div>
          </div>

          <Heading h5 text={'Copyright 2021. Antools'} />
        </div>
      </Container>
    </div>
  )
}

export default Footer
