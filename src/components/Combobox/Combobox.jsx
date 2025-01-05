import React, { useMemo } from 'react'
import './style/Combobox.css'
import { getLocal } from '../../utils/common'
import classNames from 'classnames'

const Combobox = ({
  items,
  className,
  selectClassName,
  onChange
}) => {

  const defaultValue = useMemo(() => {
    const pagination = getLocal("pagination")

    return pagination?.itemsPerPage

  }, [])
  return (
    <div className={className}>
      <select name="" id="" className={`select ${selectClassName ? selectClassName : ""}`} onChange={onChange} defaultValue={defaultValue}>
        {items?.map((item, index) => {
          return (
            <option key={index} className='option' id={item.id} value={item.value}>{item.name}</option>
          )
        })}
      </select>
    </div>
  )
}

export default Combobox