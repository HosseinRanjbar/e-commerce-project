import React from 'react';
import Button from '../Button/Button';
import Combobox from '../Combobox/Combobox';
import Icon from '../Icon/Icon';
import './styles/Header.css';

const Header = () => {
  return (
    <header>
      <div className='container'>
        <div className='header-wrapper'>

          <div className='information'>

            <div className='flex justify-between items-center g-1'>
              <Icon
                type="Phone"
                color='#ef233c'
                size={15}
              />
              +021-95-51-85
            </div>

            <div className='flex justify-between items-center g-1'>
              <Icon
                type="email"
                color='#ef233c'
                size={20}
              />
              <a href='mailto:emial@gmail.com' className='email'>email@gmail.com</a>
            </div>

            <div className='flex justify-between items-center g-1'>
              <Icon
                type="Location"
                color='#ef233c'
                size={20}
              />
              1734 StoneCoal Road
            </div>
          </div>

          <div className='currency-account'>
            <div className='flex justify-between items-center g-1'>
              <Icon
                type={"Dollar"}
                color='#ef233c'
                size={20}
              />
              USD
            </div>
            <div className='flex justify-between items-center g-1'>
              <Icon
                type={"Person"}
                color='#ef233c'
                size={20}
              />
              My Account
            </div>
          </div>

        </div>

        <div className='header-main'>
          <div>
            <h1>
              LOGO <span className='dot-logo'>.</span>
            </h1>
          </div>

          <div className='search-container'>
            <Combobox
              className='search-combobox'
              items={[
                { id: 1, value: "All Categorires", name: "All Categories" }
              ]}
              selectClassName={'search-combobox-select'}
            />
            <input className='search-input' type="search" placeholder='Search here...' />

            <Button
              defaultButton
              className='search-button'

            >
              Search
            </Button>
          </div>

          <div className='flex justify-between items-center g-1'>

            <div className='wishlist-cart'>
              <div className='count'>2</div>
              <Icon
                type={"Heart"}
                size={25}
              />
              wishlist
            </div>

            <div className='wishlist-cart'>
              <div className='count'>3</div>
              <Icon
                size={25}
                type={"Cart"}
              />
              your cart
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header