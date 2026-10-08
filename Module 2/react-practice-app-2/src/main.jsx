import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Counter from './components/Counter'
import Profile from './components/Profile'
import ShoppingList from './components/ShoppingList'
import Photos from './components/Photos'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Counter/>
    <Profile/>
    <ShoppingList/>
    <Photos/>
  </StrictMode>,
)
