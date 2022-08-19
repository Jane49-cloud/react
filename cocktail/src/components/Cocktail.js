import React from 'react'
import { Link } from 'react-router-dom'

const Cocktail = ({id,name, glass, info, image}) => {
  return (
    <article className='cocktail'>
<div className="img-container">
<img src={image} alt= {name} />
</div>
<div className="cocktail-footer">
  <h4>
   { name}
  </h4>
  <h5>
    {glass}
  </h5>

<Link to ={`/cocktail/${id}`}>
<button className='btn btn-primary'>Details</button>
</Link>

</div>
    </article>
  )
}

export default Cocktail
