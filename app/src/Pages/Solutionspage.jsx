import { Heading, VStack } from '@chakra-ui/react'
import React from 'react'
import SolutionPageComponents from '../Components/SolutionPageComponents'
import styles from "../Styles/Blog.module.css"

const Solutionspage = () => {
    return (
        <div>
            <div id={styles.firstBox}>
                <p>Bitrix24 Solutions</p>
            </div>
            <br />
            <br />
            <VStack>
                <Heading fontWeight='200' letterSpacing='-1px' color='#262626' lineHeight='1.2' fontSize="2.625rem">
                    Bitrix24 Solutions
                </Heading>
            </VStack>
            <br />
            <SolutionPageComponents />
        </div>
    )
}

export default Solutionspage