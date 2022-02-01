import React, { useState } from 'react'
import image from '../../../helpers/images'
import './cards.sass'

const Cards = (props) => {
  const { data, type } = props

  const [like, setLike] = useState(false)

  const likeToggle = () => setLike(!like)

  return (
    <div
      className={
        type == 'xs'
          ? 'cards-product-container'
          : 'cards-product-container-secondary'
      }
    >
      <div className="product-top-section">
        <div className="product-logo">
          <img src={data.logo} alt="" />
        </div>

        <div className="product-title">
          <h3>{data.title}</h3>
          <p>{data.type}</p>
        </div>
      </div>

      <div className="product-description">{data.subtitle}</div>

      <div className="product-actions">
        <div className="like-action" onClick={likeToggle}>
          {like ? (
            <img src={image.like} alt="" />
          ) : (
            <img src={image.dislike} alt="" />
          )}
        </div>

        <button className="btn btn-secondary">Visit</button>
      </div>
    </div>
  )
}

export default Cards
