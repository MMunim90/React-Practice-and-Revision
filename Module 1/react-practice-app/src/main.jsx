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



    <Greetings greet={"Good morning"} name={"rahim"} greet_emoji={"🖐️"}/>
    <Greetings greet={"Good afternoon"} name={"karim"} greet_emoji={"🤙"}/>
    <Greetings greet={"Good evening"} name={"fahim"} greet_emoji={"🙋‍♂️"}/>
    <Greetings greet={"Good night"} name={"joshim"} greet_emoji={"🙋"}/>
    <Greetings/>


    <ProductCard title = {"Laptop"} price={65000}  isStock={true}/>
    <ProductCard title = {"Mobile"} price={25000}  isStock={true}/>
    <ProductCard title = {"Watch"} price={8000}  isStock={false}/>
  </StrictMode>,
)
