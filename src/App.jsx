import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Footer from './components/Footer/Footer'
import Header from './components/Header/Header'
import Navbar from './components/Navbar/Navbar'
import ProductsProvider from './HOC/ProductsProvider/ProductsProvider'
import Home from './pages/Home/Home'
import Product from './pages/Product/Product'
import SnackBarProvider from './HOC/SnackBarProvider/SnackBarProvider'


function App() {

  return (
    <>
      <BrowserRouter>

        <ProductsProvider>
          <SnackBarProvider>

            <Header />

            <Navbar />

            <Routes>

              <Route path='/' element={<Home />} />

              <Route path='product/:productId' element={<Product />} />

            </Routes>

            <Footer />
          </SnackBarProvider>

        </ProductsProvider>

      </BrowserRouter>
    </>
  )
}

export default App
