import React from 'react'

const ListCards = ({items}) => {
  return (
    items.map((item) => {
      return (
        <div className="card item-card">
          <div className="card-image">
            <figure className="image is-4by3">
              <img src={item.links[0].href} alt="Placeholder image" />
            </figure>
          </div>
          <div className="card-content">
            <div className="content">
              {item.data[0].description_508}
            </div>
          </div>
        </div>
      )
    })
  )
}

export default ListCards