import React from 'react'
import { FaPhoneAlt } from 'react-icons/fa'
import { IoLocationSharp } from 'react-icons/io5'
import { MdOutlineEmail } from 'react-icons/md'
import './styles/footer.css'

const Footer = () => {

  const items = [
    { id: 1, name: "Home", value: "home" },
    { id: 2, name: "Hot Deals", value: "hot-deals" },
    { id: 3, name: "Categories", value: "categories" },
    { id: 4, name: "Laptops", value: "laptops" },
    { id: 5, name: "SmartPhones", value: "smart-phones" },
    { id: 6, name: "Cameras", value: "cameras" },
    { id: 7, name: "Accessories", value: "accessories" }
  ]

  return (
    <div>
      <div>
        newsTeller
      </div>

      <footer className='footer-wrapper'>
        <div className='footer container'>
          <div className='footer-column'>
            <h2>
              About US
            </h2>
            <div className='footer-column-content'>
              <div className='about-us-desc'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione sed perferendis tempora nesciunt exercitationem culpa quis, error reprehenderit temporibus veniam.
              </div>
              <div className='footer-colum-texts'>
                <IoLocationSharp
                  color='#ef233c'
                  size={20}
                />
                1734 StoneCoal Road
              </div>
              <div className='footer-colum-texts'>
                <FaPhoneAlt
                  color='#ef233c'
                  size={15}
                />
                +021-95-51-85
              </div>

              <div className='footer-colum-texts'>
                <MdOutlineEmail
                  color='#ef233c'
                  size={20}
                />
                <a href='mailto:emial@gmail.com' className='email'>email@gmail.com</a>
              </div>
            </div>
          </div>
          <div className='footer-column'>
            <h2>
              CATEGORIES
            </h2>

            <div className='footer-column-content'>
              {items?.map((item, index) => {
                return (
                  <div className='footer-colum-texts' key={index}>{item?.name}</div>
                )
              })}
            </div>
          </div>
          <div className='footer-column'>
            <h2>
              INFORMATION
            </h2>
            <div className='footer-column-content'>
              <div className='footer-colum-texts'>INFORMATION</div>
              <div className='footer-colum-texts'>CONTACT US</div>
              <div className='footer-colum-texts'>PRIVACY POLICY</div>
              <div className='footer-colum-texts'>ORDERS AND RETURNS</div>
              <div className='footer-colum-texts'>TERMS AND CONDITION</div>
            </div>

          </div>
          <div className='footer-column'>
            <h2>
              SERVICE
            </h2>
            <div className='footer-column-content'>
              <div className='footer-colum-texts'>MY ACCOUNT</div>
              <div className='footer-colum-texts'>VIEW CART</div>
              <div className='footer-colum-texts'>WISHLIST</div>
              <div className='footer-colum-texts'>TRACK MY ORDER</div>
              <div className='footer-colum-texts'>HELP</div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default Footer