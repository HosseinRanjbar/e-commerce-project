import Filter from '../Filter/Filter'
import Products from '../Products/Products'
import './styles/MainContent.css'

const MainContent = () => {
  return (
    <div className='container wrapper'>
      <div className='flex justify-around reverse'>

        <Products />

        <Filter />

      </div>
    </div>
  )
}

export default MainContent