import React from 'react'
import './styles/Header.css'
import { FaPhoneAlt } from "react-icons/fa";
import { MdOutlineEmail } from "react-icons/md";
import { IoLocationSharp } from "react-icons/io5";
import { BiDollar } from "react-icons/bi";
import { IoPersonSharp } from "react-icons/io5";
import { IoMdHeartEmpty } from "react-icons/io";
import { IoIosCart } from "react-icons/io";
import Combobox from '../Combobox/Combobox';
import Button from '../Button/Button';

const Header = () => {
  return (
    <header>
      <div className='container'>
        <div className='header-wrapper'>

          <div className='information'>

            <div className='flex justify-between items-center g-1'>
              <FaPhoneAlt
                color='#ef233c'
                size={15}
              />
              +021-95-51-85
            </div>

            <div className='flex justify-between items-center g-1'>
              <MdOutlineEmail
                color='#ef233c'
                size={20}
              />
              <a href='mailto:emial@gmail.com' className='email'>email@gmail.com</a>
            </div>

            <div className='flex justify-between items-center g-1'>
              <IoLocationSharp
                color='#ef233c'
                size={20}
              />
              1734 StoneCoal Road
            </div>
          </div>

          <div className='currency-account'>
            <div className='flex justify-between items-center g-1'>
              <BiDollar
                color='#ef233c'
                size={20}
              />
              USD
            </div>
            <div className='flex justify-between items-center g-1'>
              <IoPersonSharp
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
              <IoMdHeartEmpty
                size={25}
              />
              wishlist
            </div>

            <div className='wishlist-cart'>
              <div className='count'>3</div>
              <IoIosCart
                size={25}
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