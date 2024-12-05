import React from 'react'
import './style/Combobox.css'

const Combobox = ({
  items,
  className
}) => {
  return (
    <div>
      <select name="" id="" className='select'>
        {items?.map((item) => {
          return (
            <option className='option' id={item.id} value={item.value}>{item.name}</option>
          )
        })}
      </select>
    </div>
  )
}

export default Combobox