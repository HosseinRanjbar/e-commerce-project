import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Footer from './components/Footer/Footer'
import Header from './components/Header/Header'
import Navbar from './components/Navbar/Navbar'
import ProductsProvider from './HOC/ProductsProvider/ProductsProvider'
import Home from './pages/Home/Home'
import Product from './pages/Product/Product'


function App() {

  return (
    <>
      <BrowserRouter>

        <ProductsProvider>

          <Header />

          <Navbar />

          <Routes>

            <Route path='/' element={<Home />} />

            <Route path='product/:productId' element={<Product />} />

          </Routes>

          <Footer />
        </ProductsProvider>

      </BrowserRouter>
    </>
  )
}

export default App
