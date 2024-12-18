import React from 'react'
import Categories from './components/Categories'
import Price from './components/Price'
import TopSelling from './components/TopSelling'
import './styles/Filter.css'

const Filter = () => {
    return (
        <div className='filter'>
            <div className='categories'>
                <Categories />
            </div>

            <div className='price'>
                <Price />
            </div>

            <div className='topSelling'>
                <TopSelling />
            </div>
        </div>
    )
}

export default Filter