import React from 'react'
import "./footer.css"
import app from "./app.png"
import play from "./play.png"
import social from "./social.png"
import input from "./input.png"

const footer = () => {
  return (
     <div className='mainofmain'>
    <div className="main2">
        <div className='row'>
            <p className='p2'>BITRIX</p>
            <p className='p'>Bitrix24</p>
             <p className='p'>Pricing</p>
             <p className='p' >Media kit</p>
             <p className='p'>Contact us</p>
             <p className='p'>In the press</p>

        </div>
        <div>
        <p className='p2'>SUPPORT</p>
        <p className='p' >Helpdesk</p>
        <p className='p'>Webinars</p>
        <p className='p'>How-to videos</p>
             <p className='p'>Submit a ticket</p>
             <p className='p'>Schedule a demo</p>
             <p className='p'>Bitrix24 Status page</p>
        </div>
        <div>
        <p className='p2'>RESOURCES</p>
        <p className='p' >Blog</p>
        <p className='p'>Solutions</p>
        <p className='p' >Testimonials</p>
             <p className='p'>Alternatives</p>
             <p className='p'>Uses</p>
             <p className='p' >Guides</p>
             <p className='p'>Research</p>
        </div>
        <div>
        <p className='p2'>ON-PREMISE</p>
        <p className='p'>On-premise edition</p>
        <p className='p'>Download</p>
        <p className='p'>Documentation</p>
        </div>
        <div>
        <p className='p2'>APPS</p>
        <p className='p'>Market</p>
        <p className='p'>Mobile app</p>
        <p className='p'>Desktop app</p>
             <p className='p'>API/developers</p>
        </div>
        <div>
        <p className='p2'>PARTNERS</p>
        <p className='p'>Find a partner</p>
        <p className='p'>Become a partner</p>
        <p className='p'>Partner login</p>
        </div>
        
    </div>
    <div className='hr'>
     <hr/>
    </div>
    <div className='sidemain'>
<div className='side'>
     <p className='sidep'>TERMS</p>
     <p className='sidep'>PRIVACY</p>
     <p className='sidep'>GDPR</p>
     <p className='sidep' >SECURITY</p>
     <p className='sidep'>ABUSE</p>
     <p className='sidep'>RULESFORBITRIX24.SITES</p>
</div>
<div>
     <img src={app}/>
     <img src={play}/>
</div>
    </div>

    <div className='sidemain2'>
     <div>
          <p className='sidep'>Copyright © 2022 Bitrix24</p>
     </div>
     <div>
          <img src={social}/>
          <img src={input}/>
     </div>
    </div>

    </div>
  )
}

export default footer