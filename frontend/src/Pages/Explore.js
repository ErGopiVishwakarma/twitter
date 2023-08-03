
import RightSidebar from './RightSidebar'
import { Avatar, Box, Button, Flex, Heading, Input, InputGroup, InputLeftElement, Spinner, Text, VStack } from '@chakra-ui/react'
import React, { memo, useContext, useEffect, useState } from 'react'
import { BiSearch } from 'react-icons/bi'
import { FiSettings } from 'react-icons/fi'
import ExploreTabPanal from '../Component/ExploreTabPanal'
import { ContextProvider } from '../Route/ContextApi'
import axios from 'axios'
import Post from '../Component/homeComponent/Post'
import { NavLink, useLocation } from 'react-router-dom'
import SearchUserList from '../Component/SearchUserList'
import MobileNavbar from '../Component/navComponent/MobileNavbar'
import WhoToFollow from '../Component/miscellaneous/WhoToFollow'
import Trending from '../Component/miscellaneous/Trending'

const Explore = () => {

  const { homeUpdate } = useContext(ContextProvider)
  const [post, setPost] = useState([])
  const [loading, setLoading] = useState(false)
  const [searchResult, setSearchResult] = useState([])
  const token = JSON.parse(localStorage.getItem('twitteruser'))
  const [userPost, setUserPost] = useState([])
  const [userLoading, setUserLoading] = useState(false)
  const location = useLocation()

  const getPost = async () => {
    try {
      const config = {
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token.token}`
        }
      }
      const { data } = await axios.get(`https://social-world.onrender.com/post/getallpost`, config)
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
      const { data } = await axios.get(`https://social-world.onrender.com/user/searchuser?search=${search}`, config)
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
        <Flex px={{ base: 'none', md: '20px' }} position={'relative'} direction={'column'} gap='20px'
          w={{ base: '100%', sm: '100%', md: '100%', lg: '65%' }}

        >
          <Flex w='100%' gap='10px' alignItems={'center'} pt='10px' px={{ base: '10px', md: "none" }}>
            <Box mr='10px' display={{ base: 'block', md: "none" }}>
              <MobileNavbar><Avatar h='33px' w='33px' src={token.pic} /></MobileNavbar>
            </Box>
            <InputGroup w="100%"  >
              <InputLeftElement pointerEvents='none'>
                <BiSearch color='gray.200' />
              </InputLeftElement>
              <Input type='text' h={{ base: '33px', md: '' }} placeholder='search'
                borderRadius={'50px'} fontSize={'18px'} variant={'filled'} bg='gray.200' onChange={(e) => searchUser(e.target.value)} />
            </InputGroup>
            <FiSettings fontSize={'25px'} />
          </Flex>
          {/* showing search result here  */}
          <Flex direction={'column'} maxH='400px' overflowY={'scroll'} display={searchResult.length > 0 ? "flex" : 'none'}
            zIndex={12} bg='white' mt='42px' >
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
         
              <Trending />
          {/* showing post here  */}
          <VStack pt='20px'>
            {
              post?.map(el => (
                <Post el={el} key={el._id} />
              ))
            }
          </VStack>
        </Flex>


        <Box w='35%' display={{ base: 'none', sm: 'none', md: 'none', lg: 'block' }} pt='10px'
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
          {/* who to follow  */}
          <WhoToFollow />

        </Box>
      </Flex >
    </>
  )
}

export default memo(Explore)