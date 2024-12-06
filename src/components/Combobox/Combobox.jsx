import React, { useMemo } from 'react'
import './style/Combobox.css'
import { getLocal } from '../../utils/common'

const Combobox = ({
  items,
  className,
  onChange
}) => {

  const defaultValue = useMemo(() => {
    const pagination = getLocal("pagination")

    return pagination?.itemsPerPage

  }, [])
  return (
    <div>
      <select name="" id="" className='select' onChange={onChange} defaultValue={defaultValue}>
        {items?.map((item) => {
          return (
            <option key={item?.id} className='option' id={item.id} value={item.value}>{item.name}</option>
          )
        })}
      </select>
    </div>
  )
}

export default Combobox