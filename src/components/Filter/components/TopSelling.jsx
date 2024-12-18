import React, { useEffect } from 'react'
import useGetData from '../../../hooks/useGetData/useGetData'
import '../styles/TopSelling.css'
import Loading from '../../Loading/Loading'
import ErrorHandler from '../../Errors/ErrorHandler'

const TopSelling = () => {

  const {
    data: topSellingData,
    error: topSellingError,
    loading: topSellinLoading
  } = useGetData({
    url: 'https://kaaryar-ecom.liara.run/v1/products/top-rated'
  })

  return (
    <>
      <h3 className="top-selling-title">TOP RATED</h3>
      <div className='top-selling-container'>
        {topSellinLoading ?
          <Loading />
          :
          topSellingError ?
            <ErrorHandler errorMessage={topSellingError} />
            :
            topSellingData?.map((item, index) => {
              return (
                <div key={index} className='top-selling-item'>

                  <div className='top-selling-image-container'>
                    <img id='top-selling-image' src={item?.images[1] ?? item?.images[0]} alt={item?.name} />
                  </div>

                  <div className='top-selling-desc-container'>
                    <div className='top-selling-name'>{item?.name}</div>

                    <div className='top-selling-description'>{item?.description}</div>

                    <div className='top-selling-price'>$ {item?.price.toFixed(2)} <span className='top-selling-discount-price'>${(item?.price.toFixed(2) - (item?.price.toFixed(2) * (10 / 100))).toFixed(2)}</span></div>
                  </div>
                </div>
              )
            })}
      </div>
    </>
  )
}

export default TopSelling