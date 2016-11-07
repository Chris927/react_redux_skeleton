import React from 'react'
import Header from './Header'
import Footer from './Footer'

export default (props) => (
  <div className='grey-text text-darken-2' style={{
    display: 'flex',
    minHeight: '100vh',
    flexDirection: 'column'
  }}>
    <Header/>
    <main style={{flex: '1 0 auto'}}>
      { props.children }
    </main>
    <Footer/>
  </div>
)
