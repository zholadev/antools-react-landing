import React from 'react'
import './styles.sass'
import Container from './../Partials/Container'
import Heading from './../Heading/Heading'

const Contributor = () => {
  return (
    <div className="contributor-container">
      <Container>
        <div className="top-box">
          <Heading h2 text={'Become a contributor?'} />
          <Heading
            h5
            text={
              'Join us and get tips & tricks to become a great Designer and Developer'
            }
          />
        </div>

        <div className="center-group">
          <div className="form-group">
            <input
              type="email"
              id="email"
              name="email"
              className="search-input"
              placeholder="Enter your email..."
            />
            <button className="btn btn-primary">Join Us</button>
          </div>
        </div>
      </Container>
    </div>
  )
}

export default Contributor
