import React from 'react'
import SideNav from '../SideNav'
import Card from '../Card'
import Loader from '../Loader'

export default (props) => (
  <div>
    <div className='row'>
      <div className='col s12 m4'>
        <SideNav/>
        <div className='center'>
          <Loader/>
        </div>
      </div>
      <div className='col s12 m8'>
        <Card/>
      </div>
    </div>
  </div>
)
