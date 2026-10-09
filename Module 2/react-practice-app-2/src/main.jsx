import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Counter from './components/Counter'
import Profile from './components/Profile'
import ShoppingList from './components/ShoppingList'
import Photos from './components/Photos'
import Users from './components/Users'
import Products from './components/Products'
import Navbar from './components/Navbar'
import Footer from './components/Footer'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Navbar/>
    <Counter/>
    <Profile/>
    <ShoppingList/>
    <Products/>
    <Users/>
    <Photos/>
    <Footer/>
  </StrictMode>,
)
