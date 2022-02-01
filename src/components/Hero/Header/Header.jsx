import React from 'react'
import Container from '../../Partials/Container'
import './header.sass'
import image from '../../../helpers/images'

const Header = () => {
  return (
    <div className="header-container">
      <Container>
        <div className="header-box">
          <div className="left-section">
            <h1 className="main-title">
              Awesome tools for Designer & Developer <span>.</span>
            </h1>

            <p>
              Antool is a web collection of information on paid or free Design
              and Development tools
            </p>

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
