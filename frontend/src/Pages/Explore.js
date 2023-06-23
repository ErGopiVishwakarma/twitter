
import RightSidebar from './RightSidebar'
import { Avatar, Box, Button, Flex, Heading, Input, InputGroup, InputLeftElement, Spinner, Text, VStack } from '@chakra-ui/react'
import React, { useContext, useEffect, useState } from 'react'
import { BiSearch } from 'react-icons/bi'
import { FiSettings } from 'react-icons/fi'
import ExploreTabPanal from '../Component/ExploreTabPanal'
import { ContextProvider } from '../Route/ContextApi'
import axios from 'axios'
import Post from '../Component/homeComponent/Post'
import { NavLink, useLocation } from 'react-router-dom'
import SearchUserList from '../Component/SearchUserList'
import MobileNavbar from '../Component/navComponent/MobileNavbar'

const Explore = () => {
  const trendingArr = new Array(6).fill(0)
  const followArr = new Array(4).fill(0)
  const { homeUpdate } = useContext(ContextProvider)
  const [post, setPost] = useState([])
  const [loading, setLoading] = useState(false)
  const [searchResult, setSearchResult] = useState([])
  const token = JSON.parse(localStorage.getItem('twitteruser'))
  const location = useLocation()
  console.log(location)
  const getPost = async () => {
    try {
      const config = {
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token.token}`
        }
      }
      const { data } = await axios.get(`http://localhost:8080/post/getallpost`, config)
      console.log(data)
      setPost(data)

    } catch (error) {
      console.log(error.message)
      alert('ohh something went wrong')
    }
  }

  useEffect(() => {
    getPost()
  }, [homeUpdate])


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

  return (
    <>
      <Flex>
        <Flex px="20px" overflowY={'auto'} h="100vh" position={'relative'} direction={'column'} gap='20px'
          w={{ base: '100%', sm: '100%', md: '100%', lg: '60%' }}
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
          <Flex w='100%' gap='10px' alignItems={'center'} pt='10px'>
            <Box mr='10px' display={{base:'block',md:"none"}}>
              <MobileNavbar><Avatar h='33px' w='33px' src={token.pic} /></MobileNavbar>
            </Box>
            <InputGroup w="100%"  >
              <InputLeftElement pointerEvents='none'>
                <BiSearch color='gray.200' />
              </InputLeftElement>
              <Input type='text' h={{base:'33px',md:''}} placeholder='search' borderRadius={'50px'} fontSize={'18px'} variant={'filled'} bg='gray.200' onChange={(e) => searchUser(e.target.value)} />
            </InputGroup>
            <FiSettings fontSize={'25px'} />
          </Flex>
          {/* showing search result here  */}
          <Flex direction={'column'} position={'absolute'} left={{ base: 0, md: '' }} zIndex={12} w={{ base: '100%', sm: '100%', md: '400px', lg: '560px' }} bg='white' boxShadow={'rgba(0, 0, 0, 0.24) 0px 3px 8px'} mt='40px' >
            {
              loading ? <Flex justify={'center'}><Spinner size='md' /> </Flex> :
                searchResult?.map(el => (
                  <NavLink to={`/explore/profile/${el._id}`}><SearchUserList el={el} key={el._id} /></NavLink>
                ))
            }
          </Flex>

          {/*trending section here  */}

          <Box w='100%'>
            <ExploreTabPanal />
          </Box>
          {/* what is happenning secttion her  */}
          <Flex direction={'column'} justifyContent={'flex-start'} bg='gray.100'>
            <Heading fontSize='22px' color='#0F1419 ' fontFamily={'revert'} p='15px'>What is happening</Heading>
            <Flex direction={'column'} >
              {
                trendingArr.map((el, ind) => (
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

          {/* showing post here  */}
          <VStack spacing={'20px'} pt='20px'>
            {
              post?.map(el => (
                <Post el={el} key={el._id} />
              ))
            }
          </VStack>
        </Flex>


        <Box w='40%' display={{ base: 'none', sm: 'none', md: 'none', lg: 'block' }} pt='10px'>
          <Flex direction={'column'} p='15px' gap='20px' bg='gray.100'>
            <Heading fontSize={'22px'}>Who to follow</Heading>
            {
              followArr.map((el, ind) => (
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
        </Box>
      </Flex >
    </>
  )
}

export default Explore