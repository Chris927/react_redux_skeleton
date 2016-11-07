import React from 'react'
import { Link } from 'react-router'

export default (props) => (
  <div className='card horizontal'>
    <div className='card-content'>
      <span className='card-title'>Troll's live here</span>
      <p>Stuff that you say on the card</p>
    </div>
    <div className='card-action'>
      <Link to='#'>A Link</Link>
      <Link to='#'>Another Link</Link>
    </div>
  </div>
)
