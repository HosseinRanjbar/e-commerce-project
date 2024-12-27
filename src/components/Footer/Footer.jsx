import React from 'react'
import Button from '../Button/Button'
import Icon from '../Icon/Icon'
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
      <div className='news-teller'>

        <div className='news-teller-title'>
          Sign up for the <span>NEWSTELLER</span>
        </div>


        <div className='email-container'>
          <Icon
            type={"email"}
            className='emial-icon'
            size={200}
          />

          <input type="email" className='email-input' placeholder='Enter Your Email' />

          <Button
            defaultButton
            className='subscribe-button'
          >

            <Icon
              type={"emailSubmit"}
            />
            Subscribe
          </Button>


        </div>

        <div className='social-media-wrapper'>
          <div className='social-media'>
            <Icon
              type={"Facebook"}
            />
          </div>
          <div className='social-media'>
            <Icon
              type={"Twitter"}
            />
          </div>
          <div className='social-media'>
            <Icon
              type={"Instagram"}
            />
          </div>
          <div className='social-media'>
            <Icon
              type={"Pinterest"}
            />
          </div>
        </div>
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
                <Icon
                  type={"Location"}
                  color='#ef233c'
                  size={20}
                />
                1734 StoneCoal Road
              </div>
              <div className='footer-colum-texts'>
                <Icon
                  type={"Phone"}
                  color='#ef233c'
                  size={15}
                />
                <a href="tel:+021955185" id='phone'>+021-95-51-85</a>
              </div>

              <div className='footer-colum-texts'>
                <Icon
                  type={"email"}
                  color='#ef233c'
                  size={20}
                />
                <a href='mailto:email@gmail.com' id='email'>email@gmail.com</a>
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

        <div className='copy-right-wrapper'>
          <div className='copy-right'>
            Copyright &copy; 2024 All Rights Reserved
          </div>
        </div>
      </footer>
    </div>
  )
}

export default Footer