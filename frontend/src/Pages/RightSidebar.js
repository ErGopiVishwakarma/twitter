import { Avatar, Box, Button, Flex, Heading, Input, InputGroup, InputLeftElement, Spinner, Text, VStack } from '@chakra-ui/react'
import axios from 'axios'
import React, { memo, useEffect, useState } from 'react'
import { BiSearch } from 'react-icons/bi'
import SearchUserList from '../Component/SearchUserList'
import { NavLink } from 'react-router-dom'
import WhoToFollow from '../Component/miscellaneous/WhoToFollow'
import Trending from '../Component/miscellaneous/Trending'

const RightSidebar = () => {

    const trendingArr = new Array(5).fill(0)
    const followArr = new Array(3).fill(0)
    const [loading, setLoading] = useState(false)
    const [searchResult, setSearchResult] = useState([])
    const token = JSON.parse(localStorage.getItem('twitteruser'))
    const [userPost, setUserPost] = useState([])
    const [userLoading, setUserLoading] = useState(false)

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
            const { data } = await axios.get(`https://social-world.onrender.com/user/searchuser?search=${search}`, config)
            console.log(data)
            setSearchResult(data)
            setLoading(false)

        } catch (error) {
            console.log(error.message)
            alert('ohh something went wrong')
        }
    }


    const getUserPost = async () => {
        try {
            setUserLoading(true)
            const config = {
                headers: {
                    'Content-Type': 'application/json',
                    Authorization: `Bearer ${token.token}`
                }
            }
            const { data } = await axios.get(`https://social-world.onrender.com/user/getuser`, config)
            setUserPost(data)
            setUserLoading(false)

        } catch (error) {
            console.log(error.message)
            alert('ohh something went wrong')
        }
    }

    useEffect(() => {
        getUserPost()
    }, [])

    return (
        <Flex w='100%' direction={'column'} gap='20px' pt='10px' fontFamily={'regulare.400'}
            h='100vh' position={'sticky'} top='0' overflowY={'scroll'}
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
            <Flex direction={'column'} maxH={'500px'} overflowY={'scroll'} position={'absolute'} zIndex={12} w='container.xl' bg='white' boxShadow={'rgba(0, 0, 0, 0.24) 0px 3px 8px'} mt='40px' >
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
            <Trending />

            {/* who to follow section here  */}

            <WhoToFollow />

        </Flex>
    )
}

export default memo(RightSidebar)