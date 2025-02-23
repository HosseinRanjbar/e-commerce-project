import React from 'react'
import { Link } from 'react-router-dom'
import './styles/Navbar.css'

const Navbar = () => {

    const activeTab = "home"

    const items = [
        { id: 1, name: "Home", value: "home", link: "" },
        { id: 2, name: "Hot Deals", value: "hot-deals", link: "hot-deals" },
        { id: 3, name: "Categories", value: "categories", link: "categories" },
        { id: 4, name: "Laptops", value: "laptops", link: "laptops" },
        { id: 5, name: "SmartPhones", value: "smart-phones", link: "smart-phones" },
        { id: 6, name: "Cameras", value: "cameras", link: "cameras" },
        { id: 7, name: "Accessories", value: "accessories", link: "accessories" }
    ]

    return (
        <div className='navbar-wrapper'>
            <div className='container'>
                <div className='navbar'>
                    {items?.map((item, index) => {
                        return (
                            <Link
                                to={`/${item?.link}`}
                                style={{ textDecoration: "none" }}
                                key={index}
                            >
                                <div key={index} className={`navbar-item ${activeTab === item?.value ? "activeTab" : ""}`}>{item?.name}</div>
                            </Link>
                        )
                    })}
                </div>
            </div>
        </div>
    )
}

export default Navbar