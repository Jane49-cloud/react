import React from 'react'
import { Link } from 'react-router-dom'

const Error = () => {
  return (
<section className="about-section section">
<h1 className="section-title">
     Error 404
      </h1>
      <h1>
        oops it's a dead end
      </h1>
      <Link to="/" className='btn btn-primary'>
        Back home
      </Link>
</section>
  )
}

export default Error
