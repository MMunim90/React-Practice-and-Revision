import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Welcome from './Welcome.jsx'
import Greetings from './Greetings.jsx'
import ProductCard from './ProductCard.jsx'

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


    <ProductCard title = {"Laptop"} price={65000}  isStock={true}/>
    <ProductCard title = {"Mobile"} price={25000}  isStock={true}/>
    <ProductCard title = {"Watch"} price={8000}  isStock={false}/>
  </StrictMode>,
)
