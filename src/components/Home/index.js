import React from 'react'
import { Link } from 'react-router'

export default (props) => (
  <div className='container'>
    <div className='row center'>
      <h2>
        <i className='material-icons large'>visibility</i>
        <br/>
        This is where the victim's <strong>attention</strong> gets hooked
      </h2>
      <h5>This is where you tell the freshly hooked victim how your product will benefit them, leaving them no choice but to...</h5>
      <br/>
      <Link to='/dashboard' className='btn btn-large yellow darken-1 grey-text text-darken-2'>Login/Signup</Link>
    </div>
    <div className='row center'>
      <div className='col s12 m4'>
        <i className='material-icons red-text text-darken-2 large'>shopping_basket</i>
        <h5>Buy stuff</h5>
        <p>That you don't need</p>
      </div>
      <div className='col s12 m4'>
        <i className='material-icons green-text text-darken-2 large'>language</i>
        <h5>Buy more stuff</h5>
        <p>That you don't want</p>
      </div>
      <div className='col s12 m4'>
        <i className='material-icons blue-text text-darken-2 large'>textsms</i>
        <h5>Buy even more stuff</h5>
        <p>That nobody wants</p>
      </div>
    </div>
  </div>
)
