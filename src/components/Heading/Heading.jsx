import React from 'react'
import './heading.sass'

const Heading = (props) => {
  const { h1, h2, h3, h4, h5, h6, text } = props

  return h1 ? (
    <h1 className="heading-h1">{text}</h1>
  ) : h2 ? (
    <h2 className="heading-h2">{text}</h2>
  ) : h3 ? (
    <h3 className="heading-h3">{text}</h3>
  ) : h4 ? (
    <h4 className="heading-h4">{text}</h4>
  ) : h5 ? (
    <h5 className="heading-h5">{text}</h5>
  ) : h6 ? (
    <h6 className="heading-h6">{text}</h6>
  ) : null
}

export default Heading
