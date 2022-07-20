import React from 'react'
import "./navbar.css"
import Bitrixlogo from "./bitrix24.png"
// import Login from "./loginn.png"
import En from "./enn.png"
import Login from "./loginn.png"

function navbar() {
  return (
    <div>
        <div className="main" >
        <div>
            <img src={Bitrixlogo}/>
        </div>
         <div className="mid">
            <p className='para'>TOOLS</p>
            <p className='para'>PRICING</p>
            <p className='para'>SOLUTIONS</p>
            <p className='para'>PARTNERS</p>
            <p className='para'>APPS</p>
            <p className='para' >BLOG</p>
            <p className='para'>SUPPORT</p>
        </div>

        <div className="last">
            <button className='buttn'>START FOR FREE</button>
            <img  className="login" src={Login}/>
            <img  className="en" src={En}/>

        </div>

        </div>
       
    </div>
  )
}

export default navbar