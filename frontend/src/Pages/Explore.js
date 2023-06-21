
import RightSidebar from './RightSidebar'
import { Avatar, Box, Button, Flex, Heading, Input, InputGroup, InputLeftElement, Spinner, Text, VStack } from '@chakra-ui/react'
import React, { useContext, useEffect, useState } from 'react'
import { BiSearch } from 'react-icons/bi'
import { FiSettings } from 'react-icons/fi'
import ExploreTabPanal from '../Component/ExploreTabPanal'
import { ContextProvider } from '../Route/ContextApi'
import axios from 'axios'
import Post from '../Component/homeComponent/Post'
import { NavLink } from 'react-router-dom'
import SearchUserList from '../Component/SearchUserList'

const Explore = () => {
  const trendingArr = new Array(6).fill(0)
  const followArr = new Array(4).fill(0)
  const { homeUpdate } = useContext(ContextProvider)
  const [post, setPost] = useState([])
  const [loading, setLoading] = useState(false)
  const [searchResult, setSearchResult] = useState([])
  const token = JSON.parse(localStorage.getItem('twitteruser'))

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
          w={{base:'100%',sm:'100%',md:'60%',lg:'60%'}}
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
          <Flex w='100%' gap='40px' alignItems={'center'}>
            <InputGroup w="100%"  >
              <InputLeftElement pointerEvents='none'>
                <BiSearch color='gray.200' />
              </InputLeftElement>
              <Input type='text' placeholder='search' borderRadius={'50px'} fontSize={'18px'} variant={'filled'} bg='gray.200' onChange={(e) => searchUser(e.target.value)} />
            </InputGroup>
            <FiSettings fontSize={'25px'} />
          </Flex>
          {/* showing search result here  */}
          <Flex direction={'column'} position={'absolute'} zIndex={12} w='570px' bg='white' boxShadow={'rgba(0, 0, 0, 0.24) 0px 3px 8px'} mt='40px' >
            {
              loading ? <Flex justify={'center'}><Spinner size='md' /> </Flex> :
                searchResult?.map(el => (
                  <SearchUserList el={el} key={el._id} />
                ))
            }
          </Flex>

          {/*trending section here  */}

          <Box w='100%'>
            <ExploreTabPanal />
          </Box>
          {/* what is happenning secttion her  */}
          <Flex direction={'column'} justifyContent={'flex-start'} bg='gray.100'>
            <Heading fontSize='25px' color='#0F1419 ' fontFamily={'revert'} p='15px'>What is happening</Heading>
            <Flex direction={'column'} >
              {
                trendingArr.map(el => (
                  <Flex direction={'column'} _hover={{ backgroundColor: 'gray.200' }} px='15px' py='10px' w='100%'  >
                    <Flex justifyContent={'space-between'} w='100%' >
                      <Text fontWeight={'bold'} color="gray.500" fontSize={'15px'}>This is text</Text>
                      <Heading fontSize='20px' cursor={'pointer'}>...</Heading>
                    </Flex>
                    <Heading fontSize={'18px'}>#Gopi vishwakarma</Heading>
                    <Text fontWeight={'bold'} color="gray.500" fontSize={'15px'}>25.5k tweets</Text>
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


        <Box w='40%' display={{base:'none',sm:'none',md:'block',lg:'block'}}>
          <Flex direction={'column'} p='15px' gap='20px' bg='gray.100'>
            <Heading fontSize={'25px'}>Who to follow</Heading>
            {
              followArr.map(el => (
                <Flex justifyContent={'space-between'}>
                  <Flex gap='10px'>
                    <Avatar />
                    <Flex direction={'column'}>
                      <Heading fontSize="17px">gopi hii</Heading>
                      <Text>@gopi hii</Text>
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