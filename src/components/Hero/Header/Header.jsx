import React from 'react'
import Container from '../../Partials/Container'
import './header.sass'
import image from '../../../helpers/images'
import Heading from '../../Heading/Heading'

const Header = () => {
  return (
    <div className="header-container">
      <Container>
        <div className="header-box">
          <div className="left-section">
            <div className="main-title">
              <Heading text={'Awesome tools for Designer & Developer'} h1 />
            </div>

            <div className="subtitle">
              <Heading
                h5
                text={
                  'Antool is a web collection of information on paid or free Design and Development tools'
                }
              />
            </div>

            <div className="form-group">
              <input
                type="search"
                id="search"
                name="search"
                className="search-input"
                placeholder="find more than 430+ tools..."
              />
              <button className="btn btn-primary">Search</button>
            </div>

            <div className="social-section">
              <div className="social-box">
                <img src={image.facebookIcon} alt="" />
              </div>
              <div className="social-box">
                <img src={image.instagramIcon} alt="" />
              </div>
              <div className="social-box">
                <img src={image.twitterIcon} alt="" />
              </div>
            </div>
          </div>
          <div className="right-section">
            <img
              src={image.Illustration}
              alt="illustration"
              className="header-right-img"
            />
          </div>
        </div>
      </Container>
    </div>
  )
}

export default Header
