import React, { useCallback, useMemo, useState } from 'react';
import { useProductProvider } from '../../HOC/ProductsProvider/ProductsProvider';
import { getLocal, removeLocalItem, setLocal } from '../../utils/common';
import Button from '../Button';
import Combobox from '../Combobox/Combobox';
import Icon from '../Icon/Icon';
import './styles/Header.css';

const Header = () => {

  const [searchValue, setSearchValue] = useState(getLocal("search") ?? "")

  const [category, setCategory] = useState(null)

  const { productsfetchData, cart } = useProductProvider()

  const searchHandler = useCallback(
    () => {
      setLocal("search", searchValue)

      const params = getParams();

      productsfetchData(null, params, null, null);

    }, [searchValue, category])

  const getParams = () => {
    const pagination = getLocal('pagination') || {};
    const search = getLocal('search') || '';

    return {
      page: pagination?.currentPage,
      limit: pagination.itemsPerPage,
      category: category || '',
      search,
    };
  };

  const categoriesItems = () => {
    const categories = getLocal("categories") ?? []

    const categoriesIncludeValue = categories?.map((item) => ({ ...item, id: item?._id, value: item?.name }))

    return [{ id: null, name: "All Category", selected: "All Category", value: "All Category" }, ...categoriesIncludeValue]
  }



  return (
    <header>
      <div className='container'>
        <div className='header-wrapper'>
          <Icon
            type={"Menu"}
            className={"menu"}
            size={35}
            onClick={() => {

            }}
          />
          <div className='information'>

            <div className='flex justify-between items-center g-1'>
              <Icon
                type="Phone"
                color='#ef233c'
                size={15}
              />
              <a href="tell:+021-95-51-85" className='phone'>+021-95-51-85</a>
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
              items={categoriesItems()}
              selectClassName={'search-combobox-select'}
              onChange={(v) => {
                setCategory(v?.target?.selectedOptions[0]?.id)
              }}
            />
            <input className='search-input' type="search" placeholder='Search here...' value={searchValue} onChange={(e) => setSearchValue(e?.target?.value)} />
            {searchValue && <div className='clear-search' onClick={() => {
              setSearchValue("")
              productsfetchData()
            }}>x</div>}
            <Button
              defaultButton
              className='search-button'
              onClick={searchHandler}
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
              <div className='count'>{cart?.length}</div>
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