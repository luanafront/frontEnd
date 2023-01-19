import React from "react";
import Rating from "../rating";
import "./index.css"

function ProductCard ({ 
  title,
  category, 
  description, 
  id, 
  image, 
  price, 
  rating 
}) {
  return (
    <li className='boxProductCard' key={id}>
      <Rating {...rating}/>
      <p className='boxProductCard--text boxProductCard--text__id'>{id}</p>
      <p className='boxProductCard--text boxProductCard--text__title'>{title}</p>
      <figure className='boxProductCard--figure boxProductFigure'>
        <img className='boxProductFigure--img' alt={title} src={image}/>
        <figcaption className='boxProductFigure--caption'>Imagem do produto:{title}</figcaption>
      </figure>
      <p className='boxProductCard--text boxProductCard--text__description'>{description}</p>
      <p className='boxProductCard--text boxProductCard--text__price'>{price}</p>
    </li>
  )
}

export default ProductCard