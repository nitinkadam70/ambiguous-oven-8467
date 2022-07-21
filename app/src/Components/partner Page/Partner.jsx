import React from 'react'
import './partner.css';
import imgner from './select.png'
export const Partner = () => {
  return (
    <div>
        <div className="main-heading">
            <p>Bitrix Partners</p>
        </div>
        <div className="partner-nav">
            <div className='nav-sub-become'>Become a partner</div>
            <div  className='nav-sub-dir'>Partner directory</div>
            <div  className='nav-sub-login'>Partner Login</div>
        </div>
        <div>
            <div className='mid-heading'><p>Bitrix Partners can help you create and manage your Bitrix24!</p></div>
            <div className='mid-p'><p>Our Partners can help you select the optimal Bitrix24 subscription plan, and provide you with additional product customization services for the On-Premise version of Bitrix24! Check out our Partner Directory and select a Partner closest to your location! Feel free to contact our Partners directly or send a request via the form below.</p></div>
            <button className='mid-btn'>REQUEST ASSISTANCE FROM BITRIX PARTNERs</button>
        </div>
        <div>
           <img src={imgner}alt="" style={{marginTop:'35px',height:'130px'}} />
        </div>
        <div className="mid-box">
            <div>
               <p className="mid-box-title">Rajlaxmi Solutions Private Limited</p>
              <div className="mid-box-gold"> <p className='mid-gold-title' >GOLD</p> <span className='mid-gold-p'>MUMBAI, DELHI, BANGALORE, CHENNAI, HYDERABAD, KOLKATTA, IN</span></div>
               <p>Established Bitrix Gold Partner, Credible SAP Partner,  Trusted Tally Certified Partner Skill India - Learn - Perform - Earn Your Business success at Rajlaxmi World, Happy to aid you on Sale, Support.</p>
            </div>
            <div>
               <p className="mid-box-title">All CAD Services Private Limited</p>
              <div className="mid-box-gold"> <p className='mid-gold-title'>GOLD</p> <span className='mid-gold-p'>MUMBAI, DELHI, BANGALORE, CHENNAI, HYDERABAD, KOLKATTA, IN</span></div>
               <p className="mid-box-p" >Established Bitrix Gold Partner, Credible SAP Partner,  Trusted Tally Certified Partner Skill India - Learn - Perform - Earn Your Business success at Rajlaxmi World, Happy to aid you on Sale, Support.</p>
            </div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
        </div>
    </div>
  )
}
