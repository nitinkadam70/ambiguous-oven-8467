import { ReactNode } from 'react';
import {
    Box,
    Stack,
    HStack,
    Heading,
    Text,
    VStack,
    useColorModeValue,
    List,
    ListItem,
    ListIcon,
    Button,
    Flex,
    Badge,
    Spacer,
    Image,
} from '@chakra-ui/react';
import { ImFire } from 'react-icons/im';


function PriceWrapper({ children }) {
    return (
        <Box
            mb={4}
            shadow="base"
            borderWidth="1px"
            alignSelf={{ base: 'center', lg: 'flex-start' }}
            borderColor={useColorModeValue('gray.200', 'gray.500')}
            borderRadius={'xl'}>
            {children}
        </Box>
    );
}

export default function HomepagePricing() {
    return (
        <Box py={12}>
            <VStack spacing={2} textAlign="center">
                <Heading fontWeight='400' letterSpacing='-1px' color='#262626' lineHeight='1.2' fontSize="2.625rem">
                    How much is Bitrix24?
                </Heading>
                <br />
                <Box display='flex' gap='20%' justifyContent='space-between' justifyItems='center'>
                    <Box display='flex' justifyItems='center'>
                        <Text fontSize='12px' fontWeight='400' lineHeight='1.2' color='#525c69'>
                            Price per month when paying for
                        </Text>
                        <Button borderRadius='20px' fontWeight='200' fontSize={'14px'} color='black' border='2px solid blue' variant='outline'> 1 Year <Badge colorScheme='yellow'>-20%</Badge></Button>
                    </Box>
                    <Box display='flex' justifyItems='center'>
                        <Text fontSize='12px' fontWeight='400' lineHeight='1.2' color='#525c69'>
                            Renew plans bought before August 1,2021
                        </Text>
                        <Button borderRadius='20px' fontWeight='200' fontSize={'14px'} color='black' border='2px solid blue' variant='outline'> Archived plans</Button>
                    </Box>
                </Box>
            </VStack>
            <Stack
                p='0px 50px'
                direction={{ base: 'column', md: 'row' }}
                textAlign="center"
                justify="center"
                spacing={{ base: 4, lg: 10 }}
                py={10}>
                <PriceWrapper>
                    <Box bg='rgba(169,212,0,0.23)' py={4} px={12} >
                        <Text fontWeight="500" fontSize="20px" lineHeight='1'>
                            Free
                        </Text>
                        <br />
                        <Text opacity='.4' fontSize="10px" fontWeight="600" lineHeight={'1.2'}>
                            Start work online and sell more with CRM
                        </Text>
                    </Box>
                    <VStack
                        bg={useColorModeValue('gray.50', 'gray.700')}
                        py={4}
                        borderBottomRadius={'xl'}>
                        <List spacing={5} textAlign="center" px={12}>
                            <ListItem>
                                <ListIcon as={ImFire} color="red" />
                                unlimited users
                            </ListItem>
                            <ListItem color='#7c9b00' fontSize='21px' fontWeight={500} >
                                100% free
                            </ListItem>
                            <Button bg='#a3cd00' fontSize='12px' borderRadius='20px' p='0px 20px' color='white'>REGISTER FREE</Button>
                            <ListItem fontWeight='600'>
                                5 GB
                            </ListItem>
                        </List>
                        <hr color='black' />
                        <Box w="80%" pt={7} >
                            <Box display='flex' gap='5px'>
                                <Text textAlign='left' fontWeight="500" fontSize="16px" lineHeight='1'>
                                    Collaborations
                                </Text>
                                <Image src='data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjkiIGhlaWdodD0iMTMiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggb3BhY2l0eT0iLjY0NCIgZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik02IDFhNiA2IDAgMSAwIDAgMTJoMTdhNiA2IDAgMCAwIDAtMTJINnptMCAxYTUgNSAwIDAgMCAwIDEwaDE3YTUgNSAwIDAgMCAwLTEwSDZ6IiBmaWxsPSIjN0NBOTU5Ii8+PHBhdGggb3BhY2l0eT0iLjkiIGQ9Ik0zIDdhMyAzIDAgMCAxIDMtM2gyLjk0YS4wNi4wNiAwIDAgMSAuMDYuMDZ2NS44OGEuMDYuMDYgMCAwIDEtLjA2LjA2SDZhMyAzIDAgMCAxLTMtM3oiIGZpbGw9IiM1NzlGMUUiIGZpbGwtb3BhY2l0eT0iLjg4MyIvPjwvc3ZnPg==' />
                            </Box>
                            <br />
                            <Box
                                fontSize='12px'
                                fontWeight='600'
                                color="#525c69"
                                textAlign='justify'
                            >
                                <Text>Chat</Text>
                                <Text>HD Videocalls</Text>
                                <Text>Calendar</Text>
                                <Text>Company workspace</Text>
                                <Text>Feed</Text>
                                <Text>Knowledge base</Text>
                            </Box>
                            <br />
                            <Stack spacing={4}>
                                <Box display='flex' gap='5px'>
                                    <Text textAlign='left' fontWeight="500" fontSize="16px" lineHeight='1'>
                                        Task & projects
                                    </Text>
                                    <Image src='data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjkiIGhlaWdodD0iMTMiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggb3BhY2l0eT0iLjY0NCIgZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik02IDFhNiA2IDAgMSAwIDAgMTJoMTdhNiA2IDAgMCAwIDAtMTJINnptMCAxYTUgNSAwIDAgMCAwIDEwaDE3YTUgNSAwIDAgMCAwLTEwSDZ6IiBmaWxsPSIjN0NBOTU5Ii8+PHBhdGggb3BhY2l0eT0iLjkiIGQ9Ik0zIDdhMyAzIDAgMCAxIDMtM2gyLjk0YS4wNi4wNiAwIDAgMSAuMDYuMDZ2NS44OGEuMDYuMDYgMCAwIDEtLjA2LjA2SDZhMyAzIDAgMCAxLTMtM3oiIGZpbGw9IiM1NzlGMUUiIGZpbGwtb3BhY2l0eT0iLjg4MyIvPjwvc3ZnPg==' />
                                </Box>
                                <Box display='flex' gap='5px'>
                                    <Text textAlign='left' fontWeight="500" fontSize="16px" lineHeight='1'>
                                        CRM
                                    </Text>
                                    <Image src='data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjkiIGhlaWdodD0iMTMiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggb3BhY2l0eT0iLjY0NCIgZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik02IDFhNiA2IDAgMSAwIDAgMTJoMTdhNiA2IDAgMCAwIDAtMTJINnptMCAxYTUgNSAwIDAgMCAwIDEwaDE3YTUgNSAwIDAgMCAwLTEwSDZ6IiBmaWxsPSIjN0NBOTU5Ii8+PHBhdGggb3BhY2l0eT0iLjkiIGQ9Ik0zIDdhMyAzIDAgMCAxIDMtM2gyLjk0YS4wNi4wNiAwIDAgMSAuMDYuMDZ2NS44OGEuMDYuMDYgMCAwIDEtLjA2LjA2SDZhMyAzIDAgMCAxLTMtM3oiIGZpbGw9IiM1NzlGMUUiIGZpbGwtb3BhY2l0eT0iLjg4MyIvPjwvc3ZnPg==' />
                                </Box>
                                <Box display='flex' gap='5px'>
                                    <Text textAlign='left' fontWeight="500" fontSize="16px" lineHeight='1'>
                                        Drive
                                    </Text>
                                    <Image src='data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjkiIGhlaWdodD0iMTMiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggb3BhY2l0eT0iLjY0NCIgZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik02IDFhNiA2IDAgMSAwIDAgMTJoMTdhNiA2IDAgMCAwIDAtMTJINnptMCAxYTUgNSAwIDAgMCAwIDEwaDE3YTUgNSAwIDAgMCAwLTEwSDZ6IiBmaWxsPSIjN0NBOTU5Ii8+PHBhdGggb3BhY2l0eT0iLjkiIGQ9Ik0zIDdhMyAzIDAgMCAxIDMtM2gyLjk0YS4wNi4wNiAwIDAgMSAuMDYuMDZ2NS44OGEuMDYuMDYgMCAwIDEtLjA2LjA2SDZhMyAzIDAgMCAxLTMtM3oiIGZpbGw9IiM1NzlGMUUiIGZpbGwtb3BhY2l0eT0iLjg4MyIvPjwvc3ZnPg==' />
                                </Box>
                                <Box display='flex' gap='5px'>
                                    <Text textAlign='left' fontWeight="500" fontSize="16px" lineHeight='1'>
                                        Contact Center
                                    </Text>
                                    <Image src='data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjkiIGhlaWdodD0iMTMiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggb3BhY2l0eT0iLjY0NCIgZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik02IDFhNiA2IDAgMSAwIDAgMTJoMTdhNiA2IDAgMCAwIDAtMTJINnptMCAxYTUgNSAwIDAgMCAwIDEwaDE3YTUgNSAwIDAgMCAwLTEwSDZ6IiBmaWxsPSIjN0NBOTU5Ii8+PHBhdGggb3BhY2l0eT0iLjkiIGQ9Ik0zIDdhMyAzIDAgMCAxIDMtM2gyLjk0YS4wNi4wNiAwIDAgMSAuMDYuMDZ2NS44OGEuMDYuMDYgMCAwIDEtLjA2LjA2SDZhMyAzIDAgMCAxLTMtM3oiIGZpbGw9IiM1NzlGMUUiIGZpbGwtb3BhY2l0eT0iLjg4MyIvPjwvc3ZnPg==' />
                                </Box>
                                <Box display='flex' gap='5px'>
                                    <Text textAlign='left' fontWeight="500" fontSize="16px" lineHeight='1'>
                                        Website builder
                                    </Text>
                                    <Image src='data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjkiIGhlaWdodD0iMTMiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggb3BhY2l0eT0iLjY0NCIgZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik02IDFhNiA2IDAgMSAwIDAgMTJoMTdhNiA2IDAgMCAwIDAtMTJINnptMCAxYTUgNSAwIDAgMCAwIDEwaDE3YTUgNSAwIDAgMCAwLTEwSDZ6IiBmaWxsPSIjN0NBOTU5Ii8+PHBhdGggb3BhY2l0eT0iLjkiIGQ9Ik0zIDdhMyAzIDAgMCAxIDMtM2gyLjk0YS4wNi4wNiAwIDAgMSAuMDYuMDZ2NS44OGEuMDYuMDYgMCAwIDEtLjA2LjA2SDZhMyAzIDAgMCAxLTMtM3oiIGZpbGw9IiM1NzlGMUUiIGZpbGwtb3BhY2l0eT0iLjg4MyIvPjwvc3ZnPg==' />
                                </Box>
                            </Stack>
                        </Box>
                    </VStack>
                </PriceWrapper>
                <PriceWrapper>
                    <Box bg='rgba(33,189,238,0.15)' py={4} px={12} >
                        <Text fontWeight="500" fontSize="20px" lineHeight='1'>
                            Basic
                        </Text>
                        <br />
                        <Text opacity='.4' fontSize="10px" fontWeight="600" lineHeight={'1.2'}>
                            Effective collaborations for small businesses and sales teams
                        </Text>
                    </Box>
                    <VStack
                        bg={useColorModeValue("rgba(231,249,255,1)")}
                        py={4}
                        borderBottomRadius={'xl'}>
                        <List spacing={5} textAlign="center" px={12}>
                            <ListItem>

                                5 users
                            </ListItem>
                            <ListItem color='#7c9b00' fontSize='21px' fontWeight={500} >
                                Rs. 2,790/mo <Badge colorScheme='yellow'>-20%</Badge>

                            </ListItem>
                            <Button bg="#21bdee" fontSize='12px' borderRadius='20px' p='0px 60px' color='white'>Buy</Button>
                            <ListItem fontWeight='600'>
                                24 GB
                            </ListItem>
                        </List>
                        <hr color='black' />
                        <Box w="80%" pt={7} >
                            <Box display='flex' gap='5px'>
                                <Text textAlign='left' fontWeight="500" fontSize="16px" lineHeight='1'>
                                    Collaborations
                                </Text>
                                <Image src='data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjkiIGhlaWdodD0iMTMiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggb3BhY2l0eT0iLjk5NCIgZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik02IDFhNiA2IDAgMSAwIDAgMTJoMTdhNiA2IDAgMCAwIDAtMTJINnptMCAxYTUgNSAwIDAgMCAwIDEwaDE3YTUgNSAwIDAgMCAwLTEwSDZ6IiBmaWxsPSIjNzlCRUQ0Ii8+PHBhdGggZD0iTTMgN2EzIDMgMCAwIDEgMy0zaDIuOTRhLjA2LjA2IDAgMCAxIC4wNi4wNnY1Ljg4YS4wNi4wNiAwIDAgMS0uMDYuMDZINmEzIDMgMCAwIDEtMy0zeiIgZmlsbD0iIzI3OTFCMyIgZmlsbC1vcGFjaXR5PSIuODEiLz48cmVjdCB4PSIxMSIgeT0iNCIgd2lkdGg9IjYiIGhlaWdodD0iNiIgcng9IjEiIGZpbGw9IiMyNzkxQjMiIGZpbGwtb3BhY2l0eT0iLjgxIi8+PC9zdmc+' />
                            </Box>
                            <br />
                            <Box
                                fontSize='12px'
                                fontWeight='600'
                                color="#525c69"
                                textAlign='justify'
                            >
                                <Text>Chat</Text>
                                <Text>HD Videocalls</Text>
                                <Text>Calendar</Text>
                                <Text>Company workspace</Text>
                                <Text>Feed</Text>
                                <Text>Knowledge base</Text>
                            </Box>
                            <br />
                            <Stack spacing={4}>
                                <Box display='flex' gap='5px'>
                                    <Text textAlign='left' fontWeight="500" fontSize="16px" lineHeight='1'>
                                        Task & projects
                                    </Text>
                                    <Image src='data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjkiIGhlaWdodD0iMTMiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggb3BhY2l0eT0iLjk5NCIgZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik02IDFhNiA2IDAgMSAwIDAgMTJoMTdhNiA2IDAgMCAwIDAtMTJINnptMCAxYTUgNSAwIDAgMCAwIDEwaDE3YTUgNSAwIDAgMCAwLTEwSDZ6IiBmaWxsPSIjNzlCRUQ0Ii8+PHBhdGggZD0iTTMgN2EzIDMgMCAwIDEgMy0zaDIuOTRhLjA2LjA2IDAgMCAxIC4wNi4wNnY1Ljg4YS4wNi4wNiAwIDAgMS0uMDYuMDZINmEzIDMgMCAwIDEtMy0zeiIgZmlsbD0iIzI3OTFCMyIgZmlsbC1vcGFjaXR5PSIuODEiLz48cmVjdCB4PSIxMSIgeT0iNCIgd2lkdGg9IjYiIGhlaWdodD0iNiIgcng9IjEiIGZpbGw9IiMyNzkxQjMiIGZpbGwtb3BhY2l0eT0iLjgxIi8+PC9zdmc+' />
                                </Box>
                                <Box display='flex' gap='5px'>
                                    <Text textAlign='left' fontWeight="500" fontSize="16px" lineHeight='1'>
                                        CRM
                                    </Text>
                                    <Image src='data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjkiIGhlaWdodD0iMTMiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggb3BhY2l0eT0iLjk5NCIgZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik02IDFhNiA2IDAgMSAwIDAgMTJoMTdhNiA2IDAgMCAwIDAtMTJINnptMCAxYTUgNSAwIDAgMCAwIDEwaDE3YTUgNSAwIDAgMCAwLTEwSDZ6IiBmaWxsPSIjNzlCRUQ0Ii8+PHBhdGggZD0iTTMgN2EzIDMgMCAwIDEgMy0zaDIuOTRhLjA2LjA2IDAgMCAxIC4wNi4wNnY1Ljg4YS4wNi4wNiAwIDAgMS0uMDYuMDZINmEzIDMgMCAwIDEtMy0zeiIgZmlsbD0iIzI3OTFCMyIgZmlsbC1vcGFjaXR5PSIuODEiLz48cmVjdCB4PSIxMSIgeT0iNCIgd2lkdGg9IjYiIGhlaWdodD0iNiIgcng9IjEiIGZpbGw9IiMyNzkxQjMiIGZpbGwtb3BhY2l0eT0iLjgxIi8+PC9zdmc+' />
                                </Box>
                                <Box display='flex' gap='5px'>
                                    <Text textAlign='left' fontWeight="500" fontSize="16px" lineHeight='1'>
                                        Drive
                                    </Text>
                                    <Image src='data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjkiIGhlaWdodD0iMTMiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggb3BhY2l0eT0iLjk5NCIgZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik02IDFhNiA2IDAgMSAwIDAgMTJoMTdhNiA2IDAgMCAwIDAtMTJINnptMCAxYTUgNSAwIDAgMCAwIDEwaDE3YTUgNSAwIDAgMCAwLTEwSDZ6IiBmaWxsPSIjNzlCRUQ0Ii8+PHBhdGggZD0iTTMgN2EzIDMgMCAwIDEgMy0zaDIuOTRhLjA2LjA2IDAgMCAxIC4wNi4wNnY1Ljg4YS4wNi4wNiAwIDAgMS0uMDYuMDZINmEzIDMgMCAwIDEtMy0zeiIgZmlsbD0iIzI3OTFCMyIgZmlsbC1vcGFjaXR5PSIuODEiLz48cmVjdCB4PSIxMSIgeT0iNCIgd2lkdGg9IjYiIGhlaWdodD0iNiIgcng9IjEiIGZpbGw9IiMyNzkxQjMiIGZpbGwtb3BhY2l0eT0iLjgxIi8+PC9zdmc+' />
                                </Box>
                                <Box display='flex' gap='5px'>
                                    <Text textAlign='left' fontWeight="500" fontSize="16px" lineHeight='1'>
                                        Contact Center
                                    </Text>
                                    <Image src='data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjkiIGhlaWdodD0iMTMiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggb3BhY2l0eT0iLjk5NCIgZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik02IDFhNiA2IDAgMSAwIDAgMTJoMTdhNiA2IDAgMCAwIDAtMTJINnptMCAxYTUgNSAwIDAgMCAwIDEwaDE3YTUgNSAwIDAgMCAwLTEwSDZ6IiBmaWxsPSIjNzlCRUQ0Ii8+PHBhdGggZD0iTTMgN2EzIDMgMCAwIDEgMy0zaDIuOTRhLjA2LjA2IDAgMCAxIC4wNi4wNnY1Ljg4YS4wNi4wNiAwIDAgMS0uMDYuMDZINmEzIDMgMCAwIDEtMy0zeiIgZmlsbD0iIzI3OTFCMyIgZmlsbC1vcGFjaXR5PSIuODEiLz48cmVjdCB4PSIxMSIgeT0iNCIgd2lkdGg9IjYiIGhlaWdodD0iNiIgcng9IjEiIGZpbGw9IiMyNzkxQjMiIGZpbGwtb3BhY2l0eT0iLjgxIi8+PC9zdmc+' />
                                </Box>
                                <Box display='flex' gap='5px'>
                                    <Text textAlign='left' fontWeight="500" fontSize="16px" lineHeight='1'>
                                        Website builder
                                    </Text>
                                    <Image src='data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjkiIGhlaWdodD0iMTMiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggb3BhY2l0eT0iLjk5NCIgZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik02IDFhNiA2IDAgMSAwIDAgMTJoMTdhNiA2IDAgMCAwIDAtMTJINnptMCAxYTUgNSAwIDAgMCAwIDEwaDE3YTUgNSAwIDAgMCAwLTEwSDZ6IiBmaWxsPSIjNzlCRUQ0Ii8+PHBhdGggZD0iTTMgN2EzIDMgMCAwIDEgMy0zaDIuOTRhLjA2LjA2IDAgMCAxIC4wNi4wNnY1Ljg4YS4wNi4wNiAwIDAgMS0uMDYuMDZINmEzIDMgMCAwIDEtMy0zeiIgZmlsbD0iIzI3OTFCMyIgZmlsbC1vcGFjaXR5PSIuODEiLz48cmVjdCB4PSIxMSIgeT0iNCIgd2lkdGg9IjYiIGhlaWdodD0iNiIgcng9IjEiIGZpbGw9IiMyNzkxQjMiIGZpbGwtb3BhY2l0eT0iLjgxIi8+PC9zdmc+' />
                                </Box>
                            </Stack>
                        </Box>
                    </VStack>
                </PriceWrapper>
                <PriceWrapper>
                    <Box bg='rgba(33,189,238,0.15)' py={4} px={12} >
                        <Text fontWeight="500" fontSize="20px" lineHeight='1'>
                            Standard
                        </Text>
                        <br />
                        <Text opacity='.4' fontSize="10px" fontWeight="600" lineHeight={'1.2'}>
                            Advanced collaboration for your entire company and workgroups
                        </Text>
                    </Box>
                    <VStack
                        bg={useColorModeValue("rgba(231,249,255,1)")}
                        py={4}
                        borderBottomRadius={'xl'}>
                        <List spacing={5} textAlign="center" px={12} >
                            <ListItem>

                                50 users
                            </ListItem>
                            <ListItem color='#7c9b00' fontSize='21px' fontWeight={500} >
                                Rs. 5,590/mo <Badge colorScheme='yellow'>-20%</Badge>

                            </ListItem>
                            <Button bg="#21bdee" fontSize='12px' borderRadius='20px' p='0px 60px' color='white'>Buy</Button>
                            <ListItem fontWeight='600'>
                                100 GB
                            </ListItem>
                        </List>
                        <hr color='black' />
                        <Box w="80%" pt={7} >
                            <Box display='flex' gap='5px'>
                                <Text textAlign='left' fontWeight="500" fontSize="16px" lineHeight='1'>
                                    Collaborations
                                </Text>
                                <Image src='data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjkiIGhlaWdodD0iMTMiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggb3BhY2l0eT0iLjk5NCIgZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik02IDFhNiA2IDAgMSAwIDAgMTJoMTdhNiA2IDAgMCAwIDAtMTJINnptMCAxYTUgNSAwIDAgMCAwIDEwaDE3YTUgNSAwIDAgMCAwLTEwSDZ6IiBmaWxsPSIjNzlCRUQ0Ii8+PHBhdGggZD0iTTMgN2EzIDMgMCAwIDEgMy0zaDIuOTRhLjA2LjA2IDAgMCAxIC4wNi4wNnY1Ljg4YS4wNi4wNiAwIDAgMS0uMDYuMDZINmEzIDMgMCAwIDEtMy0zeiIgZmlsbD0iIzI3OTFCMyIgZmlsbC1vcGFjaXR5PSIuODEiLz48cmVjdCB4PSIxMSIgeT0iNCIgd2lkdGg9IjYiIGhlaWdodD0iNiIgcng9IjEiIGZpbGw9IiMyNzkxQjMiIGZpbGwtb3BhY2l0eT0iLjgxIi8+PC9zdmc+' />
                            </Box>
                            <br />
                            <Box
                                fontSize='12px'
                                fontWeight='600'
                                color="#525c69"
                                textAlign='justify'
                            >
                                <Text>Chat</Text>
                                <Text>HD Videocalls</Text>
                                <Text>Calendar</Text>
                                <Text>Company workspace</Text>
                                <Text>Feed</Text>
                                <Text>Knowledge base</Text>
                            </Box>
                            <br />
                            <Stack spacing={4}>
                                <Box display='flex' gap='5px'>
                                    <Text textAlign='left' fontWeight="500" fontSize="16px" lineHeight='1'>
                                        Task & projects
                                    </Text>
                                    <Image src='data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjkiIGhlaWdodD0iMTMiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggb3BhY2l0eT0iLjk5NCIgZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik02IDFhNiA2IDAgMSAwIDAgMTJoMTdhNiA2IDAgMCAwIDAtMTJINnptMCAxYTUgNSAwIDAgMCAwIDEwaDE3YTUgNSAwIDAgMCAwLTEwSDZ6IiBmaWxsPSIjNzlCRUQ0Ii8+PHBhdGggZD0iTTMgN2EzIDMgMCAwIDEgMy0zaDIuOTRhLjA2LjA2IDAgMCAxIC4wNi4wNnY1Ljg4YS4wNi4wNiAwIDAgMS0uMDYuMDZINmEzIDMgMCAwIDEtMy0zeiIgZmlsbD0iIzI3OTFCMyIgZmlsbC1vcGFjaXR5PSIuODEiLz48cmVjdCB4PSIxMSIgeT0iNCIgd2lkdGg9IjYiIGhlaWdodD0iNiIgcng9IjEiIGZpbGw9IiMyNzkxQjMiIGZpbGwtb3BhY2l0eT0iLjgxIi8+PC9zdmc+' />
                                </Box>
                                <Box display='flex' gap='5px'>
                                    <Text textAlign='left' fontWeight="500" fontSize="16px" lineHeight='1'>
                                        CRM
                                    </Text>
                                    <Image src='data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjkiIGhlaWdodD0iMTMiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggb3BhY2l0eT0iLjk5NCIgZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik02IDFhNiA2IDAgMSAwIDAgMTJoMTdhNiA2IDAgMCAwIDAtMTJINnptMCAxYTUgNSAwIDAgMCAwIDEwaDE3YTUgNSAwIDAgMCAwLTEwSDZ6IiBmaWxsPSIjNzlCRUQ0Ii8+PHBhdGggZD0iTTMgN2EzIDMgMCAwIDEgMy0zaDIuOTRhLjA2LjA2IDAgMCAxIC4wNi4wNnY1Ljg4YS4wNi4wNiAwIDAgMS0uMDYuMDZINmEzIDMgMCAwIDEtMy0zeiIgZmlsbD0iIzI3OTFCMyIgZmlsbC1vcGFjaXR5PSIuODEiLz48cmVjdCB4PSIxMSIgeT0iNCIgd2lkdGg9IjYiIGhlaWdodD0iNiIgcng9IjEiIGZpbGw9IiMyNzkxQjMiIGZpbGwtb3BhY2l0eT0iLjgxIi8+PC9zdmc+' />
                                </Box>
                                <Box display='flex' gap='5px'>
                                    <Text textAlign='left' fontWeight="500" fontSize="16px" lineHeight='1'>
                                        Drive
                                    </Text>
                                    <Image src='data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjkiIGhlaWdodD0iMTMiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggb3BhY2l0eT0iLjk5NCIgZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik02IDFhNiA2IDAgMSAwIDAgMTJoMTdhNiA2IDAgMCAwIDAtMTJINnptMCAxYTUgNSAwIDAgMCAwIDEwaDE3YTUgNSAwIDAgMCAwLTEwSDZ6IiBmaWxsPSIjNzlCRUQ0Ii8+PHBhdGggZD0iTTMgN2EzIDMgMCAwIDEgMy0zaDIuOTRhLjA2LjA2IDAgMCAxIC4wNi4wNnY1Ljg4YS4wNi4wNiAwIDAgMS0uMDYuMDZINmEzIDMgMCAwIDEtMy0zeiIgZmlsbD0iIzI3OTFCMyIgZmlsbC1vcGFjaXR5PSIuODEiLz48cmVjdCB4PSIxMSIgeT0iNCIgd2lkdGg9IjYiIGhlaWdodD0iNiIgcng9IjEiIGZpbGw9IiMyNzkxQjMiIGZpbGwtb3BhY2l0eT0iLjgxIi8+PC9zdmc+' />
                                </Box>
                                <Box display='flex' gap='5px'>
                                    <Text textAlign='left' fontWeight="500" fontSize="16px" lineHeight='1'>
                                        Contact Center
                                    </Text>
                                    <Image src='data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjkiIGhlaWdodD0iMTMiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggb3BhY2l0eT0iLjk5NCIgZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik02IDFhNiA2IDAgMSAwIDAgMTJoMTdhNiA2IDAgMCAwIDAtMTJINnptMCAxYTUgNSAwIDAgMCAwIDEwaDE3YTUgNSAwIDAgMCAwLTEwSDZ6IiBmaWxsPSIjNzlCRUQ0Ii8+PHBhdGggZD0iTTMgN2EzIDMgMCAwIDEgMy0zaDIuOTRhLjA2LjA2IDAgMCAxIC4wNi4wNnY1Ljg4YS4wNi4wNiAwIDAgMS0uMDYuMDZINmEzIDMgMCAwIDEtMy0zeiIgZmlsbD0iIzI3OTFCMyIgZmlsbC1vcGFjaXR5PSIuODEiLz48cmVjdCB4PSIxMSIgeT0iNCIgd2lkdGg9IjYiIGhlaWdodD0iNiIgcng9IjEiIGZpbGw9IiMyNzkxQjMiIGZpbGwtb3BhY2l0eT0iLjgxIi8+PC9zdmc+' />
                                </Box>
                                <Box display='flex' gap='5px'>
                                    <Text textAlign='left' fontWeight="500" fontSize="16px" lineHeight='1'>
                                        Website builder
                                    </Text>
                                    <Image src='data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjkiIGhlaWdodD0iMTMiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggb3BhY2l0eT0iLjk5NCIgZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik02IDFhNiA2IDAgMSAwIDAgMTJoMTdhNiA2IDAgMCAwIDAtMTJINnptMCAxYTUgNSAwIDAgMCAwIDEwaDE3YTUgNSAwIDAgMCAwLTEwSDZ6IiBmaWxsPSIjNzlCRUQ0Ii8+PHBhdGggZD0iTTMgN2EzIDMgMCAwIDEgMy0zaDIuOTRhLjA2LjA2IDAgMCAxIC4wNi4wNnY1Ljg4YS4wNi4wNiAwIDAgMS0uMDYuMDZINmEzIDMgMCAwIDEtMy0zeiIgZmlsbD0iIzI3OTFCMyIgZmlsbC1vcGFjaXR5PSIuODEiLz48cmVjdCB4PSIxMSIgeT0iNCIgd2lkdGg9IjYiIGhlaWdodD0iNiIgcng9IjEiIGZpbGw9IiMyNzkxQjMiIGZpbGwtb3BhY2l0eT0iLjgxIi8+PC9zdmc+' />
                                </Box>
                            </Stack>
                        </Box>
                    </VStack>
                </PriceWrapper>
                <PriceWrapper>
                    <Box bg='rgba(33,189,238,0.15)' py={4} px={12} >
                        <Text fontWeight="500" fontSize="20px" lineHeight='1'>
                            Professional
                        </Text>
                        <br />
                        <Text opacity='.4' fontSize="10px" fontWeight="600" lineHeight={'1.2'}>
                            Maximum sales and business process automation
                        </Text>
                    </Box>
                    <VStack
                        bg={useColorModeValue("rgba(231,249,255,1)")}
                        py={4}
                        borderBottomRadius={'xl'}>
                        <List spacing={5} textAlign="center" px={12} >
                            <ListItem>
                                <ListIcon as={ImFire} color="red" />
                                Unlimited users
                            </ListItem>
                            <ListItem color='#7c9b00' fontSize='21px' fontWeight={500} >
                                Rs. 11,190/mo <Badge colorScheme='yellow'>-20%</Badge>

                            </ListItem>
                            <Button bg="#21bdee" fontSize='12px' borderRadius='20px' p='0px 60px' color='white'>Buy</Button>
                            <ListItem fontWeight='600'>
                                1,024 GB
                            </ListItem>
                        </List>
                        <hr color='black' />
                        <Box w="80%" pt={7} >
                            <Box display='flex' gap='5px'>
                                <Text textAlign='left' fontWeight="500" fontSize="16px" lineHeight='1'>
                                    Collaborations
                                </Text>
                                <Image src='data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjkiIGhlaWdodD0iMTMiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggb3BhY2l0eT0iLjk5NCIgZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik02IDFhNiA2IDAgMSAwIDAgMTJoMTdhNiA2IDAgMCAwIDAtMTJINnptMCAxYTUgNSAwIDAgMCAwIDEwaDE3YTUgNSAwIDAgMCAwLTEwSDZ6IiBmaWxsPSIjNzlCRUQ0Ii8+PHBhdGggZD0iTTMgN2EzIDMgMCAwIDEgMy0zaDIuOTRhLjA2LjA2IDAgMCAxIC4wNi4wNnY1Ljg4YS4wNi4wNiAwIDAgMS0uMDYuMDZINmEzIDMgMCAwIDEtMy0zek0yNiA3YTMgMyAwIDAgMS0zIDNoLTMuOTNhLjA3LjA3IDAgMCAxLS4wNy0uMDdWNC4wN2EuMDcuMDcgMCAwIDEgLjA3LS4wN0gyM2EzIDMgMCAwIDEgMyAzeiIgZmlsbD0iIzI3OTFCMyIgZmlsbC1vcGFjaXR5PSIuODEiLz48cmVjdCB4PSIxMSIgeT0iNCIgd2lkdGg9IjYiIGhlaWdodD0iNiIgcng9IjEiIGZpbGw9IiMyNzkxQjMiIGZpbGwtb3BhY2l0eT0iLjgxIi8+PC9zdmc+' />
                            </Box>
                            <br />
                            <Box
                                fontSize='12px'
                                fontWeight='600'
                                color="#525c69"
                                textAlign='justify'
                            >
                                <Text>Chat</Text>
                                <Text>HD Videocalls</Text>
                                <Text>Calendar</Text>
                                <Text>Company workspace</Text>
                                <Text>Feed</Text>
                                <Text>Knowledge base</Text>
                            </Box>
                            <br />
                            <Stack spacing={4}>
                                <Box display='flex' gap='5px'>
                                    <Text textAlign='left' fontWeight="500" fontSize="16px" lineHeight='1'>
                                        Task & projects
                                    </Text>
                                    <Image src='data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjkiIGhlaWdodD0iMTMiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggb3BhY2l0eT0iLjk5NCIgZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik02IDFhNiA2IDAgMSAwIDAgMTJoMTdhNiA2IDAgMCAwIDAtMTJINnptMCAxYTUgNSAwIDAgMCAwIDEwaDE3YTUgNSAwIDAgMCAwLTEwSDZ6IiBmaWxsPSIjNzlCRUQ0Ii8+PHBhdGggZD0iTTMgN2EzIDMgMCAwIDEgMy0zaDIuOTRhLjA2LjA2IDAgMCAxIC4wNi4wNnY1Ljg4YS4wNi4wNiAwIDAgMS0uMDYuMDZINmEzIDMgMCAwIDEtMy0zek0yNiA3YTMgMyAwIDAgMS0zIDNoLTMuOTNhLjA3LjA3IDAgMCAxLS4wNy0uMDdWNC4wN2EuMDcuMDcgMCAwIDEgLjA3LS4wN0gyM2EzIDMgMCAwIDEgMyAzeiIgZmlsbD0iIzI3OTFCMyIgZmlsbC1vcGFjaXR5PSIuODEiLz48cmVjdCB4PSIxMSIgeT0iNCIgd2lkdGg9IjYiIGhlaWdodD0iNiIgcng9IjEiIGZpbGw9IiMyNzkxQjMiIGZpbGwtb3BhY2l0eT0iLjgxIi8+PC9zdmc+' />
                                </Box>
                                <Box display='flex' gap='5px'>
                                    <Text textAlign='left' fontWeight="500" fontSize="16px" lineHeight='1'>
                                        CRM
                                    </Text>
                                    <Image src='data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjkiIGhlaWdodD0iMTMiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggb3BhY2l0eT0iLjk5NCIgZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik02IDFhNiA2IDAgMSAwIDAgMTJoMTdhNiA2IDAgMCAwIDAtMTJINnptMCAxYTUgNSAwIDAgMCAwIDEwaDE3YTUgNSAwIDAgMCAwLTEwSDZ6IiBmaWxsPSIjNzlCRUQ0Ii8+PHBhdGggZD0iTTMgN2EzIDMgMCAwIDEgMy0zaDIuOTRhLjA2LjA2IDAgMCAxIC4wNi4wNnY1Ljg4YS4wNi4wNiAwIDAgMS0uMDYuMDZINmEzIDMgMCAwIDEtMy0zek0yNiA3YTMgMyAwIDAgMS0zIDNoLTMuOTNhLjA3LjA3IDAgMCAxLS4wNy0uMDdWNC4wN2EuMDcuMDcgMCAwIDEgLjA3LS4wN0gyM2EzIDMgMCAwIDEgMyAzeiIgZmlsbD0iIzI3OTFCMyIgZmlsbC1vcGFjaXR5PSIuODEiLz48cmVjdCB4PSIxMSIgeT0iNCIgd2lkdGg9IjYiIGhlaWdodD0iNiIgcng9IjEiIGZpbGw9IiMyNzkxQjMiIGZpbGwtb3BhY2l0eT0iLjgxIi8+PC9zdmc+' />
                                </Box>
                                <Box display='flex' gap='5px'>
                                    <Text textAlign='left' fontWeight="500" fontSize="16px" lineHeight='1'>
                                        Drive
                                    </Text>
                                    <Image src='data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjkiIGhlaWdodD0iMTMiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggb3BhY2l0eT0iLjk5NCIgZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik02IDFhNiA2IDAgMSAwIDAgMTJoMTdhNiA2IDAgMCAwIDAtMTJINnptMCAxYTUgNSAwIDAgMCAwIDEwaDE3YTUgNSAwIDAgMCAwLTEwSDZ6IiBmaWxsPSIjNzlCRUQ0Ii8+PHBhdGggZD0iTTMgN2EzIDMgMCAwIDEgMy0zaDIuOTRhLjA2LjA2IDAgMCAxIC4wNi4wNnY1Ljg4YS4wNi4wNiAwIDAgMS0uMDYuMDZINmEzIDMgMCAwIDEtMy0zek0yNiA3YTMgMyAwIDAgMS0zIDNoLTMuOTNhLjA3LjA3IDAgMCAxLS4wNy0uMDdWNC4wN2EuMDcuMDcgMCAwIDEgLjA3LS4wN0gyM2EzIDMgMCAwIDEgMyAzeiIgZmlsbD0iIzI3OTFCMyIgZmlsbC1vcGFjaXR5PSIuODEiLz48cmVjdCB4PSIxMSIgeT0iNCIgd2lkdGg9IjYiIGhlaWdodD0iNiIgcng9IjEiIGZpbGw9IiMyNzkxQjMiIGZpbGwtb3BhY2l0eT0iLjgxIi8+PC9zdmc+' />
                                </Box>
                                <Box display='flex' gap='5px'>
                                    <Text textAlign='left' fontWeight="500" fontSize="16px" lineHeight='1'>
                                        Contact Center
                                    </Text>
                                    <Image src='data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjkiIGhlaWdodD0iMTMiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggb3BhY2l0eT0iLjk5NCIgZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik02IDFhNiA2IDAgMSAwIDAgMTJoMTdhNiA2IDAgMCAwIDAtMTJINnptMCAxYTUgNSAwIDAgMCAwIDEwaDE3YTUgNSAwIDAgMCAwLTEwSDZ6IiBmaWxsPSIjNzlCRUQ0Ii8+PHBhdGggZD0iTTMgN2EzIDMgMCAwIDEgMy0zaDIuOTRhLjA2LjA2IDAgMCAxIC4wNi4wNnY1Ljg4YS4wNi4wNiAwIDAgMS0uMDYuMDZINmEzIDMgMCAwIDEtMy0zek0yNiA3YTMgMyAwIDAgMS0zIDNoLTMuOTNhLjA3LjA3IDAgMCAxLS4wNy0uMDdWNC4wN2EuMDcuMDcgMCAwIDEgLjA3LS4wN0gyM2EzIDMgMCAwIDEgMyAzeiIgZmlsbD0iIzI3OTFCMyIgZmlsbC1vcGFjaXR5PSIuODEiLz48cmVjdCB4PSIxMSIgeT0iNCIgd2lkdGg9IjYiIGhlaWdodD0iNiIgcng9IjEiIGZpbGw9IiMyNzkxQjMiIGZpbGwtb3BhY2l0eT0iLjgxIi8+PC9zdmc+' />
                                </Box>
                                <Box display='flex' gap='5px'>
                                    <Text textAlign='left' fontWeight="500" fontSize="16px" lineHeight='1'>
                                        Website builder
                                    </Text>
                                    <Image src='data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjkiIGhlaWdodD0iMTMiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggb3BhY2l0eT0iLjk5NCIgZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik02IDFhNiA2IDAgMSAwIDAgMTJoMTdhNiA2IDAgMCAwIDAtMTJINnptMCAxYTUgNSAwIDAgMCAwIDEwaDE3YTUgNSAwIDAgMCAwLTEwSDZ6IiBmaWxsPSIjNzlCRUQ0Ii8+PHBhdGggZD0iTTMgN2EzIDMgMCAwIDEgMy0zaDIuOTRhLjA2LjA2IDAgMCAxIC4wNi4wNnY1Ljg4YS4wNi4wNiAwIDAgMS0uMDYuMDZINmEzIDMgMCAwIDEtMy0zek0yNiA3YTMgMyAwIDAgMS0zIDNoLTMuOTNhLjA3LjA3IDAgMCAxLS4wNy0uMDdWNC4wN2EuMDcuMDcgMCAwIDEgLjA3LS4wN0gyM2EzIDMgMCAwIDEgMyAzeiIgZmlsbD0iIzI3OTFCMyIgZmlsbC1vcGFjaXR5PSIuODEiLz48cmVjdCB4PSIxMSIgeT0iNCIgd2lkdGg9IjYiIGhlaWdodD0iNiIgcng9IjEiIGZpbGw9IiMyNzkxQjMiIGZpbGwtb3BhY2l0eT0iLjgxIi8+PC9zdmc+' />
                                </Box>
                            </Stack>
                        </Box>
                    </VStack>
                </PriceWrapper>
            </Stack>
        </Box >
    );
}