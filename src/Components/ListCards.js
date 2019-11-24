import React from 'react'

const ListCards = ({items, action}) => {

  if(!items) return 'No tienes favoritos guardados :('

  if(items)
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
            <button
              className="button is-success is-light"
              onClick={() => action(item.id)}>
                Add to favorite
            </button>
          </div>
        </div>
      )
    })
  )
}

export default ListCards