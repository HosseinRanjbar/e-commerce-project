import React from 'react'
import './styles/MainContent.css'
import Products from '../Products/Products'
import Filter from '../Filter/Filter'

const MainContent = () => {
  return (
    <div className='container wrapper'>
      <div className='flex justify-around reverse'>

        <Products />

        <Filter />

      </div>
    </div>
  )
}

export default MainContent