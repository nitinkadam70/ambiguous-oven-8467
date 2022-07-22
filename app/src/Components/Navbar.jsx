import React from 'react'
import styles from "./Navbar.module.css"
import Bitrixlogo from '../Components/Images/bitrix24.png'
import En from "../Components/Images/enn.png"
import Login from "../Components/Images/loginn.png"
import { NavLink } from 'react-router-dom'

const Navbar = () => {
    return (
        <div>
            <div className={styles.main} >
                <div>
                    <NavLink to='/'><img src={Bitrixlogo} /></NavLink>
                </div>
                <div className={styles.mid}>
                    <NavLink to='/tools'><p className={styles.para}>TOOLS</p></NavLink>
                    <NavLink to='/pricing'><p className={styles.para}>PRICING</p></NavLink>
                    <NavLink to='/solutions'><p className={styles.para}>SOLUTIONS</p></NavLink>
                    <NavLink to='/partners'>  <p className={styles.para}>PARTNERS</p></NavLink>
                    <NavLink to='/apps'> < p className={
                        styles.para}>APPS</p></NavLink>
                    <NavLink to='/blogs'><p className={styles.para} >BLOG</p></NavLink>
                    <NavLink to='/support'><p className={styles.para}>SUPPORT</p></NavLink>
                </div >

                <div className={styles.last}>
                    <div>
                        <button className={styles.buttn}>START FOR FREE</button>
                    </div>
                    <div>
                        <NavLink to='login'><img className={styles.login} src={Login} /></NavLink>
                    </div>
                    <div>
                        <img className={styles.en} src={En} />
                    </div>
                </div >
            </div >
        </div >
    )
}

export default Navbar