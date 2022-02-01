import React from 'react'
import './navbar.sass'
import image from '../../../helpers/images'

const Navbar = () => {
  return (
    <div className="navbar-container">
      <div className="navbar-box">
        <div className="logo-box">
          <img src={image.LogoPrimary} alt="logo" className="logo-img" />
          <div className="logo-text">antools.</div>
        </div>

        <nav role="navigation">
          <ul className="navbar-category">
            <li className="category-item" aria-labelledby="home">
              Home
            </li>
            <li className="category-item" aria-labelledby="categories">
              Categories
            </li>
            <li className="category-item" aria-labelledby="my collection">
              My collections
            </li>
            <li className="category-item" aria-labelledby="blog">
              Blog
            </li>
          </ul>
        </nav>

        <div className="join-box">
          <button className="btn btn-secondary">Login</button>
          <button className="btn btn-primary">Sign Up</button>
        </div>
      </div>
    </div>
  )
}

export default Navbar
