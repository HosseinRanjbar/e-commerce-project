import React from 'react'
import './styles/MainContent.css'
import Products from '../../pages/Products/Products'
import Filter from '../../pages/Filter/Filter'

const MainContent = () => {
  return (
    <div className='container wrapper'>
      <div>

        <Products />
      
        <Filter />

      </div>
    </div>
  )
}

export default MainContent