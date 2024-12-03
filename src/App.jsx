import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './pages/Home/Home'
import Product from './pages/Product/Product'


function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/:productId' element={<Product />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
