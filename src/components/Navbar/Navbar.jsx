import React, { useEffect } from 'react'
import './styles/Navbar.css'
import { useParams } from 'react-router-dom'

const Navbar = () => {

    const params = useParams()

    const activeTab = "home"


    useEffect(() => {
        console.log(params, "params");

    }, [params])

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
        <div className='navbar-wrapper'>
            <div className='container'>
                <div className='navbar'>
                    {items?.map((item, index) => {
                        return (
                            <div key={index} className={`navbar-item ${activeTab === item?.value ? "activeTab" : ""}`}>{item?.name}</div>
                        )
                    })}
                </div>
            </div>
        </div>
    )
}

export default Navbar