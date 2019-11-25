import React from 'react'

const Card = ({description, image, id, action, callTo}) => {
  return (
    <div className="card item-card">
      <div className="card-image">
        <figure className="image is-1by1">
          <img src={image} alt={description} />
        </figure>
      </div>
      <div className="card-content">
        <div className="content subtitle is-5">
          {description}
        </div>
        <button
          className="button is-primary"
          onClick={() => action(id)}>
            {callTo}
        </button>
      </div>
    </div>
  )
}

export default Card