import { Box, Button, Image, ListItem, UnorderedList } from '@chakra-ui/react'
import React from 'react'

export const HomePageSliderFour = () => {
    return (
        <Box maxW='100%' display='flex' justifyContent='space-between' p={5} justifyItems='center'>
            <Box>
                <UnorderedList fontSize='1.125rem' fontWeight='400' lineHeight='1.25' textAlign='justify' spacing={3}>
                    <ListItem>Free website builder</ListItem>
                    <ListItem>Online store</ListItem>
                    <ListItem>free templates</ListItem>
                    <ListItem>Mobile & SEO friendly</ListItem>
                    <ListItem>Web forms</ListItem>
                    <ListItem>Web widgets</ListItem>
                    <ListItem>CRM integration</ListItem>
                    <ListItem>Google Analytics integration</ListItem>
                </UnorderedList>
                <br />
                <Button
                    backgroundColor='#bdf300'
                    color='#262626'
                    fontSize='1.125rem'
                    fontWeight='700'
                    whiteSpace='nowrap'
                    letterSpacing='0.05rem'
                    borderRadius='30px'
                >START FOR FREE</Button>
            </Box>
            <Box width={'609px'} h='342px'>
                <Image
                    maxH={'100%'}
                    maxW="100%"
                    src='https://www.bitrix24.in/upload/optimizer/converted/images/content_en/screens/main/header_banner/sites.1366w.png.webp?1657634646000' />
            </Box>
        </Box>
    )
}
