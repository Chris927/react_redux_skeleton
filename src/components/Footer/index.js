import React from 'react'
import { Link } from 'react-router'

export default () => (
  <footer className='page-footer yellow darken-2 grey-text text-darken-2'>
    <div className='container'>
      <div className='row'>
        <div className='col l6 s12'>
          <h5>Footer Content</h5>
          <p>About whatever you wanna say</p>
        </div>
        <div className='col l4 offset-l2 s12 grey-text text-darken-2'>
          <ul>
            <li><Link className='grey-text text-darken-2' to='#'>A Link</Link></li>
          </ul>
        </div>
      </div>
    </div>
    <div className='footer-copyright grey-text text-darken-2'>
      <div className='container'>
        © 2016 Tarcode
        <Link to='#' className='right grey-text text-darken-2'>More Links</Link>
      </div>
    </div>
  </footer>
)
