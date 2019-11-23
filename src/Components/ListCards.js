import React from 'react'

const ListCards = ({items}) => {
  return (
    items.map((item) => {
      return (
        <div className="card item-card" key={item.id}>
          <div className="card-image">
            <figure className="image is-1by1">
              <img src={item.urls.small} alt={item.alt_description} />
            </figure>
          </div>
          <div className="card-content">
            <div className="content">
              {item.alt_description}
            </div>
          </div>
        </div>
      )
    })
  )
}

export default ListCards