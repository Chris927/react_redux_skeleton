import React from 'react'
import { Link } from  'react-router'

export default () => {
  return (
    <header className='navbar-fixed'>
      <nav className='yellow darken-2'>
        <div className='navbar-wrapper'>
          <Link to ='/' className='brand-logo center grey-text text-darken-2'>StupidApp</Link>
        </div>
      </nav>
    </header>
  )
}
