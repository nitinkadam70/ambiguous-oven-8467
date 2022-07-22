import React from 'react'
import HomepagePricing from '../Components/HomepagePricing'
import styles from "../Styles/Blog.module.css"

const PricingPage = () => {
    return (
        <div>
            <div id={styles.firstBox}>
                <p>Pricing</p>
            </div>
            <br />
            <HomepagePricing />
        </div>
    )
}

export default PricingPage