import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Welcome from './components/Welcome.jsx'
import Greetings from './components/Greetings.jsx'
import ProductCard from './components/ProductCard.jsx'
import Products from './components/Products.jsx'
import MoodTracker from './components/MoodTracker.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <App /> */}
    <Welcome/>
    <Welcome/>
    <Welcome/>
    <Welcome/>
    <Welcome/>



    <Greetings greet={"Good morning"} name={"rahim"} greetEmoji={"🖐️"} isLoggedIn={true}/>
    <Greetings greet={"Good afternoon"} name={"karim"} greetEmoji={"🤙"} isLoggedIn={false} securityCode={"JK2340@$@KN"}/>
    <Greetings greet={"Good evening"} name={"fahim"} greetEmoji={"🙋‍♂️"} isLoggedIn={true} securityCode={"JK23K98@$@KN"}/>
    <Greetings greet={"Good night"} name={"joshim"} greetEmoji={"🙋"} isLoggedIn={false}/>
    {0<1 && <Greetings/>}


    {/* <ProductCard title = {"Laptop"} description={"This is description"} price={65000}  isStock={true}/>
    <ProductCard title = {"Mobile"} description={"This is description"} price={25000}  isStock={true}/>
    <ProductCard title = {"Watch"} description={"This is description"} price={8000}  isStock={false}/> */}

    <Products />

    <MoodTracker/>
  </StrictMode>,
)
