import React from 'react'
import './styles/Filter.css'
import Categories from './components/Categories'
import Price from './components/Price'
import Brand from './components/Brand'
import TopSelling from './components/TopSelling'

const Filter = () => {
    return (
        <div className='filter'>
            <div className='categories'>
                <Categories />
            </div>

            <div className='price'>
                <Price />
            </div>

            <div className='Brand'>
                <Brand />
            </div>

            <div className='topSelling'>
                <TopSelling />
            </div>
        </div>
    )
}

export default Filter