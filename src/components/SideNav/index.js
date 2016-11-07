import React from 'react'
import { Link } from 'react-router'

export default (props) => (
  <div className='collection'>
    <div className='collection-header center'>
      <h5 className='grey-text text-darken-2'>Menu</h5>
    </div>
    <Link to='/' className='collection-item grey-text text-darken-2'>Messages<span className='badge new green darken-3'>1</span></Link>
    <Link to='/' className='collection-item grey-text text-darken-2'>Places</Link>
  </div>
)
