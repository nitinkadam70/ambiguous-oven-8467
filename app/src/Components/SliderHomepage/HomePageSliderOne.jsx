import { Box, Button, Image, ListItem, UnorderedList } from '@chakra-ui/react'
import React from 'react'

export const HomePageSliderOne = () => {
    return (
        <Box maxW='100%' display='flex' justifyContent='space-between' p={5} justifyItems='center'>
            <Box>
                <UnorderedList fontSize='1.125rem' fontWeight='400' lineHeight='1.25' textAlign='justify' spacing={3}>
                    <ListItem>Chats & video calls</ListItem>
                    <ListItem>Online meetings</ListItem>
                    <ListItem>Feed</ListItem>
                    <ListItem>Calender</ListItem>
                    <ListItem>Online documents</ListItem>
                    <ListItem>Drive</ListItem>
                    <ListItem>Webmail</ListItem>
                    <ListItem>Workgroups</ListItem>
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
                    src='https://www.bitrix24.in/upload/optimizer/converted/images/content_en/screens/main/header_banner/workspace.1366w.png.webp?1657634642000' />
            </Box>
        </Box>
    )
}
