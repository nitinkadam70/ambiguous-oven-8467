import React from 'react'
import './partner.css';
import imgner from './select.png'
export const Partner = () => {
    const [show2,setShow2]=React.useState(false)
    const [show1,setShow1]=React.useState(false)
    const [show,setShow]=React.useState(false)
    const [show3,setShow3]=React.useState(false)
    const [show4,setShow4]=React.useState(false)
    const [show5,setShow5]=React.useState(false)
    const [show6,setShow6]=React.useState(false)
    const [show7,setShow7]=React.useState(false)
    const [show8,setShow8]=React.useState(false)
  const  handleMouse1=()=>{
    console.log("true")
    setShow1((prev)=> !prev)
  }
  const  handleMouse2=()=>{
    console.log("true")
    setShow2((prev)=> !prev)
  }
  const  handleMouse3=()=>{
    console.log("true")
    setShow3((prev)=> !prev)
  }
  const  handleMouse4=()=>{
    console.log("true")
    setShow4((prev)=> !prev)
  }
  const  handleMouse5=()=>{
    console.log("true")
    setShow5((prev)=> !prev)
  }
  const  handleMouse6=()=>{
    console.log("true")
    setShow6((prev)=> !prev)
  }
  const  handleMouse7=()=>{
    console.log("true")
    setShow7((prev)=> !prev)
  }
  const  handleMouse=()=>{
    console.log("true")
    setShow((prev)=> !prev)
  }
  const  handleMouse8=()=>{
    console.log("true")
    setShow8((prev)=> !prev)
  }
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
        <div style={{textAlign: 'center'}}>
            <div className='mid-heading'><p>Bitrix Partners can help you create and manage your Bitrix24!</p></div>
            <div className='mid-p'><p>Our Partners can help you select the optimal Bitrix24 subscription plan, and provide you with additional product customization services for the On-Premise version of Bitrix24! Check out our Partner Directory and select a Partner closest to your location! Feel free to contact our Partners directly or send a request via the form below.</p></div>
            <div style={{textAlign: 'center'}}><button className='mid-btn'>REQUEST ASSISTANCE FROM BITRIX PARTNERs</button></div>
            
        </div>
        <div>
           <img  src={imgner}alt="" style={{marginTop:'35px',height:'130px'}} />
        </div>
        <div className="mid-box">
            <div className="mid-box-div"  onMouseEnter={handleMouse1} onMouseLeave={handleMouse1}>
                <div className="mid-img">
                    <img className="mid-in-img" src="https://www.bitrix24.com/bitrix/components/bx/b24.partner.list/templates/.default/images/authorized_training_provider.png" alt="" />
                    <img className="mid-in-img" src="https://www.bitrix24.com/bitrix/components/bx/b24.partner.list/templates/.default/images/live_chat.png" alt="" />
                    <img className="mid-in-img" src="https://www.bitrix24.com/bitrix/components/bx/b24.partner.list/templates/.default/images/power_seller.png" alt="" />
                </div>
               <p className="mid-box-title">BR 24</p>
              <div className="mid-box-gold"> <p className='mid-gold-title' >GOLD</p> <span className='mid-gold-p'>CHENNAI, HYDERABAD,PUNE,MUMBAI, DELHI, BANGALORE, </span></div>
               <p  className="mid-box-p">"Br" de Brasil e "24" de Bitrix24. +850 projetos Bitrix24 executados, +1.200 clientes ativos. Geramos valor e resultado para empresas de todos os tamanhos através de serviços e metodologias exclusivas</p>
               {show1?<button className="mid-btn">Send Request</button>:""}
            </div>
            <div className="mid-box-div"  onMouseEnter={handleMouse2} onMouseLeave={handleMouse2}>
                <div className="mid-img">
                    <img className="mid-in-img" src="https://www.bitrix24.com/bitrix/components/bx/b24.partner.list/templates/.default/images/authorized_training_provider.png" alt="" />
                    <img className="mid-in-img" src="https://www.bitrix24.com/bitrix/components/bx/b24.partner.list/templates/.default/images/live_chat.png" alt="" />
                    <img className="mid-in-img" src="https://www.bitrix24.com/bitrix/components/bx/b24.partner.list/templates/.default/images/power_seller.png" alt="" />
                </div>
               <p className="mid-box-title">ASESORES-E</p>
              <div className="mid-box-gold"> <p className='mid-gold-title'>GOLD</p> <span className='mid-gold-p'> DELHI, BANGALORE, CHENNAI, HYDERABAD, KOLKATTA, IN</span></div>
               <p  className="mid-box-p" >asesores-e: más de 10 años de experiencia como socios Bitrix, implementaciones atendidas en todos los países hispano hablantes y un objetivo: facilitar la adopción de Bitrix24 en su organización.</p>
               {show2?<button className="mid-btn">Send Request</button>:""}

            </div>
            <div className="mid-box-div"  onMouseEnter={handleMouse3} onMouseLeave={handleMouse3}>
                <div className="mid-img">
                    <img className="mid-in-img" src="https://www.bitrix24.com/bitrix/components/bx/b24.partner.list/templates/.default/images/authorized_training_provider.png" alt="" />
                    <img className="mid-in-img" src="https://www.bitrix24.com/bitrix/components/bx/b24.partner.list/templates/.default/images/live_chat.png" alt="" />
                    <img className="mid-in-img" src="https://www.bitrix24.com/bitrix/components/bx/b24.partner.list/templates/.default/images/power_seller.png" alt="" />
                </div>
               <p className="mid-box-title">CRM YHINK</p>
              <div className="mid-box-gold"> <p className='mid-gold-title' >GOLD</p> <span className='mid-gold-p'>INDORE BANGALORE, CHENNAI, HYDERABAD,MUMBAI, DELHI,</span></div>
               <p  className="mid-box-p">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Porro eaque ullam et quo? Soluta necessitatibus similique consectetur odit vel eaque quos hic. Praesentium aspernatur soluta molestias ut assumenda dolor voluptatem?</p>
                    {show3?<button className="mid-btn">Send Request</button>:""}
            </div>
            <div className="mid-box-div"  onMouseEnter={handleMouse8} onMouseLeave={handleMouse8}>
                <div className="mid-img">
                    <img className="mid-in-img" src="https://www.bitrix24.com/bitrix/components/bx/b24.partner.list/templates/.default/images/authorized_training_provider.png" alt="" />
                    <img className="mid-in-img" src="https://www.bitrix24.com/bitrix/components/bx/b24.partner.list/templates/.default/images/live_chat.png" alt="" />
                    <img className="mid-in-img" src="https://www.bitrix24.com/bitrix/components/bx/b24.partner.list/templates/.default/images/power_seller.png" alt="" />
                </div>
               <p className="mid-box-title">VITRA NET</p>
              <div className="mid-box-gold"> <p className='mid-gold-title'>GOLD</p> <span className='mid-gold-p'>MUMBAI, DELHI, BANGALORE, CHENNAI, HYDERABAD, KOLKATTA, IN</span></div>
               <p  className="mid-box-p" >Lorem ipsum dolor, sit amet consectetur adipisicing elit. Porro eaque ullam et quo? Soluta necessitatibus similique consectetur odit vel eaque quos hic. Praesentium aspernatur soluta molestias ut assumenda dolor voluptatem?</p>
               {show8?<button className="mid-btn">Send Request</button>:""}

            </div>
            <div className="mid-box-div"  onMouseEnter={handleMouse4} onMouseLeave={handleMouse4}>
                <div className="mid-img">
                    <img className="mid-in-img" src="https://www.bitrix24.com/bitrix/components/bx/b24.partner.list/templates/.default/images/authorized_training_provider.png" alt="" />
                    <img className="mid-in-img" src="https://www.bitrix24.com/bitrix/components/bx/b24.partner.list/templates/.default/images/live_chat.png" alt="" />
                    <img className="mid-in-img" src="https://www.bitrix24.com/bitrix/components/bx/b24.partner.list/templates/.default/images/power_seller.png" alt="" />
                </div>
               <p className="mid-box-title">INTREE-FACE</p>
              <div className="mid-box-gold"> <p className='mid-gold-title' >GOLD</p> <span className='mid-gold-p'>MUMBAI, DELHI, BANGALORE, CHENNAI, HYDERABAD, KOLKATTA, IN</span></div>
               <p  className="mid-box-p">sit amet consectetur adipisicing elit. Porro eaque ullam et quo? Soluta necessitatibus similique consectetur odit vel eaque quos hic. Praesentium aspernatur soluta molestias ut assumenda dolor voluptatem?</p>
               {show4?<button className="mid-btn">Send Request</button>:""}

            </div>
            <div className="mid-box-div"  onMouseEnter={handleMouse1} onMouseLeave={handleMouse1}>
                <div className="mid-img">
                    <img className="mid-in-img" src="https://www.bitrix24.com/bitrix/components/bx/b24.partner.list/templates/.default/images/authorized_training_provider.png" alt="" />
                    <img className="mid-in-img" src="https://www.bitrix24.com/bitrix/components/bx/b24.partner.list/templates/.default/images/live_chat.png" alt="" />
                    <img className="mid-in-img" src="https://www.bitrix24.com/bitrix/components/bx/b24.partner.list/templates/.default/images/power_seller.png" alt="" />
                </div>
               <p className="mid-box-title">NEXT TECH CONSULTING</p>
              <div className="mid-box-gold"> <p className='mid-gold-title'>GOLD</p> <span className='mid-gold-p'>MUMBAI, DELHI, BANGALORE, CHENNAI, HYDERABAD, KOLKATTA, IN</span></div>
               <p  className="mid-box-p" >Established Bitrix Gold Partner, Credible SAP Partner,  Trusted Tally Certified Partner Skill India - Learn - Perform - Earn Your Business success at Rajlaxmi World, Happy to aid you on Sale, Support.</p>
               {show1?<button className="mid-btn">Send Request</button>:""}

            </div>
            <div className="mid-box-div"  onMouseEnter={handleMouse5} onMouseLeave={handleMouse5}>
                <div className="mid-img">
                    <img className="mid-in-img" src="https://www.bitrix24.com/bitrix/components/bx/b24.partner.list/templates/.default/images/authorized_training_provider.png" alt="" />
                    <img className="mid-in-img" src="https://www.bitrix24.com/bitrix/components/bx/b24.partner.list/templates/.default/images/live_chat.png" alt="" />
                    <img className="mid-in-img" src="https://www.bitrix24.com/bitrix/components/bx/b24.partner.list/templates/.default/images/power_seller.png" alt="" />
                </div>
               <p className="mid-box-title">AKARASOFT</p>
              <div className="mid-box-gold"> <p className='mid-gold-title' >GOLD</p> <span className='mid-gold-p'>MUMBAI, DELHI, BANGALORE, CHENNAI, HYDERABAD, KOLKATTA, IN</span></div>
               <p  className="mid-box-p"> Porro eaque ullam et quo? Soluta necessitatibus similique consectetur odit vel eaque quos hic. Praesentium aspernatur soluta molestias ut assumenda dolor voluptatem?</p>
               {show5?<button className="mid-btn">Send Request</button>:""}

            </div>
            <div className="mid-box-div"  onMouseEnter={handleMouse} onMouseLeave={handleMouse}>
                <div className="mid-img">
                    <img className="mid-in-img" src="https://www.bitrix24.com/bitrix/components/bx/b24.partner.list/templates/.default/images/authorized_training_provider.png" alt="" />
                    <img className="mid-in-img" src="https://www.bitrix24.com/bitrix/components/bx/b24.partner.list/templates/.default/images/live_chat.png" alt="" />
                    <img className="mid-in-img" src="https://www.bitrix24.com/bitrix/components/bx/b24.partner.list/templates/.default/images/power_seller.png" alt="" />
                </div>
               <p className="mid-box-title">HIRSCHTEC DCS</p>
              <div className="mid-box-gold"> <p className='mid-gold-title'>GOLD</p> <span className='mid-gold-p'>MUMBAI, DELHI, BANGALORE, CHENNAI, HYDERABAD, KOLKATTA, IN</span></div>
               <p  className="mid-box-p" >Established Bitrix Gold Partner, Credible SAP Partner,  Trusted Tally Certified Partner Skill India - Learn - Perform - Earn Your Business success at Rajlaxmi World, Happy to aid you on Sale, Support.</p>
               {show?<button className="mid-btn">Send Request</button>:""}

            </div>
            <div className="mid-box-div"  onMouseEnter={handleMouse} onMouseLeave={handleMouse}>
                <div className="mid-img">
                    <img className="mid-in-img" src="https://www.bitrix24.com/bitrix/components/bx/b24.partner.list/templates/.default/images/authorized_training_provider.png" alt="" />
                    <img className="mid-in-img" src="https://www.bitrix24.com/bitrix/components/bx/b24.partner.list/templates/.default/images/live_chat.png" alt="" />
                    <img className="mid-in-img" src="https://www.bitrix24.com/bitrix/components/bx/b24.partner.list/templates/.default/images/power_seller.png" alt="" />
                </div>
               <p className="mid-box-title">ALKEM</p>
              <div className="mid-box-gold"> <p className='mid-gold-title' >GOLD</p> <span className='mid-gold-p'>MUMBAI, DELHI, BANGALORE, CHENNAI, HYDERABAD, KOLKATTA, IN</span></div>
               <p  className="mid-box-p">sit amet consectetur adipisicing elit. Porro eaque ullam et quo? Soluta necessitatibus similique consectetur odit vel eaque quos hic. Praesentium aspernatur soluta molestias ut assumenda dolor voluptatem?</p>
               {show?<button className="mid-btn">Send Request</button>:""}

            </div>
            <div className="mid-box-div"  onMouseEnter={handleMouse1} onMouseLeave={handleMouse1}>
                <div className="mid-img">
                    <img className="mid-in-img" src="https://www.bitrix24.com/bitrix/components/bx/b24.partner.list/templates/.default/images/authorized_training_provider.png" alt="" />
                    <img className="mid-in-img" src="https://www.bitrix24.com/bitrix/components/bx/b24.partner.list/templates/.default/images/live_chat.png" alt="" />
                    <img className="mid-in-img" src="https://www.bitrix24.com/bitrix/components/bx/b24.partner.list/templates/.default/images/power_seller.png" alt="" />
                </div>
               <p className="mid-box-title">LINXYS GmbH</p>
              <div className="mid-box-gold"> <p className='mid-gold-title'>GOLD</p> <span className='mid-gold-p'>MUMBAI, DELHI, BANGALORE, CHENNAI, HYDERABAD, KOLKATTA, IN</span></div>
               <p  className="mid-box-p" >sit amet consectetur adipisicing elit. Porro eaque ullam et quo? Soluta necessitatibus similique consectetur odit vel eaque quos hic. Praesentium aspernatur soluta molestias ut assumenda dolor voluptatem?</p>
               {show1?<button className="mid-btn">Send Request</button>:""}

            </div>
            <div className="mid-box-div"  onMouseEnter={handleMouse6} onMouseLeave={handleMouse6}>
                <div className="mid-img">
                    <img className="mid-in-img" src="https://www.bitrix24.com/bitrix/components/bx/b24.partner.list/templates/.default/images/authorized_training_provider.png" alt="" />
                    <img className="mid-in-img" src="https://www.bitrix24.com/bitrix/components/bx/b24.partner.list/templates/.default/images/live_chat.png" alt="" />
                    <img className="mid-in-img" src="https://www.bitrix24.com/bitrix/components/bx/b24.partner.list/templates/.default/images/power_seller.png" alt="" />
                </div>
               <p className="mid-box-title">RADUNZ COMERCIO E SERVIC</p>
              <div className="mid-box-gold"> <p className='mid-gold-title' >GOLD</p> <span className='mid-gold-p'>MUMBAI, DELHI, BANGALORE, CHENNAI, HYDERABAD, KOLKATTA, IN</span></div>
               <p  className="mid-box-p">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Porro eaque ullam et quo? Soluta necessitatibus similique consectetur odit vel eaque quos hic. Praesentium aspernatur soluta molestias ut assumenda dolor voluptatem?</p>
               {show6?<button className="mid-btn">Send Request</button>:""}

            </div>
            <div className="mid-box-div"  onMouseEnter={handleMouse7} onMouseLeave={handleMouse7}>
                <div className="mid-img">
                    <img className="mid-in-img" src="https://www.bitrix24.com/bitrix/components/bx/b24.partner.list/templates/.default/images/authorized_training_provider.png" alt="" />
                    <img className="mid-in-img" src="https://www.bitrix24.com/bitrix/components/bx/b24.partner.list/templates/.default/images/live_chat.png" alt="" />
                    <img className="mid-in-img" src="https://www.bitrix24.com/bitrix/components/bx/b24.partner.list/templates/.default/images/power_seller.png" alt="" />
                </div>
               <p className="mid-box-title">WEbEE LIMITED</p>
              <div className="mid-box-gold"> <p className='mid-gold-title'>GOLD</p> <span className='mid-gold-p'>MUMBAI, DELHI, BANGALORE, CHENNAI, HYDERABAD, KOLKATTA, IN</span></div>
              <p  className="mid-box-p" >Lorem ipsum dolor, sit amet consectetur adipisicing elit. Porro eaque ullam et quo? Soluta necessitatibus similique consectetur odit vel eaque quos hic. Praesentium aspernatur soluta molestias ut assumenda dolor voluptatem?</p>
              {show7?<button className="mid-btn">Send Request</button>:""}

              
            </div>
          
        </div>
    </div>
  )
}