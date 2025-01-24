import React, { useMemo } from 'react'
import './style/Combobox.css'
import { getLocal } from '../../utils/common'
import classNames from 'classnames'

const Combobox = ({
  items,
  className,
  selectClassName,
  onChange,
  defaultValue,
}) => {

  return (
    <div className={className}>
      <select className={`select ${selectClassName ? selectClassName : ""}`} onChange={onChange} defaultValue={defaultValue}>
        {items?.map((item, index) => {
          return (
            <option key={index} className='option' id={item.id} value={item.value} selected={item?.selected}>{item.name}</option>
          )
        })}
      </select>
    </div>
  )
}

export default Combobox