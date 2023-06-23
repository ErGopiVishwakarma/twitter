import { Avatar, Box, Button, Flex, Heading, Input, InputGroup, InputLeftElement, Spinner, Text, VStack } from '@chakra-ui/react'
import axios from 'axios'
import React, { useState } from 'react'
import { BiSearch } from 'react-icons/bi'
import SearchUserList from '../Component/SearchUserList'
import { NavLink } from 'react-router-dom'

const RightSidebar = () => {

    const trendingArr = new Array(5).fill(0)
    const followArr = new Array(3).fill(0)
    const [loading, setLoading] = useState(false)
    const [searchResult, setSearchResult] = useState([])
    const token = JSON.parse(localStorage.getItem('twitteruser'))

    const searchUser = async (search) => {
        if (search === "") {
            search = '12ab@#$%+-))(("@#!acnca))>>:"P{}+_)('
        }
        try {
            setLoading(true)
            const config = {
                headers: {
                    'Content-Type': 'application/json',
                    Authorization: `Bearer ${token.token}`
                }
            }
            const { data } = await axios.get(`http://localhost:8080/user/searchuser?search=${search}`, config)
            setSearchResult(data)
            setLoading(false)

        } catch (error) {
            console.log(error.message)
            alert('ohh something went wrong')
        }
    }
    console.log(searchResult)
    return (
        <Flex w='100%' position={'relative'} zIndex={2} direction={'column'} ml='15px' gap='20px' h='100vh' overflowY={'scroll'} pt='10px'
            fontFamily={'regulare.400'}
            css={{
                '&::-webkit-scrollbar': {
                    width: '4px',
                },
                '&::-webkit-scrollbar-track': {
                    width: '6px',
                },
                '&::-webkit-scrollbar-thumb': {
                    borderRadius: '24px',
                },
            }}
        >
            {/* search part here  */}
            <InputGroup w="100%"  >
                <InputLeftElement pointerEvents='none'>
                    <BiSearch color='gray.500' />
                </InputLeftElement>
                <Input type='text' placeholder='search' borderRadius={'50px'} fontSize={'18px'} variant={'filled'} bg='gray.300' onChange={(e) => searchUser(e.target.value)} />
            </InputGroup>
            <Flex direction={'column'} position={'fixed'} zIndex={12} w='container.xl' bg='white' boxShadow={'rgba(0, 0, 0, 0.24) 0px 3px 8px'} mt='40px' >
                {
                    loading ? <Flex justify={'center'}><Spinner size='md' /> </Flex> :
                        searchResult?.map(el => (
                            <NavLink to={`profile/${el._id}`}><SearchUserList el={el} key={el._id} /></NavLink>
                        ))
                }
            </Flex>
            {/* get verified section  */}
            <Flex direction={'column'} p='15px' bg='gray.100' gap='10px'>
                <Heading fontSize="21px">Get Verified</Heading>
                <Heading fontSize='16px'>Subscribe to unlock new features</Heading>
                <Button borderRadius={'50px'} w='120px' bg={'black'} colorScheme='white'>Get Verified</Button>
            </Flex>
            {/* what is happenning secttion her  */}
            <Flex direction={'column'} justifyContent={'flex-start'} bg='gray.100'>
                <Heading fontSize='22px' color='#0F1419 ' fontFamily={'revert'} p='15px'>What is happening</Heading>
                <Flex direction={'column'} >
                    {
                        trendingArr.map((el,ind) => (
                            <Flex direction={'column'} _hover={{ backgroundColor: 'gray.200' }} px='15px' py='10px' w='100%' key={ind}  >
                                <Flex justifyContent={'space-between'} w='100%' >
                                    <Text color="gray.600" fontSize={'13px'}>This is text</Text>
                                    <Heading fontSize='20px' cursor={'pointer'}>...</Heading>
                                </Flex>
                                <Heading fontSize={'15px'}>#Gopi vishwakarma</Heading>
                                <Text color="gray.600" fontSize={'13px'}>25.5k tweets</Text>
                            </Flex>
                        ))
                    }
                    <Heading fontSize={'18px'} color='blue.400' px='15px' py='10px' w='100%' _hover={{ backgroundColor: 'gray.200' }} cursor={'pointer'} >Show more</Heading>
                </Flex>
            </Flex>

            {/* who to follow section here  */}

            <Flex direction={'column'} p='15px' gap='20px' bg='gray.100'>
                <Heading fontSize={'22px'}>Who to follow</Heading>
                {
                    followArr.map((el,ind) => (
                        <Flex justifyContent={'space-between'} key={ind}>
                            <Flex gap='10px'>
                                <Avatar />
                                <Flex direction={'column'}>
                                    <Heading fontSize="16px">gopi hii</Heading>
                                    <Text fontSize={'14px'}>@gopi hii</Text>
                                </Flex>
                            </Flex>
                            <Button bg="black" colorScheme='white' borderRadius={'50px'}>Follow</Button>
                        </Flex>
                    ))
                }

            </Flex>
        </Flex>
    )
}

export default RightSidebar