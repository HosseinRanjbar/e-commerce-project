import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './pages/Home/Home'
import Product from './pages/Product/Product'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import Navbar from './components/Navbar/Navbar'
import ProductsProvider from './HOC/ProductsProvider/ProductsProvider'


function App() {

  return (
    <>
      <BrowserRouter>

        <ProductsProvider>

          <Header />

          <Navbar />

          <Routes>

            <Route path='/' element={<Home />} />

            <Route path='/:productId' element={<Product />} />
            
          </Routes>

          <Footer />
        </ProductsProvider>

      </BrowserRouter>
    </>
  )
}

export default App
