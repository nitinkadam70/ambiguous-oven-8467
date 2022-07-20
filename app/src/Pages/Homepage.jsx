import { Box, Button, Heading, ScaleFade, useDisclosure } from '@chakra-ui/react'
import React from 'react'
import { useState } from 'react'
import { HomePageSliderOne } from '../Components/SliderHomepage/HomePageSliderOne'
import { HomePageSliderFive } from '../Components/SliderHomepage/SliderFive'
import { HomePageSliderFour } from '../Components/SliderHomepage/SliderFour'
import { HomePageSliderThree } from '../Components/SliderHomepage/SliderTHree'
import { HomePageSliderTwo } from '../Components/SliderHomepage/SLiderTwo'


const Homepage = () => {
    const [showSlide, setShowSlide] = useState(1)

    const handleShow = (slide) => {
        setShowSlide(slide);

    }

    return (
        <Box maxW={'100%'}>
            <Box
                minW={'992px'}
                backgroundPosition='70% 20%'
                padding='53px 15px 44px'
                backgroundImage={'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTQwNiIgaGVpZ2h0PSIxMTk2IiBmaWxsPSJub25lIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxwYXRoIG9wYWNpdHk9Ii4xNjIiIGZpbGwtcnVsZT0iZXZlbm9kZCIgY2xpcC1ydWxlPSJldmVub2RkIiBkPSJNOTI5LjQ2OSAxMTUuMDMyYzk1LjUzMSAxNy42MzEgMTcxLjcxMSAzNC45NDUgMjU2LjEyMSA3Ny40MDggOTYuMzIgNDguNDU2IDE0OS4yIDEzNy4yNTkgMTY2LjYzIDIwNy4wMDMgMTcuNDMgNjkuNzQ1IDEyLjE4IDE1OC4wNy00NC40IDIzMy4xODctNTAuNzYgNjcuMzcyLTEwMS42OSA5OC4wNjYtMTg3LjY2IDEzNC44MDYtODUuNDIgMzYuNTAzLTE4MC40NjEgNzEuODE5LTI3Ny4zIDUyLjk3NS05My45OS0xOC4yODctMTQyLjE0Ni0xMDEuNzM5LTIyMC4zOTgtMTQ5LjgxOC05My42MDktNTcuNTEzLTI2NC4zNTEtNjUuOTUxLTI4Mi4wMDctMTU4Ljg1Ni0xOC4wMTktOTQuODI0IDE2MS43ODktMTI1Ljg3MiAyMTEuOTU2LTIwOS43NjYgNDcuNDM4LTc5LjMzMi0yNi4xMjMtMjA5LjQ4IDY2LjA3LTI1NS4xODggOTAuODItNDUuMDI3IDIwMy44NjEgNDguNDc3IDMxMC45ODggNjguMjQ5eiIgZmlsbD0iIzJGQzZGNiIvPjxwYXRoIG9wYWNpdHk9Ii4xODYiIGZpbGwtcnVsZT0iZXZlbm9kZCIgY2xpcC1ydWxlPSJldmVub2RkIiBkPSJNNjE4LjMzNSAxMDg3LjA5Yy05MS41MyAzNC40NC0xOTIuNjQxIDg4LjI1LTI4Mi42MTkgNjYuNDUtOTAuMDEyLTIxLjgxLTEwNy45OTgtMTA2LjE0LTE0NC4yNTQtMTY5Ljg2LTMzLjc1Ni01OS4zMjctNzcuNDQ4LTExOS4wODQtNTguMjczLTE4Ni4wNzkgMTguOTktNjYuMzUxIDgyLjk1Ny0xMjYuNTA5IDE1OS43NTQtMTY4LjQ4MSA2OS4wMjQtMzcuNzI0IDE1NC40NDMtNDIuMzc0IDIzNi4xOS00Ny45MTggNzAuMjY4LTQuNzY2IDEzNC4zNTYgNS40NTYgMTk5LjkzMSAxOC4zMzcgNzcuMDg3IDE1LjE0MiAxNjEuNzQxIDIxLjI4NiAyMTQuNTUgNjMuMDc5IDYxLjY4NiA0OC44MTYgMTI5LjY0NiAxMTUuMzg2IDk4LjIxNiAxODQuNDQzLTMxLjg5IDcwLjA3MS0xNjAuNTg5IDg1LjY1NC0yNDIuMjExIDEzMS45MTUtNjMuMTI5IDM1Ljc4NC0xMTAuOTg5IDgxLjY2NC0xODEuMjg0IDEwOC4xMTR6IiBmaWxsPSIjQjNFNjAwIi8+PHBhdGggb3BhY2l0eT0iLjEyMiIgY2xpcC1ydWxlPSJldmVub2RkIiBkPSJNMzY2Ljk4OCA5MTcuMTI0Yy03MS45MDIgMTAuNjQ2LTE0Ni4xNzctMTEuMDM2LTIwNS4xNjgtNDUuMTA4LTU3Ljk1Mi0zMy40NzItOTAuODQzLTg2LjIxLTExNS45NDMtMTQwLjM2QzIwLjQwNSA2NzYuNzA3LTEuNTc4IDYxOC4wMDggMTcuNTkgNTYwLjg3M2MxOS4zNTktNTcuNzAxIDczLjE3MS0xMDIuOTA0IDEzMi4yMTgtMTM5LjAwMSA1OC4wNTQtMzUuNDg5IDEyNS41MzMtNjIuNDc2IDE5Ny42OTctNjIuNjg0IDcwLjU0LS4yMDMgMTM0LjIwNyAyOC4xNSAxOTAuODgzIDYxLjU2NyA1NC44MTggMzIuMzIxIDExNCA3MC4yODYgMTI1LjE3NSAxMjQuNzg1IDEwLjczOCA1Mi4zNjUtNDUuMjM4IDk2LjI2LTY5LjY2MyAxNDUuOTMxLTIxLjI3OCA0My4yNzEtMjcuNzA5IDg5Ljg4Ny02NC4wODIgMTI2LjA1OC00NC4wNTkgNDMuODE1LTk0LjYwNSA4OS40OTQtMTYyLjgzIDk5LjU5NXoiIHN0cm9rZT0iIzU1RDBFMCIgc3Ryb2tlLXdpZHRoPSIzIi8+PC9zdmc+'}
            >
                <Heading
                    fontSize={'2.875rem'}
                    fontWeight='700'
                    lineHeight='1.2'
                    letterSpacing='-1px'
                    textAlign='center'
                    color='#262626'
                >Bitrix24. Your ultimate workspace.</Heading>
                <br />
                <Box maxW='997px'
                    margin='auto'
                >

                    <Box

                        display='flex'
                        alignItems='center'
                        justifyContent='space-around'
                        maxWidth='100%'
                        margin='0 auto'
                        borderBottom={'2px solid rgba(0,83,170,0.2)'}
                    >
                        <Button onMouseEnter={() => handleShow(1)} borderRadius='none' _hover={{ borderBottom: "3px solid rgba(0,90,170,2)" }} fontWeight='600' lineHeight='1' whiteSpace='nowrap' fontSize='1.3125rem' border='none' colorScheme='blue' variant='outline'>Collaboration</Button>
                        <Button onMouseEnter={() => handleShow(2)} borderRadius='none' _hover={{ borderBottom: "3px solid rgba(0,90,170,2)" }} fontWeight='600' lineHeight='1' whiteSpace='nowrap' fontSize='1.3125rem' border='none' colorScheme='blue' variant='outline'>CRM</Button>
                        <Button onMouseEnter={() => handleShow(3)} borderRadius='none' _hover={{ borderBottom: "3px solid rgba(0,90,170,2)" }} fontWeight='600' lineHeight='1' whiteSpace='nowrap' fontSize='1.3125rem' border='none' colorScheme='blue' variant='outline'>Task & Projects</Button>
                        <Button onMouseEnter={() => handleShow(4)} borderRadius='none' _hover={{ borderBottom: "3px solid rgba(0,90,170,2)" }} fontWeight='600' lineHeight='1' whiteSpace='nowrap' fontSize='1.3125rem' border='none' colorScheme='blue' variant='outline'>Sites & Stores</Button>
                        <Button onMouseEnter={() => handleShow(5)} borderRadius='none' _hover={{ borderBottom: "3px solid rgba(0,90,170,2)" }} fontWeight='600' lineHeight='1' whiteSpace='nowrap' fontSize='1.3125rem' border='none' colorScheme='blue' variant='outline'>HR & Automations</Button>
                    </Box>


                    <Box >
                        {showSlide === 1 && <HomePageSliderOne />}
                        {showSlide === 2 && < HomePageSliderTwo />}
                        {showSlide === 3 && <HomePageSliderThree />}
                        {showSlide === 4 && <HomePageSliderFour />}
                        {showSlide === 5 && <HomePageSliderFive />}
                    </Box>


                </Box>

            </Box>
        </Box>
    )
}

export default Homepage